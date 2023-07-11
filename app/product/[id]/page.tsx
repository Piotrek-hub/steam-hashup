'use client';

import Navbar from '@/components/global/Navbar';
import Navigation from '@/components/pages/Home/Hero/Navigation';
import Game from '@/components/pages/Product/Game';
import Purchase from '@/components/pages/Product/Purcahase';
import WalletConnect from '@/components/shared/WalletConnect';
import { IGame } from '@/types/game';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
	const [game, setGame] = useState<IGame>();
	useEffect(() => {
		fetch('https://open-api.hashup.it/v1/tokens')
			.then((res) => res.json())
			.then((res) => {
				const games = res.filter((g: any) => g.address === params.id);
				setGame(games[0]);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<div className="w-full  bg-[#1E2D40] flex items-center justify-start pt-[50px] flex-col gap-[70px]">
				{game !== undefined ? (
					<>
						<Navigation />
						<Game game={game!} />
						<div className="flex items-start justify-between w-[940px] gap-[12px] my-[30px] ">
							<Purchase
								name={game!.name}
								id={params.id}
								price={game?.price}
							/>
							<div className="flex items-start justify-start flex-col  w-[50%] px-[18px] bg-[#0F151E] py-[10px]">
								<span className="text-[16px] text-white  pb-[10px]">
									Czy ta gra jest dla ciebie istotna?
								</span>
								<span className="text-[14px] text-[#acb2b8] pb-[10px]">
									Zaloguj się, by sprawdzić, czy według nas
									ten produkt może ci się spodobać. Bierzemy
									pod uwagę twoje gry, twoich znajomych oraz
									obserwowanych kuratorów.
								</span>
								<WalletConnect />
							</div>
						</div>
					</>
				) : (
					'loading'
				)}
			</div>
		</div>
	);
}
