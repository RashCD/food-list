import styles from './home.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useLoaderData } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import FoodCard from '../../components/FoodCard/FoodCard';

type useLoaderDataType = {
	categories: {
		id: string;
		name: string;
	}[];
	foodList: {
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

function Home() {
	const { categories, foodList } = useLoaderData() as useLoaderDataType;

	const tabList = [{ id: '', name: 'All' }, ...categories].map(
		(category) => ({
			title:
				category.name.charAt(0).toUpperCase() + category.name.slice(1),
			name: category.name,
		}),
	);

	return (
		<div className={styles.container}>
			<div className={styles.searchBarContainer}>
				<SearchBar placeholder="Enter restaurant name..." />
			</div>
			<div className={styles.tabListContainer}>
				<Tabs tabList={tabList} />
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
