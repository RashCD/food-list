import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { vi } from 'vitest';

describe('SearchBar component', () => {
	it('should render', () => {
		render(<SearchBar />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should be able to render icon', () => {
		render(<SearchBar />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByAltText('Search icon')).toBeInTheDocument();
	});

	it('should be able to input key into the search bar', () => {
		render(<SearchBar />);

		const searchBar = screen.getByRole('textbox');

		fireEvent.change(searchBar, { target: { value: 'test' } });

		expect(searchBar).toHaveValue('test');
	});

	it('should show right icon if specified', () => {
		render(
			<SearchBar
				rightIcon="https://some-image-url"
				rightIconAlt="right icon"
			/>,
		);

		expect(screen.getByAltText('right icon')).toBeInTheDocument();
	});

	it('should be able to click left icon if specified', () => {
		const handleClick = vi.fn();

		render(
			<SearchBar
				leftIcon="https://some-image-url"
				leftIconAlt="left icon"
				leftIconOnclick={handleClick}
			/>,
		);

		fireEvent.click(screen.getByAltText('left icon'));

		expect(handleClick).toHaveBeenCalled();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should be able to click right icon if specified', () => {
		const handleClick = vi.fn();

		render(
			<SearchBar
				rightIcon="https://some-image-url"
				rightIconAlt="right icon"
				rightIconOnclick={handleClick}
			/>,
		);

		fireEvent.click(screen.getByAltText('right icon'));

		expect(handleClick).toHaveBeenCalled();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should be able to match snapshot', () => {
		const comp = render(
			<SearchBar
				leftIcon="https://some-image-url"
				leftIconAlt="left icon"
				leftIconOnclick={() => {}}
				rightIcon="https://some-image-url"
				rightIconAlt="right icon"
				rightIconOnclick={() => {}}
			/>,
		);

		expect(comp).toMatchSnapshot();
	});
});
