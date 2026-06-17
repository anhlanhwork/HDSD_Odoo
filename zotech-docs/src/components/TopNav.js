import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './TopNav.module.css';
export const TopNav = ({ onSearchChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearchChange?.(query);
    };
    return (_jsx("header", { className: styles.topnav, children: _jsxs("div", { className: styles.inner, children: [_jsxs("a", { href: "/", className: styles.brand, children: [_jsx("div", { className: styles.mark, children: "Z" }), _jsxs("span", { children: [_jsx("span", { className: styles.name, children: "Zotech" }), _jsx("span", { className: styles.sub, children: "docs" })] })] }), _jsxs("div", { className: styles.search, children: [_jsxs("svg", { className: styles.icon, viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "11", cy: "11", r: "7" }), _jsx("path", { d: "m20 20-3.5-3.5" })] }), _jsx("input", { type: "text", className: styles.input, placeholder: "B\u1EA1n \u0111ang t\u00ECm g\u00EC?", value: searchQuery, onChange: handleSearchChange, autoComplete: "off", spellCheck: "false" })] }), _jsx("div", { className: styles.actions, children: _jsx("a", { href: "#", className: styles.btn, children: "M\u1EDF h\u1EC7 th\u1ED1ng" }) })] }) }));
};
