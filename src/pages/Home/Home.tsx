import styles from './home.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import FoodCard from '../../components/FoodCard/FoodCard';
import { ChangeEvent, useEffect, useState } from 'react';
import { CategoriesAPITypes, FoodListAPITypes } from './constant';
import Button from '../../components/Button/Button';

type useLoaderDataType = {
	categories: CategoriesAPITypes;
	foodList: FoodListAPITypes['foods'];
	q?: string;
	hasMore: boolean;
};

function Home() {
	const { categories, foodList, q, hasMore } =
		useLoaderData() as useLoaderDataType;
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState(searchParams.get('page') || '1');

	const tabList = [{ id: '', name: 'All' }, ...(categories || [])].map(
		(category) => ({
			title:
				category?.name.charAt(0).toUpperCase() +
				category?.name.slice(1),
			name: category?.name,
		}),
	);

	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		searchParams.set('q', event.currentTarget.value);
		setSearchParams(searchParams);
	};

	const onTabChange = (tab: string) => {
		searchParams.set('tab', tab);
		searchParams.set('page', '1');
		setSearchParams(searchParams);
		setPage('1');
	};

	const onShowMoreClick = () => {
		searchParams.set('page', String(Number(page) + 1));
		setSearchParams(searchParams);
		setPage((prev) => String(Number(prev) + 1));
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
				<SearchBar
					id="q"
					placeholder="Enter restaurant name..."
					type="search"
					name="q"
					defaultValue={q}
					onChange={onSearchInputChange}
				/>
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
			{hasMore && (
				<Button
					variant="outline"
					className={styles.showMore}
					onClick={onShowMoreClick}
				>
					+ Show More
				</Button>
			)}
		</div>
	);
}

export default Home;
