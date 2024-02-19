import { LoaderFunctionArgs } from 'react-router-dom';
import axios from 'redaxios';
import { queryClient } from '../../main';
import {
	CategoriesAPITypes,
	FoodListAPITypes,
	PAGE_SIZE,
	PAGE_START_INDEX,
} from './constant';

const categoriesQuery = () => ({
	queryKey: ['categories'],
	queryFn: async () =>
		await axios.get<CategoriesAPITypes>(
			'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593',
		),
});

const foodListQuery = () => ({
	queryKey: ['foodList'],
	queryFn: async () =>
		await axios.get<FoodListAPITypes>(
			'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645',
		),
});

export const homeLoader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const q = url.searchParams.get('q');
	const tab = url.searchParams.get('tab');
	const page = url.searchParams.get('page') || '1';
	let filteredFoodList: FoodListAPITypes['foods'] = [];
	let foodCountDifferences = 0;
	let totalCount = filteredFoodList.length;

	const categories = await queryClient.fetchQuery({
		...categoriesQuery(),
	});

	const foodList = await queryClient.fetchQuery({
		...foodListQuery(),
	});

	filteredFoodList = foodList.data.foods;
	totalCount = filteredFoodList.length;

	if (q) {
		filteredFoodList = filteredFoodList.filter((food) =>
			food.name.toLowerCase().includes(q.toLowerCase()),
		);
		totalCount = filteredFoodList.length;
	}

	if (tab && tab !== 'All') {
		const category = categories.data.find(
			(category) => category.name === tab,
		);

		filteredFoodList = filteredFoodList.filter(
			(food) => food.categoryId === category?.id,
		);

		totalCount = filteredFoodList.length;
	}

	if (page) {
		const pageNumber = parseInt(page, 10);
		const startIndex = PAGE_START_INDEX;
		const prevEndIndex = (pageNumber - 1) * PAGE_SIZE;
		const endIndex = pageNumber * PAGE_SIZE;
		filteredFoodList = filteredFoodList.slice(startIndex, endIndex);
		foodCountDifferences =
			filteredFoodList.length -
			filteredFoodList.slice(startIndex, prevEndIndex).length;
	}

	return {
		categories: categories.data,
		foodList: filteredFoodList,
		hasMore:
			filteredFoodList.length !== totalCount &&
			foodCountDifferences >= PAGE_SIZE,
		q,
	};
};
