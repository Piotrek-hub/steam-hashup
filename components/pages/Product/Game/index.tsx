'use client';
import { IGame } from '@/types/game';
import { trimAddress } from '@/utils/address';
import Image from 'next/image';

export default function Game({ game }: { game: IGame }) {
12
	return (
		<div className="w-[940px] h-[440px] ">
			<div className="py-[12px]">
				<span className="text-[26px] text-white">{game?.name}</span>
			</div>
			<div className="flex items-start justify-between gap-[16px] bg-gameGradient w-full">
				<div className="w-[60%] h-full flex flex-col items-center justify-ccenter gap-[8px]">
					<div className="h-[340px] w-full relative">
						<iframe
							src={`https://www.youtube.com/embed/${
								game?.video?.split('=')[1]
							}`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							title={game?.name}
							frameBorder="0"
							className="w-full h-full"
						></iframe>
					</div>
					<div className="w-full  flex items-center justify-start  gap-[4px] ">
						{game?.screenshots?.slice(0, 5).map((ss: string) => {
							return (
								<div className="w-[115px] h-[65px] bg-black relative" key={ss}>
									<Image src={ss} fill alt="" />
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-[40%] h-full">
					<div className="h-[150px] w-full  relative">
						<Image
							fill
							src={game?.media.coverImageUrl ?? ''}
							alt="image"
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="w-full h-[290px] flex items-center justify-start flex-col py-[12px]">
						<span className="text-[13px] text-[#c6d4df] ">
							{game?.description?.split(' ').length ?? 0 > 16
								? game?.description
										?.split(' ')
										.slice(0, 16)
										.join(' ') + '...'
								: game?.description}
						</span>
						<div className="flex items-center justify-start w-full gap-[24px] mt-[10px]">
							<span className="text-[#556772] text-[10px] uppercase">
								OSTATNIE RECENZJE
							</span>
							<div className="text-[12px]">
								<span className="text-[#66C0F4]">
									BARDZO POZYTYWNE
								</span>
								<span className="text-[#556772]">(472)</span>
							</div>
						</div>
						<div className="flex items-center justify-start w-full gap-[24px]">
							<span className="text-[#556772] text-[10px] uppercase">
								WSZYSTKIE RECENZJE
							</span>
							<div className="text-[12px]">
								<span className="text-[#66C0F4]">
									BARDZO POZYTYWNE
								</span>
								<span className="text-[#556772]">(472)</span>
							</div>
						</div>
						<div className="flex items-center justify-start w-full gap-[24px]">
							<span className="text-[#556772] text-[10px] uppercase">
								DATA WYDANIA
							</span>
							<div className="text-[12px] py-[20px]">
								<span className="text-[#8f98a0]">

									{game?.createdAt.slice(0, 10)}
								</span>
							</div>
						</div>
						<div className="flex items-center justify-start w-full gap-[24px]">
							<span className="text-[#556772] text-[10px] uppercase">
								WYDAWCA
							</span>
							<div className="text-[12px]">
								<span className="text-[#66C0F4]">
									{trimAddress(game?.creator)}
								</span>
							</div>
						</div>

						<div className="flex items-start justify-center h-min w-full  flex-col pt-[10px]">
							<span className="text-[#556772] text-[10px] uppercase">
								Popularne tagi dla tego produktu:
							</span>
							<div className="flex items-start justify-start gap-[6px] mt-[5px]">
								{game?.genres.map((genre) => (
									<span className="text-[#66C0F4] text-[12px] px-[7px] bg-[#233C4E]" key={genre}>
										{genre}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
