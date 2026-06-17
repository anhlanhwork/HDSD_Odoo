import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const CodeCopyButton = ({ text }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsx("button", { onClick: handleCopy, style: {
            position: 'absolute',
            top: '8px',
            right: '8px',
            padding: '4px 8px',
            fontSize: '12px',
            backgroundColor: 'var(--bg-code)',
            color: 'var(--fg-on-accent)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
        }, children: copied ? 'Copied!' : 'Copy' }));
};
