import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPageBySlug } from '../utils/content';
import { TableOfContents } from '../components/TableOfContents';
import styles from './DocPage.module.css';
export const DocPage = () => {
    const { slug } = useParams();
    const page = slug ? getPageBySlug(slug) : null;
    useEffect(() => {
        // Add code copy buttons to all code blocks
        const codeBlocks = document.querySelectorAll('pre');
        codeBlocks.forEach((block) => {
            if (!block.querySelector('button[class*="copy"]')) {
                const button = document.createElement('button');
                button.className = 'code-copy-btn';
                button.textContent = 'Copy';
                button.onclick = () => {
                    const code = block.textContent || '';
                    navigator.clipboard.writeText(code);
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                };
                block.appendChild(button);
            }
        });
    }, []);
    if (!page) {
        return (_jsx("main", { className: styles.main, children: _jsxs("div", { className: styles.notFound, children: [_jsx("h1", { children: "Trang kh\u00F4ng t\u00ECm th\u1EA5y" }), _jsx("p", { children: "Xin l\u1ED7i, trang b\u1EA1n t\u00ECm ki\u1EBFm kh\u00F4ng t\u1ED3n t\u1EA1i." })] }) }));
    }
    return (_jsxs("main", { className: styles.main, children: [_jsxs("div", { className: styles.topbar, children: [_jsx("nav", { className: styles.crumbs, children: _jsx("span", { className: styles.current, children: page.group }) }), _jsxs("a", { href: "#", className: styles.editLink, title: "\u0110\u1EC1 xu\u1EA5t ch\u1EC9nh s\u1EEDa", children: [_jsx("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" }) }), "S\u1EEDa tr\u00EAn GitHub"] })] }), _jsxs("div", { className: styles.head, children: [_jsx("h1", { children: page.title }), page.description && _jsx("p", { className: styles.lede, children: page.description })] }), _jsxs("div", { className: styles.content, children: [_jsxs("article", { className: styles.article, children: [_jsxs("section", { children: [_jsx("h2", { id: "overview", children: "T\u1ED5ng quan" }), _jsxs("p", { children: ["T\u00E0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng cho ch\u1EE7 \u0111\u1EC1 ", _jsx("strong", { children: page.title }), ' ', "trong h\u1EC7 th\u1ED1ng Zotech tr\u00EAn n\u1EC1n Odoo 19.0. B\u00EAn d\u01B0\u1EDBi l\u00E0 c\u00E1c b\u01B0\u1EDBc h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt."] })] }), page.toc.map((item) => (_jsxs("section", { id: item.id, children: [_jsx("h2", { children: item.label }), _jsxs("p", { children: ["H\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt cho ", _jsx("em", { children: item.label }), " s\u1EBD \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt trong ph\u1EA7n n\u00E0y."] }), _jsx("div", { className: styles.placeholder, children: _jsx("p", { children: "N\u1ED9i dung s\u1EBD \u0111\u01B0\u1EE3c cung c\u1EA5p t\u1EEB h\u1EC7 th\u1ED1ng ho\u1EB7c t\u1EC7p CMS." }) })] }, item.id)))] }), _jsx("aside", { className: styles.toc, children: _jsx(TableOfContents, { items: page.toc }) })] })] }));
};
