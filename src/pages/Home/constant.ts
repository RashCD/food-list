export type FoodListAPITypes = {
	foods: {
		id: string;
		index: number;
		rating: number;
		promotion: string;
		isNew: boolean;
		categoryId: string;
		minCookTime: number;
		maxCookTime: number;
		restaurant: string;
		name: string;
		imageUrl: string;
	}[];
};

export type CategoriesAPITypes = {
	id: string;
	name: string;
}[];

export const PAGE_START_INDEX = 0;

export const PAGE_SIZE = 9;
