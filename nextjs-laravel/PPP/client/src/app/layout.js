import { Nunito } from 'next/font/google'
import '@/app/global.css'
import useHome from '@/hooks/useHome'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'PPP',
}

export default RootLayout
