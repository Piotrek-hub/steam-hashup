'use client';

import Navigation from './Navigation';
import MainSlider from '@/components/pages/Home/Hero/MainSlider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GamesGrid from './GamesGrid';
import { IGame } from '@/types/game';

export default function Hero() {
	const [games, setGames] = useState<IGame[]>();

	useEffect(() => {
		try {
			fetch('https://open-api.hashup.it/v1/tokens')
				.then((res) => res.json())
				.then((res) => {
					setGames(res);
				});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<>
			<div className=" w-[100%] h-[600px] pt-[34px]  bg-cover bg-no-repeat bg-center relative">
				<div
					className={
						'absolute w-full h-[600px] z-[-10] top-[45px] left-0 scale-[1.2]'
					}
				>
					<Image
						src={
							'https://cdn.akamai.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/home_header_bg_day_polish.gif?t=1688069940'
						}
						alt={'background'}
						layout={'fill'}
					/>
				</div>
				<Navigation />
			</div>
			<div
				className={
					"w-[100%] bg-[url('https://cdn.akamai.steamstatic.com/store/promo/summer2023/Steam_Summer_Sale_pattern-04-day_lighter.gif?v=2')] bg-contain]"
				}
			>
				{games !== undefined ? <MainSlider games={games} /> : 'Loading'}
				<div className="bg-[url('https://cdn.akamai.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/sale_steamdeck_banner_polish.gif?t=1688069940')] bg-cover w-[1150px] h-[170px] my-[120px] mx-auto hover:scale-[1.05] transition-all" />
				{games !== undefined ? <GamesGrid games={games} /> : 'Loading'}
			</div>
		</>
	);
}
