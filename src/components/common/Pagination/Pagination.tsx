import React from 'react';
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    // Don't render pagination if there is only one page
    if (totalPages <= 1) return null;

    /**
     * Generates an array of page numbers and ellipsis ("...")
     * depending on the current page and total pages.
    */
    const generatePages = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        const maxPagesToShow = 5;

        // Case 1: total pages small enough → show all
        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Case 2: user is near the beginning
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);

                // Case 3: user is near the end
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }

                // Case 4: user in the middle
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };
    return (
        <div>Pagination</div>
    )
};