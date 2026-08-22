export interface Category {
    id: string;
    name: string;
    description: string;
    image?: string;
    status: 'Active' | 'Inactive';
}

export const mockCategories: Category[] = [
    { id: 'CAT-1', name: 'Quran', description: 'Holy Quran and translations', status: 'Active' },
    { id: 'CAT-2', name: 'Islamic Books', description: 'Hadith, Fiqh, and Islamic literature', status: 'Active' },
    { id: 'CAT-3', name: 'Tasbih', description: 'Prayer beads and digital tasbih', status: 'Active' },
    { id: 'CAT-4', name: 'Prayer Mats', description: 'Janamaz and prayer rugs', status: 'Active' },
    { id: 'CAT-5', name: 'Attar', description: 'Non-alcoholic perfumes', status: 'Active' },
    { id: 'CAT-6', name: 'Prayer Caps', description: 'Kufi and Islamic caps', status: 'Active' },
    { id: 'CAT-7', name: 'Islamic Clothing', description: 'Abayas, Thobes, and scarves', status: 'Active' },
    { id: 'CAT-8', name: 'Islamic Gifts', description: 'Gift sets and decor', status: 'Active' },
    { id: 'CAT-9', name: 'Miswak', description: 'Natural toothbrushes', status: 'Active' },
];
