import { useState } from 'react';
import { Search, Eye, Edit, Power, PowerOff, Plus, MapPin } from 'lucide-react';
import { mockDestinations, type Destination } from '../../data/destinations';

export default function DestinationsList() {
    const [destinations, setDestinations] = useState<Destination[]>(mockDestinations);
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = destinations.filter((d) =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleStatus = (id: string, currentStatus: string) => {
        setDestinations(destinations.map(d =>
            d.id === id ? { ...d, status: currentStatus === 'Active' ? 'Inactive' : 'Active' } : d
        ));
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Destinations Management</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Search destinations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Destination
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filtered.map((dest) => (
                                <tr key={dest.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="ml-4 flex flex-col">
                                                <span className="font-medium text-gray-900">{dest.name}</span>
                                                <span className="text-sm text-gray-500">{dest.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {dest.location}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                        {dest.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${dest.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {dest.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            <button title="View" className="text-gray-400 hover:text-primary transition-colors">
                                                <Eye className="h-5 w-5" />
                                            </button>
                                            <button title="Edit" className="text-gray-400 hover:text-secondary transition-colors">
                                                <Edit className="h-5 w-5" />
                                            </button>
                                            <button
                                                title={dest.status === 'Active' ? 'Deactivate' : 'Activate'}
                                                className="text-gray-400 hover:text-red-600 transition-colors"
                                                onClick={() => toggleStatus(dest.id, dest.status)}
                                            >
                                                {dest.status === 'Active' ? <PowerOff className="h-5 w-5 text-red-500" /> : <Power className="h-5 w-5 text-green-500" />}
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
