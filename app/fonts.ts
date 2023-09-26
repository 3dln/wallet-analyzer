import localFont from 'next/font/local'
import { Comforter, Inter } from 'next/font/google'

export const comforter = Comforter({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-comforter',
})
export const inter = Inter({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const iransansX = localFont({
    src: [
        {
            path: '../fonts/iransans/woff/IRANSansX-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/iransans/woff/IRANSansX-Bold.woff',
            weight: '700',
            style: 'bold',
        },
    ],
    display: 'swap',
    variable: '--font-iransansx',
})

export const vazir = localFont({
    src: [
        {
            path: '../fonts/vazir/Vazirmatn-Regular.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/vazir/Vazirmatn-Bold.woff2',
            weight: '700',
            style: 'bold',
        }
    ],
    display: 'swap',
    variable: '--font-vazir',
})