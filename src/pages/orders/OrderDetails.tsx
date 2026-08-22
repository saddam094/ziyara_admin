import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockOrders } from '../../data/orders';
import { ArrowLeft, CheckCircle, Clock, Package as PkgIcon, Truck, PlusCircle } from 'lucide-react';
import clsx from 'clsx';

const STATUS_STEPS = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered'];

export default function OrderDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const orderData = mockOrders.find(o => o.id === id);
    const [order, setOrder] = useState(orderData);

    if (!order) {
        return <div className="p-8 text-center text-gray-500">Order not found.</div>;
    }

    const currentStatusIndex = STATUS_STEPS.indexOf(order.status);

    const updateStatus = (newStatus: any) => {
        setOrder({ ...order, status: newStatus });
        // Toast notification should appear here
    };

    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/orders')}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Order {order.id}</h1>
                    <p className="text-sm text-gray-500">Placed on {order.date}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Timeline */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Status Timeline</h3>
                        <div className="relative">
                            <div className="absolute top-4 left-4 h-full w-0.5 bg-gray-200" />
                            <div className="space-y-6">
                                {STATUS_STEPS.map((step, idx) => {
                                    const isCompleted = idx <= currentStatusIndex;
                                    const isCurrent = idx === currentStatusIndex;

                                    return (
                                        <div key={step} className="relative flex items-center gap-4">
                                            <div className={clsx(
                                                "h-8 w-8 rounded-full flex items-center justify-center border-2 bg-white z-10",
                                                isCompleted ? "border-primary text-primary" : "border-gray-200 text-gray-300"
                                            )}>
                                                {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                                            </div>
                                            <div>
                                                <p className={clsx("font-medium", isCompleted ? "text-gray-900" : "text-gray-500")}>
                                                    {step}
                                                </p>
                                                {isCurrent && (
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {idx < STATUS_STEPS.length - 1 && (
                                                            <button
                                                                onClick={() => updateStatus(STATUS_STEPS[idx + 1])}
                                                                className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-primary-dark transition-colors"
                                                            >
                                                                Mark as {STATUS_STEPS[idx + 1]}
                                                            </button>
                                                        )}
                                                        {order.status !== 'Cancelled' && (
                                                            <button
                                                                onClick={() => updateStatus('Cancelled')}
                                                                className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition-colors"
                                                            >
                                                                Cancel Order
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h3 className="text-lg font-medium text-gray-900">Products ({order.items.length})</h3>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="p-6 flex flex-col sm:flex-row gap-4">
                                    <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                                        <PkgIcon className="h-8 w-8 text-gray-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900">{item.productName}</h4>
                                        <p className="text-sm text-gray-500 mt-1">Product ID: {item.productId}</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="text-sm text-gray-700">₹{item.price} x {item.quantity}</span>
                                            <span className="font-medium text-gray-900">₹{item.subtotal}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-gray-50 p-6 space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-medium text-gray-900">₹{order.subtotal}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Delivery</span>
                                <span className="font-medium text-gray-900">₹{order.deliveryCharge}</span>
                            </div>
                            <div className="pt-3 border-t border-gray-200 flex justify-between text-base">
                                <span className="font-semibold text-gray-900">Total</span>
                                <span className="font-bold text-primary">₹{order.total}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-100 pb-3">Customer details</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                    {order.customerName.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{order.customerName}</p>
                                    <p className="text-sm text-gray-500">{order.customerId}</p>
                                </div>
                            </div>
                            <div className="pt-2">
                                <a href={`tel:${order.customerMobile}`} className="text-sm text-primary hover:underline block">{order.customerMobile}</a>
                                <a href={`mailto:${order.customerEmail}`} className="text-sm text-gray-500 hover:underline block mt-1">{order.customerEmail}</a>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                            <Truck className="h-5 w-5 text-gray-400" />
                            <h3 className="text-lg font-medium text-gray-900">Delivery Address</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            House No 45, Street 12<br />
                            Near Jama Masjid<br />
                            New Delhi, Delhi 110006<br />
                            India
                        </p>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                            <h3 className="text-lg font-medium text-gray-900">Payment</h3>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${order.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                                order.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                {order.paymentStatus}
                            </span>
                        </div>

                        <div className="space-y-4">
                            {order.paymentStatus !== 'Pending' ? (
                                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    <p><span className="font-medium">Method:</span> UPI / Bank Transfer</p>
                                    <p className="mt-1"><span className="font-medium">Txn ID:</span> TXN987654321</p>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500">No payment has been recorded yet.</p>
                            )}

                            <button className="flex w-full items-center justify-center rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors gap-2">
                                <PlusCircle className="h-4 w-4" />
                                Record Manual Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
