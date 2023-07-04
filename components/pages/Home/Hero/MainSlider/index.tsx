'use client';

import Image from 'next/image';
import { Variants, motion, useAnimationControls } from 'framer-motion';
import { IGame } from '..';
import { useHashup } from '@hashup-it/hashup-react-sdk';

interface IMainSlider {
	games: IGame[];
}

export default function MainSlider({ games }: IMainSlider) {
	return (
		<div
			className={'h-[450px] w-[1150px] mx-auto grid place-items-center '}
		>
			<div className="w-full">
				{games !== undefined && (
					<div className="flex items-center justify-between gap-[8px]">
						<GameBox
							name={games[20].name}
							creator={games[20].creator}
							price={games[20].price}
							colors={games[20].colors}
							media={games[20].media}
							genres={games[20].genres}
							platforms={games[20].platforms}
							chain={games[20].chain}
							address={games[20].address}
						/>
						<GameBox
							name={games[21].name}
							creator={games[21].creator}
							price={games[21].price}
							colors={games[21].colors}
							media={games[21].media}
							genres={games[21].genres}
							platforms={games[21].platforms}
							chain={games[21].chain}
							address={games[21].address}
						/>
						<GameBox
							name={games[18].name}
							creator={games[18].creator}
							price={games[18].price}
							colors={games[18].colors}
							media={games[18].media}
							genres={games[18].genres}
							platforms={games[18].platforms}
							chain={games[18].chain}
							address={games[18].address}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

function GameBox({
	name,
	creator,
	price,
	colors,
	media,
	genres,
	platforms,
	chain,
	address,
}: IGame) {
	const { buyGame } = useHashup();
	const controls = useAnimationControls();
	const imageControls = useAnimationControls();

	const variants: Variants = {
		visible: {
			y: '0%',
			transition: {
				duration: 0.2,
			},
		},
		hidden: {
			y: '200px',
		},
	};

	const imageVariants: Variants = {
		visible: {
			y: '0%',
			transition: {
				delay: 0,
				duration: 0.4,
			},
		},
		hidden: {
			y: '450px',
		},
	};

	const handleMouseOver = () => {
		imageControls.start('visible');
		controls.start('visible');
	};
	const handleMouseOut = () => {
		imageControls.start('hidden');
		controls.start('hidden');
	};

	const handlePurchase = () => {
		buyGame(address, '100').then((res) => console.log(res));
	};

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`bg-[url('//cdn.akamai.steamstatic.com/steam/apps/1938090/hero_capsule.jpg?t=1687571108')] bg-no-repeat bg-cover w-full h-[450px] relative flex items-end flex-col justify-end overflow-hidden`}
		>
			<motion.div
				className="relative w-full h-[250px] bg-red z-[1]"
				variants={imageVariants}
				initial={'hidden'}
				animate={imageControls}
			>
				<Image
					src={media.coverImageUrl}
					alt="cover"
					fill
					style={{ objectFit: 'cover' }}
				/>
			</motion.div>
			<motion.div
				variants={variants}
				initial={'hidden'}
				animate={controls}
				className={'h-[200px] w-full bg-gameBoxGradient p-[22px] z-[2]'}
			>
				<span
					className={
						'mb-[5px] font-bold text-[28px] text-white leading-[26px]'
					}
				>
					{name}
				</span>
				<div className={'text-[12px]'}>
					<span className={'text-white'}>{chain}</span>
				</div>
				<div
					className={
						'flex items-start justify-start flex-wrap gap-[4px] w-[80%] mt-[4px]'
					}
				>
					{genres.map((genre: string, idx: number) => (
						<Tag name={genre} key={idx} />
					))}
					{platforms.map((platform: string, idx: number) => (
						<Tag name={platform} key={idx} />
					))}
				</div>
				<div
					className={
						'cursor-pointer absolute bottom-[30px] text-[#D2E885] bg-buttonGradient rounded-[2px] grid place-items-center justify-self-end p-[1px] w-[150px] h-[35px]'
					}
					onClick={handlePurchase}
				>
					<span>Kup</span>
				</div>
				<div
					className={
						'h-[26px] flex items-center justify-center absolute bottom-[30px] right-0'
					}
				>
					<div
						className={
							'bg-[#4c6b22] w-[26px] h-full grid place-items-center'
						}
					>
						<Image
							src={
								'https://store.akamai.steamstatic.com/public/images/ico/ico_discount_generic.svg'
							}
							alt={''}
							width={20}
							height={20}
						/>
					</div>
					<div
						className={
							'bg-[#344654] px-[5px] h-[26px] text-[#ffffff] text-[14px] grid place-items-center font-arial'
						}
					>
						{price}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

function Tag({ name }: { name: string }) {
	return (
		<div
			className={
				'px-[5px] py-[3px] grid place-items-center bg-[rgba(0,0,0,.2)] w-min h-min'
			}
		>
			<span className={'text-[#c6d4df] text-[12px]'}>{name}</span>
		</div>
	);
}
