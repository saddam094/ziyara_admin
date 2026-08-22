import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard, Users, Box, ListTree, ShoppingCart,
    MapPin, PackageSearch, CalendarCheck, Image, Bell,
    CreditCard, HeadphonesIcon, Settings, LogOut
} from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    {
        title: 'Management',
        items: [
            { name: 'Users', path: '/users', icon: Users },
            { name: 'Products', path: '/products', icon: Box },
            { name: 'Categories', path: '/categories', icon: ListTree },
            { name: 'Orders', path: '/orders', icon: ShoppingCart },
            { name: 'Destinations', path: '/destinations', icon: MapPin },
            { name: 'Packages', path: '/packages', icon: PackageSearch },
            { name: 'Bookings', path: '/bookings', icon: CalendarCheck },
        ]
    },
    {
        title: 'Marketing',
        items: [
            { name: 'Banners', path: '/banners', icon: Image },
            { name: 'Notifications', path: '/notifications', icon: Bell },
        ]
    },
    {
        title: 'Finance',
        items: [
            { name: 'Payments', path: '/payments', icon: CreditCard },
        ]
    },
    {
        title: 'System',
        items: [
            { name: 'Support', path: '/support', icon: HeadphonesIcon },
            { name: 'Settings', path: '/settings', icon: Settings },
        ]
    }
];

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar container */}
            <aside
                className={clsx(
                    "fixed inset-y-0 left-0 z-30 w-64 bg-primary-dark text-white transition-transform duration-300 lg:static lg:translate-x-0 flex flex-col h-screen",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo area */}
                <div className="flex h-16 items-center justify-center border-b border-white/10 shrink-0">
                    <h1 className="text-xl font-bold tracking-widest text-secondary-light">ZIYARA ADMIN</h1>
                </div>

                {/* Navigation list */}
                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                    <nav className="px-3 space-y-1">
                        {menuItems.map((section) => {
                            if (section.path) {
                                // Top-level item (e.g. Dashboard)
                                const Icon = section.icon as React.ElementType;
                                return (
                                    <NavLink
                                        key={section.name}
                                        to={section.path}
                                        className={({ isActive }) => clsx(
                                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-2 transition-colors",
                                            isActive ? "bg-primary text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <Icon className="mr-3 h-5 w-5 shrink-0" />
                                        {section.name}
                                    </NavLink>
                                );
                            }

                            // Section group
                            return (
                                <div key={section.title} className="mb-4">
                                    <h3 className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        {section.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {section.items?.map((item) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.path}
                                                    className={({ isActive }) => clsx(
                                                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                                        isActive ? "bg-primary text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"
                                                    )}
                                                >
                                                    <ItemIcon className="mr-3 h-5 w-5 shrink-0 text-gray-400 group-hover:text-white" />
                                                    {item.name}
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </nav>
                </div>

                {/* Logout area */}
                <div className="p-4 border-t border-white/10 shrink-0">
                    <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-white/5 hover:text-white transition-colors">
                        <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
