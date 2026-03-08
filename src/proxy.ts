import { NextRequest, NextResponse } from 'next/server';

// Define routes that require authentication
const protectedRoutes = ['/wishlist', '/cartList', '/checkout', '/account'];

// Define routes that should NOT be accessible when user is authenticated
const authRoutes = ['/login', '/signUp'];

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    // Get current request pathname
    const { pathname } = request.nextUrl;

    // If there is NO token and user tries to access a protected route -→ Redirect to login page
    if (!token && protectedRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If there IS a token and user tries to access login or signup page -→ Redirect to home page
    if (token && authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// Configure which routes this proxy should run on
export const config = {
    matcher: ['/wishlist', '/cartList', '/checkout', '/account', '/login', '/signUp'],
};
