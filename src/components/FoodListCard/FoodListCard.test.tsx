import { render, screen } from '@testing-library/react';
import FoodListCard from './FoodListCard';

describe('FoodListCard component', () => {
	it('should render', () => {
		render(
			<FoodListCard
				foodList={[
					{
						id: '628b5decc94a27754f30e6f1',
						index: 0,
						rating: 3.9508,
						promotion: 'gift',
						isNew: false,
						categoryId: '6288a89fac9e970731bfaa7b',
						minCookTime: 80,
						maxCookTime: 100,
						restaurant: 'Niquent',
						name: 'Niquent Drinks',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Drinks',
					},
					{
						id: '628b5decf39bcc4e982fc88a',
						index: 1,
						rating: 4.9874,
						promotion: '1+1',
						isNew: false,
						categoryId: '6288a89f1f0152b8c2cd512b',
						minCookTime: 120,
						maxCookTime: 140,
						restaurant: 'Boilicon',
						name: 'Boilicon Shushi',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Shushi',
					},
				]}
			/>,
		);

		expect(screen.getByText('Niquent Drinks')).toBeInTheDocument();
		expect(screen.getByText('Boilicon Shushi')).toBeInTheDocument();
	});

	it('should display 2 main icon when foodList is provided', () => {
		render(
			<FoodListCard
				foodList={[
					{
						id: '628b5decc94a27754f30e6f1',
						index: 0,
						rating: 3.9508,
						promotion: 'gift',
						isNew: false,
						categoryId: '6288a89fac9e970731bfaa7b',
						minCookTime: 80,
						maxCookTime: 100,
						restaurant: 'Niquent',
						name: 'Niquent Drinks',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Drinks',
					},
					{
						id: '628b5decf39bcc4e982fc88a',
						index: 1,
						rating: 4.9874,
						promotion: 'discount',
						isNew: false,
						categoryId: '6288a89f1f0152b8c2cd512b',
						minCookTime: 120,
						maxCookTime: 140,
						restaurant: 'Boilicon',
						name: 'Boilicon Shushi',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Shushi',
					},
				]}
			/>,
		);

		expect(screen.getByAltText('Gift icon')).toBeInTheDocument();
		expect(screen.getByAltText('Discount icon')).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const comp = render(
			<FoodListCard
				foodList={[
					{
						id: '628b5decc94a27754f30e6f1',
						index: 0,
						rating: 3.9508,
						promotion: 'gift',
						isNew: false,
						categoryId: '6288a89fac9e970731bfaa7b',
						minCookTime: 80,
						maxCookTime: 100,
						restaurant: 'Niquent',
						name: 'Niquent Drinks',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Drinks',
					},
					{
						id: '628b5decf39bcc4e982fc88a',
						index: 1,
						rating: 4.9874,
						promotion: 'discount',
						isNew: false,
						categoryId: '6288a89f1f0152b8c2cd512b',
						minCookTime: 120,
						maxCookTime: 140,
						restaurant: 'Boilicon',
						name: 'Boilicon Shushi',
						imageUrl:
							'https://source.unsplash.com/random/400x400?Shushi',
					},
				]}
			/>,
		);

		expect(comp).toMatchSnapshot();
	});
});
