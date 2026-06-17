import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './TableOfContents.module.css';
export const TableOfContents = ({ items }) => {
    const [activeId, setActiveId] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            // Find the first heading that's in the viewport
            const headings = items.map((item) => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));
            for (let i = headings.length - 1; i >= 0; i--) {
                const element = headings[i].element;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.5) {
                        setActiveId(headings[i].id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // sticky header height
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };
    return (_jsxs("nav", { className: styles.toc, children: [_jsx("h4", { className: styles.title, children: "Tr\u00EAn trang n\u00E0y" }), _jsx("ul", { className: styles.list, children: items.map((item) => (_jsx("li", { className: styles.item, children: _jsx("button", { type: "button", className: `${styles.link} ${activeId === item.id ? styles.active : ''}`, onClick: () => handleClick(item.id), children: item.label }) }, item.id))) })] }));
};
