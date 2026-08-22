import { useState } from 'react';
import { Search, Eye, Filter } from 'lucide-react';
import { mockBookings, type Booking } from '../../data/bookings';
import { useNavigate } from 'react-router-dom';

export default function BookingsList() {
    const [bookings] = useState<Booking[]>(mockBookings);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filtered = bookings.filter((b) =>
        b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.packageName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Bookings Management</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Search Booking ID, Customer, Package..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package & Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount / Paid</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filtered.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium text-primary">{booking.id}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{booking.customerName}</span>
                                            <span className="text-sm text-gray-500">{booking.persons} Persons</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col max-w-[200px]">
                                            <span className="font-medium text-gray-900 truncate" title={booking.packageName}>{booking.packageName}</span>
                                            <span className="text-sm text-gray-500">{booking.travelDate}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col text-sm">
                                            <span className="font-semibold text-gray-900">Total: ₹{booking.amount}</span>
                                            <span className="text-green-600">Paid: ₹{booking.amountPaid}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col gap-1 items-start">
                                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${booking.status === 'Confirmed' || booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-blue-100 text-blue-800'
                                                }`}>
                                                {booking.status}
                                            </span>
                                            <span className={`text-[10px] uppercase font-bold tracking-wider ${booking.paymentStatus === 'Paid' ? 'text-green-600' :
                                                    booking.paymentStatus === 'Pending' ? 'text-red-500' :
                                                        'text-yellow-600'
                                                }`}>
                                                Pay: {booking.paymentStatus}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            title="View Details"
                                            className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1"
                                            onClick={() => navigate(`/bookings/${booking.id}`)}
                                        >
                                            <Eye className="h-4 w-4" />
                                            View
                                        </button>
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
