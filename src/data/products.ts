export interface Product {
    id: string;
    sku: string;
    name: string;
    categoryId: string;
    price: number;
    discountPrice?: number;
    stock: number;
    status: 'Active' | 'Inactive';
    createdDate: string;
}

export const mockProducts: Product[] = [
    { id: 'PRD-001', sku: 'QR-01', name: 'Velvet Covered Quran', categoryId: 'CAT-1', price: 1200, discountPrice: 999, stock: 45, status: 'Active', createdDate: '2026-01-10' },
    { id: 'PRD-002', sku: 'ATT-05', name: 'Oud Al Layl 12ml', categoryId: 'CAT-5', price: 850, stock: 120, status: 'Active', createdDate: '2026-02-15' },
    { id: 'PRD-003', sku: 'TSB-02', name: 'Crystal Tasbih 99 Beads', categoryId: 'CAT-3', price: 450, stock: 80, status: 'Active', createdDate: '2026-03-01' },
    { id: 'PRD-004', sku: 'MAT-01', name: 'Turkish Prayer Mat', categoryId: 'CAT-4', price: 1500, discountPrice: 1250, stock: 15, status: 'Active', createdDate: '2026-03-10' },
    { id: 'PRD-005', sku: 'BOK-09', name: 'Sahih Al-Bukhari (Set)', categoryId: 'CAT-2', price: 3500, stock: 5, status: 'Inactive', createdDate: '2026-04-20' },
];
