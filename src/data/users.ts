export interface User {
    id: string;
    name: string;
    email: string;
    mobile: string;
    registeredDate: string;
    orders: number;
    bookings: number;
    status: 'Active' | 'Inactive';
}

export const mockUsers: User[] = [
    { id: 'USR-1001', name: 'Ahmed Raza', email: 'ahmed@example.com', mobile: '+91 9876543210', registeredDate: '2026-01-15', orders: 12, bookings: 2, status: 'Active' },
    { id: 'USR-1002', name: 'Zainab Siddiqui', email: 'zainab@example.com', mobile: '+91 8765432109', registeredDate: '2026-02-20', orders: 5, bookings: 0, status: 'Active' },
    { id: 'USR-1003', name: 'Usman Ali', email: 'usman@example.com', mobile: '+91 9012345678', registeredDate: '2026-03-05', orders: 1, bookings: 1, status: 'Inactive' },
    { id: 'USR-1004', name: 'Fatima Khan', email: 'fatima@example.com', mobile: '+91 8123456789', registeredDate: '2026-04-10', orders: 20, bookings: 5, status: 'Active' },
    { id: 'USR-1005', name: 'Omar Farooq', email: 'omar@example.com', mobile: '+91 9988776655', registeredDate: '2026-05-12', orders: 3, bookings: 0, status: 'Active' },
];
