import {
    Users, ShoppingCart, CalendarCheck, PackageSearch,
    TrendingUp, CircleDollarSign
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    BarChart, Bar
} from 'recharts';

const mockOrderData = [
    { name: 'Mon', orders: 12 },
    { name: 'Tue', orders: 19 },
    { name: 'Wed', orders: 15 },
    { name: 'Thu', orders: 22 },
    { name: 'Fri', orders: 28 },
    { name: 'Sat', orders: 35 },
    { name: 'Sun', orders: 30 },
];

const mockRevenueData = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 5500 },
    { name: 'Mar', amount: 7200 },
    { name: 'Apr', amount: 6800 },
    { name: 'May', amount: 8900 },
    { name: 'Jun', amount: 10500 },
];

const recentActivity = [
    { id: 1, type: 'order', text: 'New order request received (ORD-1002)', time: '10 mins ago' },
    { id: 2, type: 'booking', text: 'New Ajmer Sharif booking request', time: '1 hour ago' },
    { id: 3, type: 'payment', text: 'Payment recorded for Booking BKG-501', time: '2 hours ago' },
    { id: 4, type: 'system', text: 'Product "Premium Attar" updated', time: '4 hours ago' },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Top Metrics Map */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Users" value="1,240" icon={Users} trend="+12%" />
                <StatCard title="Total Products" value="145" icon={PackageSearch} />
                <StatCard title="Pending Orders" value="24" icon={ShoppingCart} trend="-5%" isNegative />
                <StatCard title="Pending Bookings" value="12" icon={CalendarCheck} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Confirmed Orders" value="856" icon={TrendingUp} />
                <StatCard title="Active Packages" value="8" icon={PackageSearch} />
                <StatCard title="Recorded Payments" value="₹ 45,200" icon={CircleDollarSign} />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Orders Overview (7 Days)</h3>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockOrderData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <RechartsTooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line type="monotone" dataKey="orders" stroke="#064E3B" strokeWidth={3} dot={{ r: 4, fill: '#064E3B' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Recorded Payments (6 Months)</h3>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={mockRevenueData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <RechartsTooltip
                                    cursor={{ fill: '#F3F4F6' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="amount" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Quick Actions */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 hover:border-primary transition-all">
                            <span className="font-medium text-gray-700">Add Product</span>
                            <span className="text-primary text-xl leading-none">+</span>
                        </button>
                        <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 hover:border-primary transition-all">
                            <span className="font-medium text-gray-700">Add Package</span>
                            <span className="text-primary text-xl leading-none">+</span>
                        </button>
                        <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 hover:border-primary transition-all">
                            <span className="font-medium text-gray-700">View Pending Orders</span>
                            <ShoppingCart className="h-5 w-5 text-gray-400" />
                        </button>
                        <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 hover:border-primary transition-all">
                            <span className="font-medium text-gray-700">View Pending Bookings</span>
                            <CalendarCheck className="h-5 w-5 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {recentActivity.map((activity, itemIdx) => (
                                <li key={activity.id}>
                                    <div className="relative pb-8">
                                        {itemIdx !== recentActivity.length - 1 ? (
                                            <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-white">
                                                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                                                </span>
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                <div>
                                                    <p className="text-sm text-gray-500">{activity.text}</p>
                                                </div>
                                                <div className="whitespace-nowrap text-right text-sm text-gray-400">
                                                    <time>{activity.time}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Mini component for stats
function StatCard({ title, value, icon: Icon, trend, isNegative }: any) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
            </div>
            {trend && (
                <div className="mt-4 flex items-center text-sm">
                    <span className={`font-medium ${isNegative ? 'text-red-600' : 'text-green-600'}`}>
                        {trend}
                    </span>
                    <span className="ml-2 text-gray-500">vs last month</span>
                </div>
            )}
        </div>
    );
}
