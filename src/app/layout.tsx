import type { Metadata } from 'next';
import '@/app/globals.css';
import { latoRegular } from '@/lib/utils';

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
