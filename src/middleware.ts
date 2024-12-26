// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { withAuth } from "next-auth/middleware"
// import { getToken } from 'next-auth/jwt';




// export default withAuth(
//     async function middleware(request: NextRequest) {
//         console.log('Middleware running');
//         const pathname = request.nextUrl.pathname;
//         console.log("Current path:", pathname);
//         const isAuth = await getToken({ req: request });
//         const protectedRoutes = ['/users'];
//         const isAuthRoute = pathname.startsWith('/auth');
//         const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
        
//         // Log the token if available
//         if (isAuth) {
//             const token = await getToken({ req: request });
//             console.log('Access Token:', token?.accessToken);
//         }

//         if (!isAuth && isProtectedRoute) {
//             return NextResponse.redirect(new URL('/auth/signin', request.url))
//         }
        
//         if (isAuthRoute && isAuth) {
//             return NextResponse.redirect(new URL('/users', request.url))
//         }
//     }
//     ,
//     {
//         callbacks: {
//             async authorized() {
//                 return true
//             }
//         }

//     }

// )


// export const config = {
//     matcher: [
//         'auth/:path*',
//         'users/:path*',
//     ]
// }


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/users(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
