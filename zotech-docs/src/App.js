import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { DocPage } from './pages/DocPage';
import './App.css';
export const App = () => {
    return (_jsxs(Router, { children: [_jsx(TopNav, {}), _jsxs("div", { className: "app-layout", children: [_jsx(Sidebar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/docs/:slug", element: _jsx(DocPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] })] })] }));
};
export default App;
