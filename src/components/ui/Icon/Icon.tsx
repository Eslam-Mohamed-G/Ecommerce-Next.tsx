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
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
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