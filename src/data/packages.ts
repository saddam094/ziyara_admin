export interface PackageDate {
    id: string;
    travelDate: string;
    pricePerPerson: number;
    totalSeats: number;
    availableSeats: number;
    bookingStatus: 'Open' | 'Almost Full' | 'Full' | 'Closed' | 'Cancelled';
}

export interface Package {
    id: string;
    name: string;
    destinationId: string;
    duration: string; // e.g., '3 Days 2 Nights'
    description: string;
    status: 'Active' | 'Inactive';
    dates: PackageDate[];
}

export const mockPackages: Package[] = [
    {
        id: 'PKG-101',
        name: 'Ajmer Sharif Urs Special',
        destinationId: 'DST-01',
        duration: '4 Days 3 Nights',
        description: 'Complete Ziyarat with train AC tickets and hotel included.',
        status: 'Active',
        dates: [
            { id: 'PD-1', travelDate: '2026-09-10', pricePerPerson: 8000, totalSeats: 20, availableSeats: 5, bookingStatus: 'Almost Full' },
            { id: 'PD-2', travelDate: '2026-09-25', pricePerPerson: 8500, totalSeats: 15, availableSeats: 15, bookingStatus: 'Open' },
            { id: 'PD-3', travelDate: '2026-10-10', pricePerPerson: 7500, totalSeats: 20, availableSeats: 0, bookingStatus: 'Full' }
        ]
    },
    {
        id: 'PKG-102',
        name: 'Delhi Sufi Trail',
        destinationId: 'DST-04',
        duration: '2 Days 1 Night',
        description: 'Visit Hazrat Nizamuddin and Meharauli sharing the path of light.',
        status: 'Active',
        dates: [
            { id: 'PD-4', travelDate: '2026-08-30', pricePerPerson: 4500, totalSeats: 10, availableSeats: 2, bookingStatus: 'Almost Full' }
        ]
    }
];
