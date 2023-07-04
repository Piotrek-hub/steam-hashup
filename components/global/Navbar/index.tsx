'use client';

import WalletConnect from '@/components/shared/WalletConnect';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

enum MenuOption {
	STORE,
	COMMUNITY,
	INFORMATION,
	TECHNICAL_HELP,
}

export default function Navbar() {
	const [menuChoice, setMenuChoice] = useState<MenuOption>(MenuOption.STORE);
	const router = useRouter();

	return (
		<div className="w-full bg-[#171d25]">
			<div className="max-w-[940px] mx-auto flex items-center justify-between py-[25px]">
				<div
					className="relative w-[180px] h-[50px] cursor-pointer"
					onClick={() => router.push('/')}
				>
					<Image
						src="/assets/hashup.svg"
						alt="hashup logo"
						layout="fill"
					/>
				</div>
				<div className="flex items-center justify-center gap-[16px] ">
					<span
						onClick={() => setMenuChoice(MenuOption.STORE)}
						className={`text-[16px] font-[500] cursor-pointer ${
							menuChoice === MenuOption.STORE
								? 'text-blueHi underline underline-offset-4 decoration-[3px]'
								: 'text-systemLightestGrey'
						}`}
					>
						SKLEP
					</span>
					<span
						onClick={() => setMenuChoice(MenuOption.COMMUNITY)}
						className={`text-[16px] font-[500] cursor-pointer ${
							menuChoice === MenuOption.COMMUNITY
								? 'text-blueHi underline underline-offset-4 decoration-[3px]'
								: 'text-systemLightestGrey'
						}`}
					>
						SPOŁECZNOŚC
					</span>
					<span
						onClick={() => setMenuChoice(MenuOption.INFORMATION)}
						className={`text-[16px] font-[500] cursor-pointer ${
							menuChoice === MenuOption.INFORMATION
								? 'text-blueHi underline underline-offset-4 decoration-[3px]'
								: 'text-systemLightestGrey'
						}`}
					>
						INFORMACJE
					</span>
					<span
						onClick={() => setMenuChoice(MenuOption.TECHNICAL_HELP)}
						className={`text-[16px] font-[500] cursor-pointer ${
							menuChoice === MenuOption.TECHNICAL_HELP
								? 'text-blueHi underline underline-offset-4 decoration-[3px]'
								: 'text-systemLightestGrey'
						}`}
					>
						POMOC TECHNICZNA
					</span>
				</div>
				<WalletConnect />
			</div>
		</div>
	);
}
