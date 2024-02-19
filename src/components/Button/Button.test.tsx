import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import { vi } from 'vitest';

describe('Button component', () => {
	it('should render', () => {
		render(<Button>Button</Button>);

		expect(screen.getByText('Button')).toBeInTheDocument();
	});

	it('should be able to click button', () => {
		const handleClick = vi.fn();

		render(<Button onClick={handleClick}>Button</Button>);

		fireEvent.click(screen.getByText('Button'));

		expect(handleClick).toHaveBeenCalled();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should be able to accept variant primary', () => {
		const comp = render(<Button variant="primary">Button</Button>);

		expect(comp).toMatchSnapshot();
	});

	it('should be able to accept variant outline', () => {
		const comp = render(<Button variant="outline">Button</Button>);

		expect(comp).toMatchSnapshot();
	});

	it('should be able to accept variant ghost', () => {
		const comp = render(<Button variant="ghost">Button</Button>);

		expect(comp).toMatchSnapshot();
	});
});
