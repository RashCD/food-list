import { FoodListAPITypes } from '../../pages/Home/constant';
import FoodCard from '../FoodCard/FoodCard';
import styles from './foodlistcard.module.css';

type FoodListCardProps = {
	foodList: FoodListAPITypes['foods'];
};

const FoodListCard = ({ foodList }: FoodListCardProps) => {
	if (foodList.length === 0) {
		return (
			<div className={styles.noResult}>
				<p>No Result</p>
			</div>
		);
	}

	return (
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
	);
};

export default FoodListCard;
