import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/;
export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    if (
        pathname.startsWith("/_next") || // exclude Next.js internals
        pathname.startsWith("/api") || //  exclude all API routes
        pathname.startsWith("/static") || // exclude static files
        PUBLIC_FILE.test(pathname) // exclude all files in the public folder
    )
        return NextResponse.next();

    // Step 1: Use the incoming request
    const defaultLocale = request.headers.get('x-default-locale') || 'fa';

    // Step 2: Create and call the next-intl middleware
    const handleI18nRouting = createIntlMiddleware({
        locales: ['en', 'fa'],
        defaultLocale
    });
    const response = handleI18nRouting(request);

    // Step 3: Alter the response
    response.headers.set('x-default-locale', defaultLocale);

    return response;
}

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};

// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
// import { NextRequest, NextResponse } from 'next/server'

// let locales = ['en', 'fa']
// const PUBLIC_FILE = /\.(.*)$/;

// function getLocale(request: NextRequest) {
//     let headers = { 'accept-language': 'fa;q=0.5' }
//     let languages = new Negotiator({ headers }).languages()
//     let defaultLocale = 'fa'

//     const resp = match(languages, locales, defaultLocale)
//     return resp
// }

// export function middleware(request: NextRequest) {
//     const pathname = request.nextUrl.pathname
//     if (
//         pathname.startsWith("/_next") || // exclude Next.js internals
//         pathname.startsWith("/api") || //  exclude all API routes
//         pathname.startsWith("/static") || // exclude static files
//         PUBLIC_FILE.test(pathname) // exclude all files in the public folder
//     )
//         return NextResponse.next();

//     const pathnameIsMissingLocale = locales.every(
//         (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//     )

//     if (pathnameIsMissingLocale) {
//         const locale = getLocale(request)
//         // e.g. incoming request is /products
//         // The new URL is now /en-US/products
//         return NextResponse.redirect(
//             new URL(`/${locale}/${pathname}`, request.url)
//         )
//     }
// }

// export const config = {
//     matcher: [
//         // '/((?!_next).*)',
//         '/((?!api|_next/static|_next/image|favicon|android|manifest).*)',
//     ],
// }