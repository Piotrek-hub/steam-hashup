export default function Navigation() {
	return <div className="w-[940px] mx-auto h-[35px] flex items-center justify-between bg-storeNavigationGradient px-[4px]">
		<div className={"text-[#e5e5e5] font-bold text-[13px] font-[arial]"}>
			<span className={"px-[12px]"}>Twoj sklep</span>
			<span className={"px-[12px]"}>Nowe i warte uwagi</span>
			<span className={"px-[12px]"}>Kategorie</span>
			<span className={"px-[12px]"}>Sklep punktow</span>
			<span className={"px-[12px]"}>Aktualnosci</span>
			<span className={"px-[12px]"}>Labolatoria</span>
		</div>
		<div>
			<input placeholder={"szukaj"} className={"text-[#e5e5e5] rounded-[2px] bg-[#316282] px-[4px] py-[2px] outline-blue"}/>
		</div>
	</div>;
}
