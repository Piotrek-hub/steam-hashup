import { MetaMaskSDK } from '@metamask/sdk';

import { useState } from 'react';

const MMSDK = new MetaMaskSDK();

const ethereum = MMSDK.getProvider();

export default function WalletConnect() {
	const [isConnected, setIsConnected] = useState<boolean>(false);

	const handleConnect = () => {
		if (isConnected) {
			setIsConnected(false);
			return;
		}

		try {
			ethereum.request({ method: 'eth_requestAccounts', params: [] });
			setIsConnected(true);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<button
			className={`text-white px-[16px] py-[8px] rounded-[2px] ${
				isConnected ? 'bg-redHi' : 'bg-greenHi'
			} text-[14px] hover:${
				isConnected ? 'bg-red' : 'bg-green'
			} transition-all`}
			onClick={handleConnect}
		>
			{isConnected ? 'Disconnect' : 'Connect Wallet'}
		</button>
	);
}
