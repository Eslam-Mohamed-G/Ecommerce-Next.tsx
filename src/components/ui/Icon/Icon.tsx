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

// -------------- categories icon ------------
export const CameraIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} className={className} aria-hidden="true" viewBox="0 0 56 56" fill="none" stroke="currentColor">
        <g clip-path="url(#clip0_23436_1952)">
            <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_23436_1952">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const GamingIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} className={className} aria-hidden="true" viewBox="0 0 56 56" fill="none" stroke="currentColor">
        <g clipPath="url(#clip0_23436_3426)">
            <path d="M46.6665 14H9.33317C6.75584 14 4.6665 16.0893 4.6665 18.6667V37.3333C4.6665 39.9107 6.75584 42 9.33317 42H46.6665C49.2438 42 51.3332 39.9107 51.3332 37.3333V18.6667C51.3332 16.0893 49.2438 14 46.6665 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 25.6666V25.6908" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 30.3333V30.3574" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_23436_3426">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} viewBox="0 0 56 56" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g clipPath="url(#clip0_23425_868)">
            <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.6667 7H31.1354" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 44.0052V44.0305" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="currentColor" strokeWidth={2} />
        </g>
        <defs>
            <clipPath id="clip0_23425_868">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const SmartWatchIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} viewBox="0 0 56 56" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g clipPath="url(#clip0_138_1655)">
            <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 42V49H35V42" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 14V7H35V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <line x1={24} y1={23} x2={24} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            <line x1={28} y1={28} x2={28} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            <line x1={32} y1={26} x2={32} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_138_1655">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const ComputerIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} viewBox="0 0 56 56" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g clipPath="url(#clip0_138_1641)">
            <path d="M46.6667 9.33334H9.33333C8.04467 9.33334 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33334 46.6667 9.33334Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.3334 46.6667H39.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 37.3333V46.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 37.3333V46.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 32H48" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_138_1641">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const HeadphoneIcon: React.FC<IconProps> = ({ className = "", width = 56, height = 56 }) => (
    <svg width={width} height={height} viewBox="0 0 56 56" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g clip-path="url(#clip0_138_1699)">
            <path d="M16.3334 30.3333H14C11.4227 30.3333 9.33337 32.4227 9.33337 35V42C9.33337 44.5773 11.4227 46.6666 14 46.6666H16.3334C18.9107 46.6666 21 44.5773 21 42V35C21 32.4227 18.9107 30.3333 16.3334 30.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33337 35V28C9.33337 23.0493 11.3 18.3013 14.8007 14.8007C18.3014 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6987 11.3 41.1994 14.8007C44.7 18.3013 46.6667 23.0493 46.6667 28V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_138_1699">
                <rect width={width} height={height} fill="none" />
            </clipPath>
        </defs>
    </svg>
);

export const MenFashionIcon: React.FC<IconProps> = ({ className = "", width = 512.000000, height = 512.000000 }) => (
    <svg width={`${width}pt`} height={`${height}pt`} viewBox="0 0 512.000000 512.000000" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='currentColor'>
            <path d="M2765 4828 c-11 -5 -56 -54 -100 -109 -44 -55 -89 -108 -100 -118
-11 -11 -152 -65 -314 -121 -162 -56 -317 -113 -344 -127 -27 -13 -72 -47 -99
-74 -84 -84 -99 -129 -188 -574 -44 -220 -80 -419 -80 -442 0 -24 6 -58 14
-76 29 -70 61 -86 589 -307 l77 -33 0 -399 0 -399 25 -24 c31 -31 49 -31 80 0
l25 24 0 746 c0 732 0 745 -20 765 -11 11 -31 20 -45 20 -14 0 -34 -9 -45 -20
-19 -19 -20 -33 -20 -295 0 -151 -3 -275 -7 -275 -5 0 -122 49 -262 108 -185
78 -259 114 -273 133 l-20 26 77 384 c87 437 87 437 127 502 49 78 96 102 417
214 162 56 296 101 296 100 34 -49 282 -374 289 -379 22 -16 68 -7 102 18 l34
26 0 -434 0 -435 23 -34 c12 -18 38 -44 56 -56 32 -22 44 -23 208 -23 195 0
213 5 260 67 l28 36 3 434 3 434 29 -21 c19 -14 41 -20 62 -18 30 3 47 21 178
195 80 105 148 194 152 198 7 7 509 -140 551 -162 48 -24 107 -85 132 -133 13
-25 76 -241 141 -479 109 -401 117 -436 103 -459 -11 -20 -69 -49 -281 -138
l-268 -112 0 279 c0 266 -1 280 -20 299 -23 23 -58 26 -86 6 -18 -14 -19 -32
-22 -490 l-3 -476 -873 0 c-868 0 -873 0 -900 -21 -31 -25 -34 -61 -6 -89 20
-20 33 -20 900 -20 l880 0 0 -170 0 -170 -880 0 c-867 0 -880 0 -900 -20 -26
-26 -25 -62 1 -86 20 -18 52 -19 900 -22 l879 -2 0 -510 0 -509 -24 -28 -24
-28 -466 -5 c-507 -5 -486 -3 -486 -61 0 -14 8 -33 18 -42 17 -15 65 -17 483
-17 430 0 467 2 505 19 48 22 101 82 114 131 6 22 10 393 10 965 l0 931 263
109 c328 136 349 146 383 191 22 28 29 50 32 98 3 54 -11 115 -117 505 -74
271 -131 462 -148 492 -32 59 -113 138 -174 170 -24 12 -168 60 -319 105
l-275 81 -38 49 c-21 27 -52 72 -68 101 -16 28 -36 54 -44 57 -8 3 -204 10
-437 15 -233 6 -475 13 -538 15 -67 3 -123 0 -135 -6z m830 -149 c2 -3 -65
-47 -150 -98 l-154 -93 -118 86 c-65 47 -131 96 -146 109 l-28 22 295 -10
c162 -6 298 -13 301 -16z m-532 -182 c59 -44 107 -82 107 -86 0 -6 -232 -181
-250 -189 -4 -1 -60 67 -124 153 l-117 156 62 78 63 79 75 -56 c42 -31 124
-92 184 -135z m794 111 c16 -24 33 -48 36 -54 5 -8 -199 -292 -239 -333 -2 -2
-59 38 -128 90 l-125 93 102 59 c56 33 149 88 207 123 58 34 108 63 111 63 3
1 19 -18 36 -41z m-479 -346 l72 -54 0 -462 c0 -346 -3 -465 -12 -474 -8 -8
-55 -12 -147 -12 -111 0 -138 3 -153 17 -17 15 -18 43 -18 474 l0 457 81 61
c45 33 87 57 93 54 6 -4 44 -31 84 -61z"/>
            <path d="M3246 4224 c-12 -11 -16 -35 -16 -88 0 -83 11 -99 62 -99 44 0 58 25 58 104 0 76 -14 99 -60 99 -16 0 -36 -7 -44 -16z" />
            <path d="M3246 3884 c-12 -11 -16 -35 -16 -89 0 -65 3 -76 22 -89 30 -21 54 -20 78 4 28 28 29 149 2 173 -23 21 -66 22 -86 1z" />
            <path d="M3246 3544 c-12 -11 -16 -35 -16 -89 0 -65 3 -76 22 -89 30 -21 54 -20 78 4 28 28 29 149 2 173 -23 21 -66 22 -86 1z" />
            <path d="M1805 1950 c-370 -375 -814 -630 -1363 -781 -172 -47 -209 -65 -274 -130 -69 -69 -101 -144 -106 -243 -5 -104 10 -171 57 -244 54 -82 125 -131 258 -175 284 -94 693 -118 1163 -66 70 8 248 6 683 -6 l587 -17 68 21 c80 25
153 77 199 145 62 91 64 109 61 558 l-3 403 -29 60 c-38 76 -105 143 -181 181 l-60 29 -278 5 c-261 5 -280 6 -293 24 -8 11 -14 27 -14 37 0 9 -16 48 -35 87 -58 116 -170 197 -287 209 l-53 5 -100 -102z m235 -69 c43 -25 118 -127 104
-140 -10 -10 -949 -509 -952 -506 -2 2 3 25 11 51 13 47 16 49 103 94 174 88
316 200 519 407 143 146 135 142 215 94z m191 -283 c30 -22 40 -23 312 -28
l282 -5 55 -31 c91 -51 145 -149 138 -252 -3 -44 -6 -49 -53 -80 -63 -41 -160
-72 -250 -79 -247 -19 -497 168 -547 411 -9 43 -9 58 1 70 18 21 26 20 62 -6z
m-121 -268 c52 -98 166 -206 271 -258 46 -23 113 -48 149 -57 135 -31 329 -12
439 44 22 12 43 21 46 21 3 0 5 -61 5 -135 0 -126 -1 -135 -19 -135 -11 0
-253 -16 -538 -35 -285 -19 -529 -35 -543 -35 -16 0 -50 21 -95 61 -132 115 -309 216 -488 280 -48 18 -85 34 -82 37 3 3 180 99 393 212 l387 206 20 -71 c12 -38 36 -99 55 -135z m-1070 -141 c-21 -67 -24 -97 -14 -123 3 -9 62 -33
147 -61 159 -52 372 -151 461 -216 l60 -43 -28 -7 c-90 -24 -1443 45 -1473 75 -9 9 5 50 36 98 40 64 97 94 260 139 154 42 348 110 479 168 48 21 88 38 90
36 1 -1 -7 -31 -18 -66z m-665 -523 c390 -38 677 -50 1205 -50 532 0 695 6 1173 45 142 12 261 19 264 15 3 -3 1 -31 -6 -61 -16 -71 -61 -130 -129 -168
-65 -36 -15 -35 -714 -17 -481 12 -545 12 -735 -3 -340 -28 -620 -21 -828 19 -117 23 -256 70 -305 103 -38 26 -100 101 -100 123 0 10 -1 10 175 -6z"/>
        </g>
    </svg >
);

export const WomenFashionIcon: React.FC<IconProps> = ({ className = "", width = 512.000000, height = 512.000000 }) => (
    <svg width={`${width}pt`} height={`${height}pt`} viewBox="0 0 512.000000 512.000000" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor">
            <path d="M2621 4964 c-94 -25 -171 -75 -321 -209 -392 -350 -546 -489 -557
-503 -15 -19 -17 -66 -4 -90 5 -9 169 -147 365 -307 l355 -290 1 -207 0 -207
-71 -88 c-39 -48 -104 -140 -146 -203 -42 -63 -79 -119 -83 -123 -7 -8 -600
283 -644 316 -18 14 -18 16 18 63 54 70 133 235 157 329 29 108 31 294 5 379
-28 93 -70 169 -131 234 -73 80 -150 129 -255 165 -112 39 -258 42 -359 8
-153 -53 -255 -157 -307 -311 -26 -78 -27 -273 0 -348 28 -81 108 -193 199
-277 72 -68 238 -188 351 -253 38 -23 38 -23 20 -44 -28 -31 -212 -182 -359
-294 -71 -54 -166 -129 -210 -167 -168 -142 -278 -299 -292 -414 -6 -59 -12
-65 -66 -82 -90 -30 -196 -140 -232 -241 -49 -137 -72 -762 -40 -1100 18 -201
36 -274 85 -350 71 -111 177 -167 338 -181 474 -38 1967 -38 2386 1 118 11
200 46 270 115 91 91 117 165 136 376 6 74 13 154 16 178 l6 43 76 -4 c115 -7
537 9 707 27 470 48 1043 175 1076 238 20 36 5 339 -25 508 -41 240 -87 405
-173 624 -114 289 -274 568 -453 791 l-70 88 2 205 3 205 360 296 c357 293
360 296 363 336 2 28 -3 47 -15 62 -10 11 -139 129 -287 261 -252 225 -272
241 -308 241 -50 0 -78 -28 -78 -76 0 -42 -20 -21 278 -288 117 -105 209 -193
205 -196 -52 -45 -513 -420 -517 -420 -3 0 -6 69 -6 154 0 140 -2 156 -21 180
-26 33 -88 37 -119 6 -19 -19 -20 -33 -20 -474 l0 -454 -27 -6 c-254 -51 -852
-75 -1163 -47 -138 13 -350 38 -392 47 l-28 6 0 454 c0 441 -1 455 -20 474
-26 26 -80 26 -111 1 -23 -18 -24 -26 -29 -182 l-5 -162 -260 213 c-143 117
-261 214 -262 214 -5 4 594 534 631 559 52 35 126 57 190 57 l51 0 24 -92
c124 -495 321 -851 523 -952 64 -32 80 -32 143 -2 189 87 371 400 500 856 26
91 49 171 51 178 5 17 89 16 150 -3 74 -22 109 -20 133 11 42 54 20 105 -58
135 -71 27 -226 37 -302 19 -89 -20 -188 -75 -274 -151 -109 -98 -167 -124
-270 -124 -102 0 -158 26 -269 124 -135 119 -240 162 -396 160 -47 0 -109 -7
-139 -15z m447 -284 c117 -108 255 -158 399 -146 123 10 213 52 324 151 34 30
64 53 66 51 3 -2 -22 -85 -55 -183 -99 -296 -196 -480 -308 -582 -31 -28 -59
-51 -63 -51 -5 0 -26 13 -49 30 -78 56 -166 187 -241 358 -56 128 -158 432
-144 432 2 0 35 -27 71 -60z m-1833 -602 c111 -28 234 -129 280 -231 27 -59
45 -138 45 -199 0 -58 -28 -183 -57 -256 -24 -60 -130 -233 -150 -245 -12 -8
-219 120 -317 197 -105 82 -179 163 -219 240 -30 57 -32 68 -32 161 0 89 4
107 29 163 71 153 230 218 421 170z m1471 -1063 c220 -31 451 -46 719 -46 313
0 470 11 806 57 45 6 47 5 84 -39 116 -139 279 -399 366 -583 160 -339 259
-712 276 -1045 l6 -116 -114 -30 -114 -30 -6 26 c-4 14 -12 87 -19 161 -10
118 -49 393 -66 473 -13 62 -87 88 -132 47 -27 -25 -29 -73 -7 -186 19 -105
53 -391 57 -483 l3 -75 -60 -12 c-33 -6 -75 -14 -92 -17 l-33 -6 0 73 c0 151
-31 461 -71 701 -26 155 -25 153 -65 172 -31 15 -37 15 -69 0 -46 -22 -50 -46
-31 -163 42 -246 76 -564 76 -716 0 -83 -1 -88 -22 -93 -110 -25 -710 -60
-854 -49 l-91 6 -6 227 c-8 308 -28 476 -68 561 -48 104 -144 190 -246 220
-38 12 -44 18 -58 61 -50 150 -220 320 -477 477 l-97 59 46 74 c86 139 217
309 237 309 7 0 62 -7 122 -15z m-652 -421 c18 -11 16 -20 -46 -155 -36 -79
-81 -188 -99 -241 l-34 -97 -391 -3 c-369 -3 -393 -4 -413 -22 -27 -25 -29
-88 -2 -115 17 -17 52 -19 692 -24 753 -6 1060 -18 1128 -44 55 -20 116 -74
143 -126 13 -26 25 -85 35 -171 13 -110 14 -152 4 -264 -7 -74 -19 -155 -26
-180 -20 -64 -65 -116 -130 -148 -58 -28 -96 -31 -492 -47 l-111 -5 -4 182
c-4 206 -14 242 -85 313 -87 87 -145 96 -613 91 -344 -3 -357 -4 -406 -26 -64
-29 -126 -92 -155 -157 -19 -44 -23 -72 -27 -228 l-5 -178 -156 6 c-470 20
-474 20 -532 51 -59 32 -113 95 -128 151 -25 89 -35 283 -22 417 14 148 33
201 88 258 65 66 100 75 358 88 165 8 236 15 251 25 43 28 38 99 -8 129 -19
13 -50 14 -191 8 -119 -5 -167 -4 -167 4 0 24 25 81 56 130 45 71 148 171 299
289 281 219 379 299 447 363 l70 67 327 -165 c180 -91 335 -170 345 -176z
m275 -155 c140 -88 266 -193 328 -274 29 -38 53 -73 53 -77 0 -5 -33 -8 -72
-8 -153 1 -580 18 -585 24 -12 12 155 396 172 396 3 0 50 -28 104 -61z m-251
-1082 c22 -12 41 -34 54 -63 18 -41 19 -63 16 -269 -3 -252 -6 -260 -84 -300
-37 -19 -59 -20 -399 -20 -340 0 -362 1 -400 20 -70 35 -79 65 -84 263 -5 238
2 295 43 339 17 19 47 38 66 43 19 5 197 8 395 7 327 -2 363 -4 393 -20z
m-1762 -523 c31 -10 124 -19 249 -25 110 -5 260 -12 332 -15 l133 -6 11 -38
c19 -64 78 -131 143 -165 57 -29 63 -30 274 -39 140 -6 289 -6 426 1 198 9
214 11 262 36 63 32 119 95 142 159 16 47 17 47 67 52 27 3 158 9 290 14 265
11 310 20 400 82 l47 32 -7 -83 c-16 -208 -34 -327 -54 -366 -26 -53 -99 -116
-150 -131 -86 -26 -430 -36 -1236 -37 -900 0 -1225 11 -1300 44 -59 26 -121
92 -139 149 -14 46 -29 160 -42 335 l-7 89 56 -37 c30 -20 77 -43 103 -51z"/>
            <path d="M1412 1272 c-108 -9 -121 -23 -124 -126 -3 -118 4 -280 13 -298 5 -9
26 -22 47 -28 49 -13 585 -13 634 0 58 17 63 33 63 227 0 172 0 173 -26 198
l-25 26 -250 3 c-137 2 -287 1 -332 -2z m447 -158 l31 -6 0 -69 0 -69 -219 0
-219 0 -6 35 c-9 48 2 103 23 108 26 7 355 8 390 1z"/>
        </g>
    </svg >
);