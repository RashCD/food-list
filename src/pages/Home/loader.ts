import { LoaderFunctionArgs } from 'react-router-dom';
import axios from 'redaxios';

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

export const homeLoader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const q = url.searchParams.get('q');
	const tab = url.searchParams.get('tab');

	console.log({ tab });

	const categories = await axios.get<CategoriesAPITypes>(
		'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593',
	);

	const foodList = await axios.get<FoodListAPITypes>(
		'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645',
	);

	if (q) {
		foodList.data.foods = foodList.data.foods.filter((food) =>
			food.name.toLowerCase().includes(q.toLowerCase()),
		);
	}

	if (tab && tab !== 'All') {
		const category = categories.data.find(
			(category) => category.name === tab,
		);

		foodList.data.foods = foodList.data.foods.filter(
			(food) => food.categoryId === category?.id,
		);
	}

	return {
		categories: categories.data,
		foodList: foodList.data.foods,
		q,
	};
};
