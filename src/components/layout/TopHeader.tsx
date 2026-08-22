import { Menu, Search, Bell, User } from 'lucide-react';

interface TopHeaderProps {
    onMenuClick: () => void;
    title?: string;
}

export default function TopHeader({ onMenuClick, title = "Dashboard" }: TopHeaderProps) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <button
                    type="button"
                    className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
                    onClick={onMenuClick}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Menu className="h-6 w-6" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>

            <div className="flex items-center gap-4">
                {/* Search Input */}
                <div className="hidden sm:block relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-gray-50"
                        placeholder="Search..."
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
                    <span className="sr-only">View notifications</span>
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                </button>

                {/* Divider */}
                <div className="hidden sm:block h-6 w-px bg-gray-200" />

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700">Admin Name</span>
                </div>
            </div>
        </header>
    );
}
