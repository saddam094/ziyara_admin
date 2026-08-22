import { useState } from 'react';
import { Search, Send, Clock, Edit, Trash, Plus } from 'lucide-react';

export default function NotificationsList() {
    const [searchTerm, setSearchTerm] = useState('');

    const notifications = [
        { id: 'NOTIF-1', title: 'Eid Sale Starts Tomorrow', message: 'Get up to 50% off on all Islamic clothing.', type: 'Marketing', target: 'All Users', schedule: '2026-06-15 08:00', status: 'Scheduled' },
        { id: 'NOTIF-2', title: 'Payment Reminder', message: 'Your booking payment is pending.', type: 'Alert', target: 'Specific Users', schedule: '2026-08-20 10:00', status: 'Sent' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Notifications Management</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Search notifications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Notification
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title & Message</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type / Target</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule / Send Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {notifications.map((notif) => (
                                <tr key={notif.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900 mb-1">{notif.title}</span>
                                            <span className="text-sm text-gray-500 max-w-sm truncate" title={notif.message}>{notif.message}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col text-sm">
                                            <span className="font-medium text-gray-900">{notif.type}</span>
                                            <span className="text-gray-500">{notif.target}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {notif.schedule}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${notif.status === 'Sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {notif.status === 'Sent' ? <Send className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                                            {notif.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            {notif.status === 'Scheduled' && (
                                                <button title="Edit" className="text-gray-400 hover:text-secondary transition-colors">
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                            )}
                                            <button title="Delete" className="text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
