/* =========================================================
   Zotech Docs — main.js (vanilla)
   Behaviors for a static documentation page:
   - Sidebar tree expand/collapse
   - Smooth scroll to in-page sections (sticky offset 96px)
   - Scroll-spy: highlight active section in sidebar + TOC
   - Accordion (FAQ) toggle
   - Code "copy" buttons
   - Image lightbox (click a doc screenshot to zoom)
   - Global search popover (built from #search-index JSON)
   ========================================================= */
(function () {
  "use strict";

  var SCROLL_OFFSET = 128;           // sticky topnav (71) + subbar (42) + breathing room
  var SPY_OFFSET = 152;              // when a heading counts as "active"

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

  /* ---------------------------------------------------------
     1. SIDEBAR TREE — expand/collapse groups
     --------------------------------------------------------- */
  function initSidebarTree() {
    var subGroups = [];   // {row, node, children, setOpen} for each .sb-subgroup
    $all(".sb-group").forEach(function (row) {
      var node = row.parentElement;                 // .sb-node
      var children = node.querySelector(":scope > .sb-children");
      if (!children) return;
      var chev = row.querySelector(".sb-chev");
      function setOpen(o) {
        row.setAttribute("aria-expanded", String(o));
        if (chev) chev.classList.toggle("is-open", o);
        children.style.display = o ? "" : "none";
      }
      setOpen(row.getAttribute("aria-expanded") === "true");
      if (row.classList.contains("sb-subgroup")) {
        subGroups.push({ row: row, node: node, children: children, setOpen: setOpen });
      }

      if (row.tagName === "A") {
        // module link: the row navigates to its page; only the chevron toggles
        if (chev) {
          chev.style.cursor = "pointer";
          chev.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            setOpen(row.getAttribute("aria-expanded") !== "true");
          });
        }
      } else {
        // group header: free toggle, multiple groups may stay open
        row.addEventListener("click", function () {
          setOpen(row.getAttribute("aria-expanded") !== "true");
        });
      }
    });

    // When a leaf item is chosen, collapse sub-groups that don't contain it,
    // keeping only the relevant group expanded.
    function collapseToLeaf(leaf) {
      subGroups.forEach(function (g) {
        g.setOpen(g.children.contains(leaf));
      });
    }
    $all(".sb-sub, .sb-leaf").forEach(function (leaf) {
      leaf.addEventListener("click", function () { collapseToLeaf(leaf); });
    });

    // Progressive disclosure on load: keep all level-2 sub-groups COLLAPSED so
    // the module ("Mua hàng") shows only its sub-groups; the user clicks a
    // sub-group to reveal its level-3 items.
    subGroups.forEach(function (g) { g.setOpen(false); });
  }

  function scrollToId(id, push) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET);
    window.scrollTo({ top: top, behavior: "smooth" });
    if (push && window.history.replaceState) window.history.replaceState(null, "", "#" + id);
  }

  /* ---------------------------------------------------------
     2. FEATURE PANELS — each menu shows ONLY its own content
        Default view = overview (intro + flow + sub-module grid).
        Click a sub-module → that feature's section is shown alone,
        and the view stops there (no scrolling into the next one).
     --------------------------------------------------------- */
  function initFeaturePanels() {
    var article = $(".article");
    if (!article) return;

    // Feature panels = any in-page heading referenced by a sidebar leaf
    // (or a sub-module card, kept for back-compat). We only treat an id as a
    // feature when a matching H2 actually exists inside the article, so a
    // stray hash can never blank the page.
    var page = (location.pathname.split("/").pop() || "");
    function idFromHref(href) {
      if (!href) return "";
      var hi = href.indexOf("#");
      if (hi < 0) return "";                 // no hash → overview link
      var pg = href.slice(0, hi);
      if (pg && pg !== page) return "";      // points to another page
      return decodeURIComponent(href.slice(hi + 1));
    }
    var rawIds = $all(".sb-sub").map(function (a) { return idFromHref(a.getAttribute("href")); })
      // navigable sub-groups (an <a> that both opens a panel AND toggles children)
      .concat($all("a.sb-group").map(function (a) { return idFromHref(a.getAttribute("href")); }))
      .concat($all(".submod-card").map(function (c) {
        return decodeURIComponent((c.getAttribute("href") || "").replace(/^#/, ""));
      }));
    var seen = {};
    var FEATURE_IDS = rawIds.filter(function (id) {
      if (!id || seen[id]) return false;
      var el = document.getElementById(id);
      if (!el || el.tagName !== "H2" || !el.closest(".article")) return false;
      seen[id] = true;
      return true;
    });
    if (!FEATURE_IDS.length) return;
    var isFeature = {};
    FEATURE_IDS.forEach(function (id) { isFeature[id] = true; });

    // Titles for breadcrumb / back bar
    var FEATURE_TITLE = {};
    FEATURE_IDS.forEach(function (id) {
      var h = document.getElementById(id);
      FEATURE_TITLE[id] = h ? h.textContent.trim() : id;
    });

    // Group every direct child of .article into a panel.
    //  - the breadcrumb toolbar is "chrome" (always visible)
    //  - everything before the first feature h2 is "overview"
    //  - a feature h2 opens a panel that runs until the next h2
    //  - non-feature h2 (FAQ, related) + pager fall back to "overview"
    var children = $all(":scope > *", article);
    var group = "overview";
    children.forEach(function (el) {
      if (el.classList.contains("article-toolbar")) { el.__group = "chrome"; return; }
      if (el.tagName === "H2" && el.id) {
        group = isFeature[el.id] ? el.id : "overview";
      } else {
        // a direct child may WRAP a feature h2 (e.g. a designed header card)
        var innerH2 = el.querySelector ? el.querySelector("h2[id]") : null;
        if (innerH2 && innerH2.id) {
          group = isFeature[innerH2.id] ? innerH2.id : "overview";
        }
      }
      el.__group = group;
    });

    // ---- "Trên trang này" is DYNAMIC: it mirrors the current view ----
    var sbSubs = $all(".sb-sub");
    var tocNav = $(".toc");
    var tocList = tocNav ? $(".toc-list", tocNav) : null;
    var overviewTocHTML = tocList ? tocList.innerHTML : "";
    var spyTargets = [];

    function scrollToEl(el) {
      if (!el) return;
      var top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET);
      window.scrollTo({ top: top, behavior: "smooth" });
    }

    function curPage() { return (location.pathname.split("/").pop() || ""); }
    function subRef(l) {
      var href = l.getAttribute("href") || "";
      var i = href.indexOf("#");
      if (i >= 0) return { page: href.slice(0, i) || curPage(), hash: decodeURIComponent(href.slice(i + 1)) };
      return { page: href, hash: "" };   // overview link (no hash)
    }
    // The overview ("Tổng quan ứng dụng") link is only highlighted AFTER the
    // user explicitly clicks it — not on first load and not merely from
    // expanding the "Giới thiệu hệ thống" group while still on the overview.
    var overviewActivated = false;
    function markSidebar(view) {
      var page = curPage();
      sbSubs.forEach(function (l) {
        var r = subRef(l);
        var onThisPage = (r.page === page || r.page === "");
        var active = (view === "overview" || view === null)
          ? (overviewActivated && onThisPage && r.hash === "")
          : (onThisPage && r.hash === view);
        l.classList.toggle("is-active", active);
      });
    }

    // Build the in-feature TOC from that panel's headings + steps.
    function buildFeatureToc(view) {
      spyTargets = [];
      if (!tocList) return;
      var seq = [];
      // Collect only the H3 section headings that belong to this view, looking
      // INSIDE grouped children too (a feature may be wrapped in a <section>).
      // Individual steps are intentionally NOT listed — the TOC stays a clean
      // section index.
      var scopes = [];
      children.forEach(function (el) {
        if (el.__group === view) scopes.push(el);
      });
      function harvest(node) {
        if (node.tagName === "H3") {
          seq.push({ el: node, label: node.textContent.trim(), depth: 2 });
        }
      }
      scopes.forEach(function (scope) {
        // the scope element itself might be an H3, or wrap them
        if (scope.tagName === "H3") harvest(scope);
        $all("h3", scope).forEach(harvest);
      });
      var html = "";
      seq.forEach(function (item, i) {
        html += '<li><a class="toc-link depth-' + item.depth + '" data-tref="' + i + '" href="#">' +
          escapeHtml(item.label) + "</a></li>";
      });
      tocList.innerHTML = html;
      $all("a[data-tref]", tocList).forEach(function (a, i) {
        spyTargets.push({ el: seq[i].el, link: a });
      });
    }

    function restoreOverviewToc() {
      spyTargets = [];
      if (tocList) tocList.innerHTML = overviewTocHTML;
    }

    var currentView = "overview";

    function setView(view, push) {
      if (!isFeature[view]) view = "overview";
      currentView = view;
      children.forEach(function (el) {
        var g = el.__group;
        if (g === "chrome") { el.style.display = ""; return; }
        el.style.display = (view === "overview")
          ? (g === "overview" ? "" : "none")
          : (g === view ? "" : "none");
      });
      var inFeature = view !== "overview";
      markSidebar(inFeature ? view : null);
      if (inFeature) buildFeatureToc(view); else restoreOverviewToc();
      if (push && window.history.replaceState) {
        window.history.replaceState(null, "", inFeature ? "#" + view : window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "auto" });
      updateSpy();
    }

    // Clicks inside the dynamic TOC → smooth-scroll within the open feature.
    if (tocList) {
      tocList.addEventListener("click", function (e) {
        var a = e.target.closest("a[data-tref]");
        if (!a) return;
        e.preventDefault();
        var t = spyTargets[parseInt(a.getAttribute("data-tref"), 10)];
        if (t) scrollToEl(t.el);
      });
    }

    // Scroll-spy across the current feature's targets.
    function updateSpy() {
      if (!spyTargets.length) return;
      var active = spyTargets[0];
      for (var i = 0; i < spyTargets.length; i++) {
        if (spyTargets[i].el.getBoundingClientRect().top - SPY_OFFSET <= 0) active = spyTargets[i];
      }
      spyTargets.forEach(function (t) { t.link.classList.toggle("is-active", t === active); });
    }
    window.addEventListener("scroll", updateSpy, { passive: true });

    // Intercept feature/overview links in the SIDEBAR + sub-module cards.
    $all('a[href^="#"]').forEach(function (a) {
      if (a.classList.contains("toc-foot-link")) return;     // utility links
      if (tocList && tocList.contains(a)) return;            // dynamic TOC: delegated
      var href = a.getAttribute("href");
      if (!href || href === "#") return;
      a.addEventListener("click", function (e) {
        var id = decodeURIComponent(href.slice(1));
        e.preventDefault();
        if (isFeature[id]) {
          overviewActivated = false;
          try { sessionStorage.removeItem("zt-ov-active"); } catch (_) {}
          setView(id, true);
          revealActiveSub();
        } else if (document.getElementById(id)) {
          // overview-region anchor (sub-module grid, FAQ, related)
          if (currentView !== "overview") setView("overview", false);
          setTimeout(function () { scrollToId(id, true); }, 20);
        }
      });
    });

    // Expand the sidebar groups that contain the currently-active sub-item so
    // the highlight is actually visible after a navigation (groups otherwise
    // start collapsed). Does nothing when no item is active.
    function revealActiveSub() {
      var activeLink = null;
      sbSubs.forEach(function (l) { if (l.classList.contains("is-active")) activeLink = l; });
      if (!activeLink) return;
      var el = activeLink.parentElement;
      while (el && el !== document.body) {
        if (el.classList && el.classList.contains("sb-children")) {
          el.style.display = "";
          var node = el.parentElement;                       // .sb-node wrapping row + children
          var row = node ? node.querySelector(":scope > .sb-row") : null;
          if (row) {
            row.setAttribute("aria-expanded", "true");
            var chev = row.querySelector(".sb-chev");
            if (chev) chev.classList.add("is-open");
          }
        }
        el = el.parentElement;
      }
    }

    // The overview sidebar link ("Tổng quan ứng dụng") points to the current
    // page WITHOUT a hash. Let it navigate normally (full reload) so the main
    // view visibly changes to the clean overview — consistent with how the
    // feature links navigate. A flag is stored so the item shows as active
    // after the reload (it is NOT highlighted on a plain first load).
    $all(".sb-sub").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.indexOf("#") >= 0) return;                    // feature links handled above
      var pg = href.split("#")[0];
      if (pg && pg !== page) return;                         // points to a different page
      a.addEventListener("click", function (e) {
        e.preventDefault();
        overviewActivated = true;
        try { sessionStorage.setItem("zt-ov-active", "1"); } catch (_) {}
        setView("overview", true);   // always switch the view, no reload needed
        revealActiveSub();
      });
    });

    // Honour an incoming #hash on first paint.
    var h = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
    if (h && isFeature[h]) {
      overviewActivated = false;
      try { sessionStorage.removeItem("zt-ov-active"); } catch (_) {}
      setView(h, false);
    } else {
      try { overviewActivated = sessionStorage.getItem("zt-ov-active") === "1"; } catch (_) { overviewActivated = false; }
      setView("overview", false);
    }
    revealActiveSub();

    window.addEventListener("hashchange", function () {
      var hh = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
      if (!hh) {
        if (currentView !== "overview") { setView("overview", false); }
        revealActiveSub();
        return;
      }
      if (isFeature[hh] && hh !== currentView) {
        overviewActivated = false;
        try { sessionStorage.removeItem("zt-ov-active"); } catch (_) {}
        setView(hh, false);
        revealActiveSub();
      }
    });
  }

  /* ---------------------------------------------------------
     4. ACCORDION (FAQ)
     --------------------------------------------------------- */
  function initAccordion() {
    $all(".accordion-item").forEach(function (item) {
      var trigger = item.querySelector(".accordion-trigger");
      var content = item.querySelector(".accordion-content");
      if (!trigger || !content) return;
      var open = item.classList.contains("is-open");
      content.style.display = open ? "" : "none";
      trigger.setAttribute("aria-expanded", String(open));
      trigger.addEventListener("click", function () {
        open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
        content.style.display = open ? "" : "none";
      });
    });
  }

  /* ---------------------------------------------------------
     5. CODE COPY BUTTONS
     --------------------------------------------------------- */
  function initCopyButtons() {
    $all(".code-copy").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var block = btn.closest(".code");
        var pre = block && block.querySelector("pre");
        var txt = pre ? pre.textContent : "";
        if (navigator.clipboard) navigator.clipboard.writeText(txt);
        var orig = btn.innerHTML;
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg> Đã sao chép';
        setTimeout(function () { btn.innerHTML = orig; }, 1400);
      });
    });
  }

  /* ---------------------------------------------------------
     6. IMAGE LIGHTBOX
     --------------------------------------------------------- */
  function initLightbox() {
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Đóng">&times;</button><img alt="">';
    overlay.style.display = "none";
    document.body.appendChild(overlay);
    var img = overlay.querySelector("img");

    function close() { overlay.style.display = "none"; document.body.style.overflow = ""; }
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("lightbox-close")) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    $all(".doc-shot a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var src = a.getAttribute("href");
        img.src = src;
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });
  }

  /* ---------------------------------------------------------
     7. SEARCH POPOVER — global, from #search-index JSON
     --------------------------------------------------------- */
  function initSearch() {
    var dataEl = document.getElementById("search-index");
    if (!dataEl) return;

    var INDEX;
    try { INDEX = JSON.parse(dataEl.textContent); } catch (e) { return; }

    // flatten into {label, path, href}
    var ENTRIES = [];
    INDEX.forEach(function (m) {
      ENTRIES.push({ label: m.title + " — Tổng quan", path: m.group, href: m.slug + ".html", group: m.title });
      (m.toc || []).forEach(function (t) {
        ENTRIES.push({ label: t.label, path: m.title, href: m.slug + ".html#" + t.id, group: m.title });
      });
    });

    // wire every search box on the page (top-nav pill + hero search)
    var boxes = $all(".search").concat($all(".hero-search"));
    boxes.forEach(function (wrap) {
      var input = wrap.querySelector("input");
      if (input) wireSearchBox(wrap, input, ENTRIES);
    });
  }

  function wireSearchBox(wrap, input, ENTRIES) {
    var pop = document.createElement("div");
    pop.className = "search-pop";
    pop.setAttribute("role", "listbox");
    pop.style.display = "none";
    wrap.appendChild(pop);

    var open = false, focusIdx = 0, flat = [];

    function render(q) {
      var groups = {};
      var order = [];
      var ql = norm(q);
      ENTRIES.forEach(function (e) {
        if (q && !(norm(e.label).indexOf(ql) >= 0 || norm(e.group).indexOf(ql) >= 0)) return;
        // empty state: only show overview entries
        if (!q && e.label.indexOf("— Tổng quan") < 0) return;
        var g = q ? e.group : "Tất cả module";
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(e);
      });
      flat = [];
      var html = "";
      if (!order.length) {
        html = '<div style="padding:16px 18px;text-align:center;color:var(--fg-muted);font-size:13px">Không tìm thấy kết quả cho <strong style="color:var(--fg-strong)">"' + escapeHtml(q) + '"</strong></div>';
        pop.innerHTML = html;
        return;
      }
      order.forEach(function (g) {
        html += '<div class="search-group"><div class="search-group-label">' + escapeHtml(g) + "</div>";
        groups[g].forEach(function (e) {
          var idx = flat.length;
          flat.push(e);
          html += '<a class="search-result' + (idx === focusIdx ? " is-focused" : "") + '" role="option" href="' + e.href + '" data-idx="' + idx + '">' +
            '<span class="search-result-icon"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg></span>' +
            '<span class="search-result-text"><div>' + escapeHtml(e.label) + '</div><div class="search-result-path">' + escapeHtml(e.path) + "</div></span>" +
            '<span class="search-result-kbd">&#8629;</span></a>';
        });
        html += "</div>";
      });
      pop.innerHTML = html;
      $all(".search-result", pop).forEach(function (r) {
        r.addEventListener("mouseenter", function () {
          focusIdx = parseInt(r.getAttribute("data-idx"), 10);
          highlight();
        });
      });
    }

    function highlight() {
      $all(".search-result", pop).forEach(function (r) {
        r.classList.toggle("is-focused", parseInt(r.getAttribute("data-idx"), 10) === focusIdx);
      });
    }

    function show() { open = true; pop.style.display = "block"; render(input.value); }
    function hide() { open = false; pop.style.display = "none"; }

    input.addEventListener("focus", show);
    input.addEventListener("input", function () { focusIdx = 0; show(); });
    input.addEventListener("keydown", function (e) {
      if (!open) return;
      if (e.key === "ArrowDown") { e.preventDefault(); focusIdx = Math.min(focusIdx + 1, flat.length - 1); highlight(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); focusIdx = Math.max(focusIdx - 1, 0); highlight(); }
      else if (e.key === "Enter") {
        e.preventDefault();
        var t = flat[focusIdx];
        if (t) window.location.href = t.href;
      } else if (e.key === "Escape") { hide(); input.blur(); }
    });
    document.addEventListener("mousedown", function (e) {
      if (!wrap.contains(e.target)) hide();
    });
    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); input.focus();
      }
    });
  }

  function escapeHtml(s) {
    return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  function init() {
    initSidebarTree();
    initFeaturePanels();
    initAccordion();
    initCopyButtons();
    initLightbox();
    initSearch();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
