import { useEthereumProvider } from '@/providers/Ethereum/ethereumProvider';
import { useEffect, useState } from 'react';

export default function WalletConnect() {
	const [isConnected, setIsConnected] = useState<boolean>(false);

	const ethereum = useEthereumProvider();

	useEffect(() => {
		setIsConnected(ethereum.isConnected)
	}, [ethereum.isConnected])

	const handleConnect = () => {
		console.log("ETHEREUM: ", ethereum)
		if (isConnected) {
			setIsConnected(false);
			return;
		}

		try {
			ethereum.connect();
			setIsConnected(true);
		} catch (e) {
			console.log("ERROR WHILE CONNECTING: ", e);
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
