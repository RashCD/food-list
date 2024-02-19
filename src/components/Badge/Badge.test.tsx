import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import Icon from '../Icon/Icon';
import starIcon from '../../assets/icons/star.svg';

describe('Badge component', () => {
	it('should render', () => {
		render(<Badge>Badge</Badge>);

		expect(screen.getByText('Badge')).toBeInTheDocument();
	});

	it('should accept icon props', () => {
		render(
			<Badge variant="secondary">
				<Icon source={starIcon} altText="Star" />
				4.3
			</Badge>,
		);

		expect(screen.getByAltText('Star')).toBeInTheDocument();
		expect(screen.getByText('4.3')).toBeInTheDocument();
	});

	it('should accept primary variant props and match snapshot', () => {
		const component = render(<Badge variant="primary">Badge</Badge>);

		expect(screen.getByText('Badge')).toBeInTheDocument();
		expect(component).toMatchSnapshot();
	});

	it('should accept secondary variant props and match snapshot', () => {
		const component = render(<Badge variant="secondary">Badge</Badge>);

		expect(screen.getByText('Badge')).toBeInTheDocument();
		expect(component).toMatchSnapshot();
	});
});
