import { NextRequest, NextResponse } from 'next/server';

// Define routes that require authentication
const protectedRoutes = ['/wishlist', '/cartList', '/account'];
export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Configure which routes this middleware should run on
export const config = {
    matcher: ['/wishlist', '/cartList', '/account'],
};
