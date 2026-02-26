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
        <div className='flex items-center justify-center gap-2 mt-8 mb-4'>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-borderColor rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Previous page"
            >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            {generatePages().map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="px-3 py-2 text-text2Color">...</span>
                    ) : (
                        <button
                            onClick={() => typeof page === 'number' ? onPageChange(page) : undefined}
                            className={`w-10 h-10 flex items-center justify-center rounded border transition-colors ${currentPage === page
                                ? 'bg-primaryColor text-white border-primaryColor cursor-default'
                                : 'border-borderColor hover:bg-gray-50 text-text2Color  cursor-pointer'
                                }`}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-borderColor rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Next page"
            >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
        </div>
    )
};