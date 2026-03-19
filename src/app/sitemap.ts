import { MetadataRoute } from "next";
import productService from "../services/productService";

// add dynamic sitemap generation for SEO optimization
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Base URL for the website (fallback if env is not set)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com";
    try {
        // Fetch all products (limit set to 1000 to avoid huge requests)
        const productsRes = await productService.getAllProducts({ limit: 1000 });
        // Extract product data safely
        const products = productsRes.data || [];

        // Create sitemap entries for dynamic product pages
        const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
            // Generate product URL using id or _id
            url: `${baseUrl}/products/${product.id || product._id}`,

            // Last modification date (current time)
            lastModified: new Date(),

            // Frequency of content updates
            changeFrequency: 'weekly' as const,

            // Priority for search engines (0.0 - 1.0)
            priority: 0.8,
        }));

        // Define static routes of the application
        const routes = ['', '/about', '/contact', '/products', '/login', '/signUp'].map(
            (route) => ({
                // Construct full URL for each static route
                url: `${baseUrl}${route}`,
                // Mark last updated time
                lastModified: new Date(),
                // Static pages are updated more frequently
                changeFrequency: 'daily' as const,
                // Homepage gets highest priority
                priority: route === '' ? 1.0 : 0.8,
            })
        );
    } catch (error) {
        
    }
}