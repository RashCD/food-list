import { render, screen } from '@testing-library/react';
import FoodCard from './FoodCard';

describe('FoodCard component', () => {
	it('should render', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={false}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getByText('FoodCard')).toBeInTheDocument();
	});

	it('should display gift icon when promotion is gift', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={false}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
		expect(screen.getByAltText('Gift icon')).toBeInTheDocument();
		expect(screen.getAllByRole('img')[0]).toHaveAttribute(
			'src',
			'/src/assets/icons/gift.svg',
		);
	});

	it('should display food images when imageUrl is provided', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={false}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getAllByRole('img')[1]).toBeInTheDocument();
		expect(screen.getByAltText('FoodCard image')).toBeInTheDocument();
		expect(screen.getAllByRole('img')[1]).toHaveAttribute(
			'src',
			'https://some-image-url',
		);
	});

	it('should display rating when rating is provided', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={false}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getAllByRole('img')[2]).toBeInTheDocument();
		expect(screen.getByAltText('FoodCard rating')).toBeInTheDocument();
		expect(screen.getByText('4.3')).toBeInTheDocument();
		expect(screen.getAllByRole('img')[2]).toHaveAttribute(
			'src',
			'/src/assets/icons/star.svg',
		);
	});

	it('should be able to show cooking time', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={false}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getByText('80 - 100 min')).toBeInTheDocument();
	});

	it('should be able to show New badge', () => {
		render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={true}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(screen.getByText('New')).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const comp = render(
			<FoodCard
				name="FoodCard"
				rating={4.3}
				minCookTime={80}
				maxCookTime={100}
				isNew={true}
				promotion="gift"
				imageUrl="https://some-image-url"
			/>,
		);

		expect(comp).toMatchSnapshot();
	});
});
