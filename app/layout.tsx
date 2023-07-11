"use client"

import { EthereumProvider } from '@/providers/Ethereum/ethereumProvider';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<EthereumProvider>
				{children}
				</EthereumProvider>
			</body>
		</html>
	);
}
