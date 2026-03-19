import { MetadataRoute } from 'next';

// Generate robots.txt rules for search engine crawlers
export default function robots(): MetadataRoute.Robots {
    // Base URL of the website (fallback if env variable is not defined)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecommerce.routemisr.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Disallow crawling of sensitive or non-SEO
            disallow: ['/account/', '/api/', '/checkout/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}