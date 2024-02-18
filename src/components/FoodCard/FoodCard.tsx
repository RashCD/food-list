import { Card, CardContent } from '../Card/Card';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import starIcon from '../../assets/icons/star.svg';
import styles from './foodcard.module.css';
import clsx from 'clsx';
import giftIcon from '../../assets/icons/gift.svg';
import discountIcon from '../../assets/icons/discount.svg';

type FoodCardProps = {
	className?: string;
	imageUrl: string;
	name: string;
	isNew: boolean;
	minCookTime: number;
	maxCookTime: number;
	rating: number;
	promotion: string | null;
};

const FoodCard = ({
	name,
	imageUrl,
	rating,
	minCookTime,
	maxCookTime,
	isNew,
	promotion,
}: FoodCardProps) => {
	const formatRating = (rating: number) => {
		return rating.toFixed(1);
	};

	const promotionDisplay = (promotion: string) => {
		switch (promotion) {
			case 'gift':
				return {
					className: styles.gift,
					icon: giftIcon,
					text: 'Gift',
				};
			case 'discount':
				return {
					className: styles.discount,
					icon: discountIcon,
					text: 'Discount',
				};
			default:
				return {
					className: styles.default,
					icon: null,
					text: promotion,
				};
		}
	};

	return (
		<Card className={styles.foodCardContainer}>
			{promotion && (
				<div
					className={clsx(
						styles.foodPromotionContainer,
						promotionDisplay(promotion).className,
					)}
				>
					{promotionDisplay(promotion).icon ? (
						<Icon
							source={promotionDisplay(promotion).icon as string}
							altText={`${promotionDisplay(promotion).text} icon`}
							className={styles.promotionIcon}
						/>
					) : (
						<span>{promotionDisplay(promotion).text}</span>
					)}
				</div>
			)}
			<img
				alt={`${name} image`}
				height="150"
				src={imageUrl}
				style={{
					aspectRatio: '1/2',
					objectFit: 'cover',
				}}
				width="300"
			/>
			<CardContent>
				<div>
					<span>{name}</span>
				</div>
				<div>
					<Badge variant="secondary">
						{rating && (
							<Icon
								source={starIcon}
								altText={`${name} rating`}
								className={styles.icon}
							/>
						)}
						{formatRating(rating)}
					</Badge>
					<Badge variant="secondary">{`${minCookTime} - ${maxCookTime} min`}</Badge>
					{isNew && (
						<Badge variant="secondary" className={styles.new}>
							New
						</Badge>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default FoodCard;
