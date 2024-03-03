import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Bottombar from '@/components/ui/shared/Bottombar';
import LeftSidebar from '@/components/ui/shared/LeftSidebar';
import Topbar from '@/components/ui/shared/Topbar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (_jsxs("div", { className: "w-full md:flex", children: [_jsx(Topbar, {}), _jsx(LeftSidebar, {}), _jsx("section", { className: "flex flex-1 h-full", children: _jsx(Outlet, {}) }), _jsx(Bottombar, {})] }));
};
export default RootLayout;
