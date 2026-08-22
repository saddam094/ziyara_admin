export interface Booking {
    id: string;
    customerId: string;
    customerName: string;
    customerMobile: string;
    customerEmail: string;
    packageId: string;
    packageName: string;
    travelDate: string;
    persons: number;
    amount: number;
    amountPaid: number;
    status: 'Pending' | 'Confirmed' | 'Payment Pending' | 'Upcoming' | 'Completed' | 'Cancelled';
    paymentStatus: 'Pending' | 'Partially Paid' | 'Paid' | 'Refunded';
}

export const mockBookings: Booking[] = [
    {
        id: 'BKG-501',
        customerId: 'USR-1004',
        customerName: 'Fatima Khan',
        customerMobile: '+91 8123456789',
        customerEmail: 'fatima@example.com',
        packageId: 'PKG-101',
        packageName: 'Ajmer Sharif Urs Special',
        travelDate: '2026-09-10',
        persons: 3,
        amount: 24000,
        amountPaid: 10000,
        status: 'Confirmed',
        paymentStatus: 'Partially Paid'
    },
    {
        id: 'BKG-502',
        customerId: 'USR-1002',
        customerName: 'Zainab Siddiqui',
        customerMobile: '+91 8765432109',
        customerEmail: 'zainab@example.com',
        packageId: 'PKG-102',
        packageName: 'Delhi Sufi Trail',
        travelDate: '2026-08-30',
        persons: 2,
        amount: 9000,
        amountPaid: 0,
        status: 'Pending',
        paymentStatus: 'Pending'
    }
];
