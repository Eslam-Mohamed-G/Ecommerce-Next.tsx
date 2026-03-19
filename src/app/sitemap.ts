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
    } catch (error) {
        
    }
}