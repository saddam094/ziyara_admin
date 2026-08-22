export interface Destination {
    id: string;
    name: string;
    location: string;
    description: string;
    status: 'Active' | 'Inactive';
}

export const mockDestinations: Destination[] = [
    { id: 'DST-01', name: 'Ajmer Sharif', location: 'Rajasthan, India', description: 'Dargah of Khwaja Moinuddin Chishti', status: 'Active' },
    { id: 'DST-02', name: 'Kachhochha Sharif', location: 'Uttar Pradesh, India', description: 'Ashraf Jahangir Semnani Dargah', status: 'Active' },
    { id: 'DST-03', name: 'Bihar Sharif', location: 'Bihar, India', description: 'Makhdoom Sharfuddin Ahmed Yahya Maneri', status: 'Active' },
    { id: 'DST-04', name: 'Delhi', location: 'Delhi, India', description: 'Nizamuddin Auliya Dargah', status: 'Active' }
];
