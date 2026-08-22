import { Save } from 'lucide-react';

export default function Settings() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Platform Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage global app configurations</p>
                </div>
                <button className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">General Configuration</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">App Name</label>
                            <input type="text" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="Ziyara" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                            <input type="email" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="support@ziyara.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Support Phone</label>
                            <input type="tel" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="+91 8000 123 456" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                            <input type="tel" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="+91 8000 123 456" />
                        </div>
                    </div>
                </div>

                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Orders & Bookings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Default Delivery Charge (₹)</label>
                            <input type="number" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="50" />
                        </div>
                        <div className="col-span-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Default Booking Terms &amp; Notes</label>
                            <textarea rows={4} className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="Please note that tickets and hotel bookings are subject to availability at the time of final confirmation." />
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
                            <input type="url" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="https://instagram.com/ziyaraindia" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
                            <input type="url" className="w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-primary focus:ring-primary sm:text-sm" defaultValue="https://facebook.com/ziyaraindia" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
