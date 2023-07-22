import type Gift from '@/types/GiftType'

export default interface ApiResponse {
    meta: {
        totalItems: number;
        currentPage: number;
        itemPerPage: number;
        totalPages: number;
    };
    data: Gift[];
}