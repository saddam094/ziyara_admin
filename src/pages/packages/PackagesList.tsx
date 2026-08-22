import { useState } from 'react';
import { Search, Edit, Trash, Plus, MapPin } from 'lucide-react';
import { mockPackages, type Package } from '../../data/packages';

export default function PackagesList() {
    const [packages] = useState<Package[]>(mockPackages);
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = packages.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Ziyarat Packages</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Search packages..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Package
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {filtered.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                    Destination ID: {pkg.destinationId} &bull; {pkg.duration}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors inline-flex items-center">
                                    <Plus className="h-4 w-4 mr-1" /> Add Date
                                </button>
                                <button className="rounded-md bg-white border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Edit Package
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 overflow-x-auto">
                            <h4 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Scheduled Dates</h4>
                            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Travel Date</th>
                                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Price (PP)</th>
                                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Seats (Available/Total)</th>
                                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
                                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {pkg.dates.map((date) => (
                                        <tr key={date.id}>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{date.travelDate}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{date.pricePerPerson}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                <span className={`font-semibold ${date.availableSeats === 0 ? 'text-red-600' : 'text-gray-900'}`}>{date.availableSeats}</span>
                                                {' / '}{date.totalSeats}
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${date.bookingStatus === 'Open' ? 'bg-green-100 text-green-800' :
                                                    date.bookingStatus === 'Almost Full' ? 'bg-yellow-100 text-yellow-800' :
                                                        date.bookingStatus === 'Full' || date.bookingStatus === 'Closed' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {date.bookingStatus}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <button title="Edit Date" className="text-gray-400 hover:text-secondary transition-colors"><Edit className="h-4 w-4" /></button>
                                                    <button title="Delete Date" className="text-gray-400 hover:text-red-500 transition-colors"><Trash className="h-4 w-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
