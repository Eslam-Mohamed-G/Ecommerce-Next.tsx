import { NextRequest, NextResponse } from 'next/server';

// Define routes that require authentication
const protectedRoutes = ['/wishlist', '/cartList', '/account'];

// Define routes that should NOT be accessible when user is authenticated
const authRoutes = ['/login', '/signUp'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    // Get current request pathname
    const { pathname } = request.nextUrl;
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Configure which routes this middleware should run on
export const config = {
    matcher: ['/wishlist', '/cartList', '/account'],
};
