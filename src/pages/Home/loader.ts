import axios from 'redaxios';

export const homeLoader = async () => {
	const categories = await axios.get(
		'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593',
	);
	const foodList = await axios.get(
		'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645',
	);

	return {
		categories: categories.data,
		foodList: foodList.data.foods,
	};
};
