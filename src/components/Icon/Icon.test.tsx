import { fireEvent, render, screen } from '@testing-library/react';
import Icon from './Icon';
import { vi } from 'vitest';

describe('Icon component', () => {
	it('should render', () => {
		render(<Icon source="https://some-image-url" altText="Alt text" />);

		expect(screen.getByAltText('Alt text')).toBeInTheDocument();
	});

	it('should be able to render image', () => {
		render(<Icon source="https://some-image-url" altText="Alt text" />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute(
			'src',
			'https://some-image-url',
		);
	});

	it('should be able to click only when onClick is provided', () => {
		const handleClick = vi.fn();

		render(
			<Icon
				source="https://some-image-url"
				altText="Alt text"
				onClick={handleClick}
			/>,
		);

		fireEvent.click(screen.getByRole('img'));

		expect(handleClick).toHaveBeenCalled();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should not be able to click when onClick is not provided', () => {
		const handleClick = vi.fn();

		render(<Icon source="https://some-image-url" altText="Alt text" />);

		fireEvent.click(screen.getByRole('img'));

		expect(handleClick).toHaveBeenCalledTimes(0);
	});

	it('should match snapshot', () => {
		const handleClick = vi.fn();

		const component = render(
			<Icon
				source="https://some-image-url"
				altText="Alt text"
				onClick={handleClick}
			/>,
		);

		expect(component).toMatchSnapshot();
	});
});
