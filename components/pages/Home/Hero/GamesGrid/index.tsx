import { Variants, motion, useAnimationControls } from 'framer-motion';

import Image from 'next/image';
import { IGame } from '@/types/game';
import { Popover } from 'react-tiny-popover';
import { useState } from 'react';
import Link from 'next/link';

interface IGamesGrid {
	games: IGame[];
}

export default function GamesGrid({ games }: IGamesGrid) {
	return (
		<div className=" w-[1150px]  mx-auto h-auto flex justify-start items-start flex-col gap-[16px]">
			<div className="h-[180px] flex items-center justify-between gap-[16px] w-full">
				<GameBox game={games[11]} />
				<GameBox game={games[12]} />
				<GameBox game={games[13]} />
				<GameBox game={games[14]} />
			</div>
			<div className="h-[240px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox game={games[15]} />
				<GameBox game={games[16]} />
				<GameBox game={games[17]} />
			</div>
			<div className="h-[180px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox game={games[18]} />
				<GameBox game={games[19]} />
				<GameBox game={games[24]} />
				<GameBox game={games[25]} />
			</div>
			<div className="h-[240px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox game={games[20]} />
				<GameBox game={games[21]} />
				<GameBox game={games[22]} />
			</div>
		</div>
	);
}

interface IGameBox {
	game: IGame;
}

function GameBox({ game }: IGameBox) {
	const controls = useAnimationControls();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const variants: Variants = {
		hovered: {
			scale: 1.1,
		},
		unhovered: {
			scale: 1.0,
		},
	};

	const handleMouseOver = () => {
		setIsOpen(true);
		controls.start('hovered');
	};
	const handleMouseOut = () => {
		setIsOpen(false);
		controls.start('unhovered');
	};

	// const handleClick = () => {
	// 	router.push(`/product/${game.address}`);
	// };


	return (
		<Popover
			isOpen={isOpen}
			content={<GamePopover game={game} />}
			positions={['left', 'right']}
		>
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className="w-full h-full relative cursor-pointer"
			>
				<Link href={`/product/${game.address}`}>
				<motion.div className="absolute w-full h-[83%] top-0 left-0" />
				<motion.div
					variants={variants}
					initial={'unhovered'}
					animate={controls}
					className="relative w-full h-[83%] top-0 left-0 bg-red"
				>
					<Image
						src={game.media.coverImageUrl}
						alt="background image"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</motion.div>
				<div className="absolute bottom-0 left-[30px] flex items-center justify-center">
					<div className="bg-[#4c6b22] p-[3px]">
						<Image
							src={
								'https://store.akamai.steamstatic.com/public/images/ico/ico_discount_generic.svg'
							}
							alt={'discount'}
							width={20}
							height={20}
						/>
					</div>
					<div className="text-white text-[14px] bg-[rgba(0,0,0,0.6)] px-[8px] py-[2.3px]">
						{game.price}
					</div>
				</div>
				</Link>
			</div>
		</Popover>
	);
}

interface IGamePopover {
	game: IGame;
}

function GamePopover({ game }: IGamePopover) {
	return (
		<div className="w-[250px] bg-[#d6edff] text-gray-700 flex items-start  flex-col justify-start px-[12px] py-[8px]">
			<span className="text-[14px] font-[500]">{game?.name}</span>
			<span className="text-[12px]">
				Premiera: {game.createdAt.slice(0, 10)}
			</span>
			<span className="text-[12px]">
				{game?.description?.split(' ').length ?? 0 > 32
					? game?.description?.split(' ').slice(0, 32).join(' ') +
					  '...'
					: game?.description}
			</span>
			<div className="bg-gray-900 text-gray-200 w-full p-2 text-[12px] my-[8px]">
				<span>Ogolne opinie uzytkownikow</span>
				<div>
					<span className="text-[#66C0F4]">Bardzo dobre</span>
					<span>(202 112)</span>
				</div>
			</div>
			<div className="text-[12px]">
				<span>Tagi</span>
				<div className="flex items-center justify-start gap-[4px]">
					{game.genres.map((genre: string) => (
						<div className="t bg-gray-500 text-gray-100 p-1 grid place-items-center" key={genre}>
							{genre}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
