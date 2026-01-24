import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text2Color mb-6">
            <Link href="/" className="hover:text-primaryColor transition-colors">
                Home
            </Link>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className="bg-borderColor w-5 h-0.5 rounded-full -rotate-60" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primaryColor transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-textColor font-medium">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
