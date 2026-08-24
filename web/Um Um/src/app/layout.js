export const metadata = {
    title: 'Web Exploitation Challenge',
    description: 'Um Um Challenge',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
