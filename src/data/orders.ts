export interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface Order {
    id: string;
    customerId: string;
    customerName: string;
    customerMobile: string;
    customerEmail: string;
    items: OrderItem[];
    subtotal: number;
    deliveryCharge: number;
    total: number;
    date: string;
    status: 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    paymentStatus: 'Pending' | 'Partially Paid' | 'Paid' | 'Refunded';
}

export const mockOrders: Order[] = [
    {
        id: 'ORD-2026-0001',
        customerId: 'USR-1002',
        customerName: 'Zainab Siddiqui',
        customerMobile: '+91 8765432109',
        customerEmail: 'zainab@example.com',
        items: [
            { productId: 'PRD-001', productName: 'Velvet Covered Quran', quantity: 2, price: 999, subtotal: 1998 }
        ],
        subtotal: 1998,
        deliveryCharge: 50,
        total: 2048,
        date: '2026-08-20',
        status: 'Pending',
        paymentStatus: 'Pending'
    },
    {
        id: 'ORD-2026-0002',
        customerId: 'USR-1001',
        customerName: 'Ahmed Raza',
        customerMobile: '+91 9876543210',
        customerEmail: 'ahmed@example.com',
        items: [
            { productId: 'PRD-004', productName: 'Turkish Prayer Mat', quantity: 1, price: 1250, subtotal: 1250 },
            { productId: 'PRD-002', productName: 'Oud Al Layl 12ml', quantity: 1, price: 850, subtotal: 850 }
        ],
        subtotal: 2100,
        deliveryCharge: 0,
        total: 2100,
        date: '2026-08-21',
        status: 'Shipped',
        paymentStatus: 'Paid'
    }
];
