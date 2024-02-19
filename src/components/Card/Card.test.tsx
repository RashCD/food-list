import { render, screen } from '@testing-library/react';
import { Card, CardContent } from './Card';

describe('Card component', () => {
	it('should render', () => {
		render(<Card>Card</Card>);

		expect(screen.getByText('Card')).toBeInTheDocument();
	});

	it('should be able to display card ', () => {
		render(
			<Card>
				<h1>Hello Header</h1>
				<CardContent>
					<h1>Hello Body</h1>
				</CardContent>
			</Card>,
		);

		expect(screen.getByText('Hello Header')).toBeInTheDocument();
		expect(screen.getByText('Hello Body')).toBeInTheDocument();
	});

	it('should be able to match snapshot', () => {
		const component = render(
			<Card>
				<h1>Hello Header</h1>
				<CardContent>
					<h1>Hello Body</h1>
				</CardContent>
			</Card>,
		);

		expect(component).toMatchSnapshot();
	});
});
