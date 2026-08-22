import { useState } from 'react';
import { Edit, Trash, Plus, Image as ImageIcon } from 'lucide-react';

export default function BannersList() {
    const [banners] = useState([
        { id: 'BNR-1', title: 'Begin Your Spiritual Journey', subtitle: 'Explore Ajmer Sharif packages today.', ctaText: 'View Packages', ctaDestination: '/packages', status: 'Active', order: 1 },
        { id: 'BNR-2', title: 'Discover Islamic Products', subtitle: 'New arrivals in Islamic clothing.', ctaText: 'Shop Now', ctaDestination: '/products/clothing', status: 'Active', order: 2 },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Banners Management</h1>
                <button className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Banner
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banners.map(banner => (
                    <div key={banner.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group">
                        <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                            <ImageIcon className="h-12 w-12 text-gray-300" />
                            <div className="absolute top-2 right-2">
                                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${banner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                    {banner.status}
                                </span>
                            </div>
                            <div className="absolute top-2 left-2">
                                <span className="inline-flex items-center rounded-full bg-white text-gray-800 font-bold px-2 py-0.5 text-xs shadow-sm shadow-black/10">
                                    Order: {banner.order}
                                </span>
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{banner.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 flex-1">{banner.subtitle}</p>

                            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 mb-4 border border-gray-100">
                                <span className="font-semibold text-gray-900">CTA: </span> {banner.ctaText} &rarr; <span className="font-mono text-xs">{banner.ctaDestination}</span>
                            </div>

                            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                                <button className="flex-1 flex items-center justify-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm font-medium">
                                    <Edit className="h-4 w-4 mr-1" /> Edit
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                                    <Trash className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
