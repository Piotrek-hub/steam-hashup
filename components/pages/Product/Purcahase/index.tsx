"use client"

import { useEthereum } from "@/hooks/utils/useEthereum";


export default function Purchase({
	name,
	id,
	price,
}: {
	name: string;
	id: string;
	price: string;
}) {
	const { buyGame } = useEthereum();

	const handlePurchase = () => {
		buyGame(id, 100)
	};
	return (
		<div className="bg-purchaseGradient mx-auto relative h-[95px]  p-[16px] w-full rounded-[6px]">
			<span className="text-[21px] text-white ">Kup {name}</span>
			<div className="absolute -bottom-[17px] right-[20px] flex items-center justify-center bg-black gap-[2px] p-[2px] rounded-[1px]">
				<span className="text-[#BEEE11] text-[14px] bg-[#354555] grid place-items-center h-[35px] px-[8px]">
					{price}
				</span>
				<div
					onClick={handlePurchase}
					className="cursor-pointer  text-[#d2efa9] bg-secondButtonGradient rounded-[2px]  p-[1px] px-[15px] h-[35px] text-[15px] leading-[30px]"
				>
					Kup
				</div>
			</div>
		</div>
	);
}
