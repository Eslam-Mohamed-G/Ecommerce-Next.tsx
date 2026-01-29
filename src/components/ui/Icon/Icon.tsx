import React from 'react';
interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

export const EyeIcon: React.FC<IconProps> = ({ className = "", width = 22, height = 22 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx={12} cy={12} r={3} />
    </svg>
);

export const EyeOffIcon: React.FC<IconProps> = ({ className = "", width = 22, height = 22 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className = "", width = 24, height = 24 }) => (
    <svg width={width} height={height} className={className} aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor">
        <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className = "", width = 22, height = 22 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

export const StarIcon: React.FC<IconProps & { fillPercent?: number }> = ({
    className = "",
    width = 16,
    height = 16,
    fillPercent = 100
}) => (
    <div className="relative" style={{ width, height }}>
        {/* Gray background star */}
        <div className="absolute top-0 left-0 flex items-center justify-center text-grayStarColor">
            <svg fill="currentColor" width={width} height={height} aria-hidden="true">
                <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
            </svg>
        </div>

        {/* Gold filled star */}
        <div
            className="flex items-center justify-center text-starColor absolute top-0 left-0 overflow-hidden"
            style={{ width: `${fillPercent}%` }}
        >
            <svg fill="currentColor" width={width} height={height} aria-hidden="true">
                <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
            </svg>
        </div>
    </div>
);

export const CartIcon: React.FC<IconProps> = ({ className = "", width = 24, height = 24 }) => (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 5H7L10 22H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);