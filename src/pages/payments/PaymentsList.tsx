import { useState } from 'react';
import { Search, ExternalLink, CalendarCheck } from 'lucide-react';

export default function PaymentsList() {
    const [searchTerm, setSearchTerm] = useState('');

    // Combine mock orders and bookings into generic payments view
    // normally this comes from a dedicated API
    const payments = [
        { id: 'PAY-1001', refId: 'ORD-2026-0001', type: 'Order', customer: 'Zainab Siddiqui', amount: 0, total: 2048, method: 'N/A', status: 'Pending', date: '---' },
        { id: 'PAY-1002', refId: 'ORD-2026-0002', type: 'Order', customer: 'Ahmed Raza', amount: 2100, total: 2100, method: 'UPI', status: 'Paid', date: '2026-08-21 14:30' },
        { id: 'PAY-1003', refId: 'BKG-501', type: 'Booking', customer: 'Fatima Khan', amount: 10000, total: 24000, method: 'Bank Transfer', status: 'Partially Paid', date: '2026-08-15 10:00' },
        { id: 'PAY-1004', refId: 'BKG-502', type: 'Booking', customer: 'Zainab Siddiqui', amount: 0, total: 9000, method: 'N/A', status: 'Pending', date: '---' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Recorded Payments</h1>
                    <p className="text-sm text-gray-500 mt-1">Manual payment tracking for orders and bookings</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Search reference, customer..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference (Order/Booking)</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid / Total</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method & Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {payments.map((pay) => (
                                <tr key={pay.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {pay.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-primary">{pay.refId}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{pay.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {pay.customer}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm">
                                            <span className="font-semibold text-gray-900">₹{pay.amount}</span>
                                            <span className="text-gray-500"> / ₹{pay.total}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col text-sm">
                                            <span className="font-medium text-gray-800">{pay.method}</span>
                                            <span className="text-gray-500 text-xs">{pay.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${pay.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                pay.status === 'Partially Paid' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {pay.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button title="View Reference" className="text-gray-400 hover:text-primary transition-colors p-1">
                                            <ExternalLink className="h-5 w-5" />
                                        </button>
                                        {pay.status !== 'Paid' && (
                                            <button title="Record Payment" className="text-gray-400 hover:text-secondary transition-colors p-1 ml-2">
                                                <CalendarCheck className="h-5 w-5" />
                                            </button>
                                        )}
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
