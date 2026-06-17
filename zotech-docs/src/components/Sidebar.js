import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getGroups, getPagesByGroup } from '../utils/content';
import styles from './Sidebar.module.css';
export const Sidebar = () => {
    const [expandedGroups, setExpandedGroups] = useState(new Set(getGroups()));
    const location = useLocation();
    const toggleGroup = (group) => {
        const newExpanded = new Set(expandedGroups);
        if (newExpanded.has(group)) {
            newExpanded.delete(group);
        }
        else {
            newExpanded.add(group);
        }
        setExpandedGroups(newExpanded);
    };
    const isActive = (slug) => {
        return location.pathname === `/docs/${slug}`;
    };
    return (_jsx("aside", { className: styles.sidebar, children: _jsx("nav", { className: styles.tree, children: _jsxs("div", { className: styles.node, children: [_jsxs("button", { type: "button", className: `${styles.row} ${styles.rootGroup}`, "aria-expanded": true, children: [_jsx("span", { className: styles.icon, children: _jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }), _jsx("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" })] }) }), _jsx("span", { className: styles.label, children: "T\u00E0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng" })] }), _jsx("div", { className: styles.children, children: getGroups().map((group) => (_jsxs("div", { className: styles.node, children: [_jsxs("button", { type: "button", className: `${styles.row} ${styles.group}`, onClick: () => toggleGroup(group), "aria-expanded": expandedGroups.has(group), children: [_jsx("span", { className: styles.chev, children: _jsx("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "m9 6 6 6-6 6" }) }) }), _jsx("span", { className: styles.label, children: group })] }), expandedGroups.has(group) && (_jsx("div", { className: styles.children, children: getPagesByGroup(group).map((page) => (_jsx("div", { className: styles.node, children: _jsx(Link, { to: `/docs/${page.slug}`, className: `${styles.row} ${styles.module} ${isActive(page.slug) ? styles.active : ''}`, children: _jsx("span", { className: styles.label, children: page.title }) }) }, page.slug))) }))] }, group))) })] }) }) }));
};
