import React from 'react';
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    /**
     * Generates an array of page numbers and ellipsis ("...")
     * depending on the current page and total pages.
    */
    const generatePages = (): (number | string)[] => {};
    return (
        <div>Pagination</div>
    )
};