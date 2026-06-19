import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


// middleware AUTH PROTECTION LAYER 

const protectedRoutes = ['/feed', '/profile', '/settings', '/create', '/edit']

export function middleware (request: NextRequest){
    const token = request.cookies.get('token')?.value   // Retrieves Token from COOKIES 
    const isProtected = protectedRoutes.some( route =>
        request.nextUrl.pathname.startsWith(route)      // checks if the pathname starts with the protectedRoutes strings
    )

    if(isProtected && !token) {
        return NextResponse.redirect(new URL ('/login', request.url))  // isProtected and no token then redirect to login
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/feed/:path*', '/profile/:path*', '/settings/:path*', '/create/:path*', '/edit/:path*']
}