import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopHeader from '../components/layout/TopHeader';

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Basic title extraction from path for Phase 1
    const pathParts = location.pathname.split('/').filter(Boolean);
    const rawTitle = pathParts.length > 0 ? pathParts[0] : 'Dashboard';
    const title = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <TopHeader
                    onMenuClick={() => setSidebarOpen(true)}
                    title={title}
                />

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
