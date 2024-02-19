import styles from './home.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
	Form,
	useLoaderData,
	useSearchParams,
	useSubmit,
} from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import FoodCard from '../../components/FoodCard/FoodCard';
import { ChangeEvent, useEffect } from 'react';
import { CategoriesAPITypes, FoodListAPITypes } from './loader';

type useLoaderDataType = {
	categories: CategoriesAPITypes;
	foodList: FoodListAPITypes['foods'];
	q?: string;
};

function Home() {
	const { categories, foodList, q } = useLoaderData() as useLoaderDataType;
	const [searchParams, setSearchParams] = useSearchParams();
	const submit = useSubmit();

	const tabList = [{ id: '', name: 'All' }, ...(categories || [])].map(
		(category) => ({
			title:
				category?.name.charAt(0).toUpperCase() +
				category?.name.slice(1),
			name: category?.name,
		}),
	);

	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const isFirstSearch = q == null;

		submit(event.currentTarget.form, {
			replace: !isFirstSearch,
		});
	};

	const onTabChange = (tab: string) => {
		searchParams.set('tab', tab);
		setSearchParams(searchParams);
	};

	useEffect(
		function syncQueryWithSearchInput() {
			const qElement = document.getElementById(
				'q',
			) as HTMLInputElement | null;

			if (qElement && q) {
				qElement.value = q;
			}
		},
		[q],
	);

	return (
		<div className={styles.container}>
			<div className={styles.searchBarContainer}>
				<Form role="search">
					<SearchBar
						id="q"
						placeholder="Enter restaurant name..."
						type="search"
						name="q"
						defaultValue={q}
						onChange={onSearchInputChange}
					/>
				</Form>
			</div>
			<div className={styles.tabListContainer}>
				<Tabs
					tabList={tabList}
					onChange={onTabChange}
					defaultValue={searchParams.get('tab')}
				/>
			</div>
			<div className={styles.foodList}>
				{foodList.map((food) => (
					<FoodCard
						key={food.id}
						name={food.name}
						rating={food.rating}
						minCookTime={food.minCookTime}
						maxCookTime={food.maxCookTime}
						isNew={food.isNew}
						promotion={food.promotion}
						imageUrl={food.imageUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
