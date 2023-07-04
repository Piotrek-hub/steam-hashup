export interface IGame {
	address: string;
	name: string;
	creator: string;
	price: string;
	colors: {
		actionColor: string;
		textColor: string;
		backgroundColor: string;
	};
	media: {
		cover: string;
		logoUrl: string;
		banner: string;
		coverImageUrl: string;
	};
	genres: string[];
	platforms: string[];
	chain: string;
	video?: string;
	screenshots?: string[];
	description?: string;
	createdAt: string;
}
