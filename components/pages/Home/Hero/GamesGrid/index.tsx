import { Variants, motion, useAnimationControls } from 'framer-motion';
import { IGame } from '..';
import Image from 'next/image';
import { useHashup } from '@hashup-it/hashup-react-sdk';
interface IGamesGrid {
	games: IGame[];
}

export default function GamesGrid({ games }: IGamesGrid) {
	return (
		<div className=" w-[1150px]  mx-auto h-auto flex justify-start items-start flex-col gap-[16px]">
			<div className="h-[180px] flex items-center justify-between gap-[16px] w-full">
				<GameBox
					price={games[11].price}
					image={games[11].media.coverImageUrl}
					address={games[11].address}
				/>
				<GameBox
					price={games[12].price}
					image={games[12].media.coverImageUrl}
					address={games[12].address}
				/>
				<GameBox
					price={games[13].price}
					image={games[13].media.coverImageUrl}
					address={games[13].address}
				/>
				<GameBox
					price={games[14].price}
					image={games[14].media.coverImageUrl}
					address={games[14].address}
				/>
			</div>
			<div className="h-[240px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox
					price={games[15].price}
					image={games[15].media.coverImageUrl}
					address={games[15].address}
				/>
				<GameBox
					price={games[16].price}
					image={games[16].media.coverImageUrl}
					address={games[16].address}
				/>
				<GameBox
					price={games[17].price}
					image={games[17].media.coverImageUrl}
					address={games[17].address}
				/>
			</div>
			<div className="h-[180px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox
					price={games[18].price}
					image={games[18].media.coverImageUrl}
					address={games[18].address}
				/>
				<GameBox
					price={games[19].price}
					image={games[19].media.coverImageUrl}
					address={games[19].address}
				/>
				<GameBox
					price={games[24].price}
					image={games[24].media.coverImageUrl}
					address={games[24].address}
				/>
				<GameBox
					price={games[25].price}
					image={games[25].media.coverImageUrl}
					address={games[25].address}
				/>
			</div>
			<div className="h-[240px] flex items-center justify-between gap-[16px]  w-full">
				<GameBox
					price={games[20].price}
					image={games[20].media.coverImageUrl}
					address={games[20].address}
				/>
				<GameBox
					price={games[21].price}
					image={games[21].media.coverImageUrl}
					address={games[21].address}
				/>
				<GameBox
					price={games[22].price}
					image={games[22].media.coverImageUrl}
					address={games[22].address}
				/>
			</div>
		</div>
	);
}

function GameBox({
	price,
	image,
	address,
}: {
	price: string;
	image: string;
	address: string;
}) {
	const controls = useAnimationControls();
	const { buyGame } = useHashup();

	const variants: Variants = {
		hovered: {
			scale: 1.1,
		},
		unhovered: {
			scale: 1.0,
		},
	};

	const handleMouseOver = () => {
		controls.start('hovered');
	};
	const handleMouseOut = () => {
		controls.start('unhovered');
	};

	const handleClick = () => {
		buyGame(address, '100').then((res) => console.log(res));
	};

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={handleClick}
			className="w-full h-full relative cursor-pointer"
		>
			<motion.div className="absolute w-full h-[83%] top-0 left-0" />
			<motion.div
				variants={variants}
				initial={'unhovered'}
				animate={controls}
				className="relative w-full h-[83%] top-0 left-0 bg-red"
			>
				<Image
					src={image}
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
					{price}
				</div>
			</div>
		</div>
	);
}
