import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@/app/globals.css';

const latoRegular = Lato({ weight: "400", subsets: ['latin'] });
const latoBold = Lato({ weight: "700", subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Simple Quicks',
    description: 'Simple Quicks',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={latoRegular.className}>
                {children}
            </body>
        </html>
    );
}
