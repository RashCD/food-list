import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import { vi } from 'vitest';

describe('Tabs component', () => {
	it('should render', () => {
		render(
			<Tabs
				tabList={[
					{
						title: 'All',
						name: 'all',
					},
				]}
				defaultValue={null}
			/>,
		);

		expect(screen.getByText('All')).toBeInTheDocument();

		screen.debug();
	});

	it('should be able to set default value', () => {
		render(
			<Tabs
				tabList={[
					{
						title: 'Item1',
						name: 'item1',
					},
					{
						title: 'Item2',
						name: 'item2',
					},
					{
						title: 'Item3',
						name: 'item3',
					},
				]}
				defaultValue={'item3'}
			/>,
		);

		expect(screen.getAllByRole('tablist')[1]).not.toHaveClass(/active/);
		expect(screen.getAllByRole('tablist')[2]).toHaveClass(/active/);
	});

	it('should show 3 items', () => {
		render(
			<Tabs
				tabList={[
					{
						title: 'All',
						name: 'all',
					},
					{
						title: 'Foo',
						name: 'foo',
					},
					{
						title: 'Bar',
						name: 'bar',
					},
				]}
				defaultValue={null}
			/>,
		);

		expect(screen.getAllByRole('tab')).toHaveLength(1);
		expect(screen.getAllByRole('tablist')).toHaveLength(3);
	});

	it('should be able to click', () => {
		const handleClick = vi.fn();

		render(
			<Tabs
				tabList={[
					{
						title: 'All',
						name: 'all',
					},
					{
						title: 'Foo',
						name: 'foo',
					},
					{
						title: 'Bar',
						name: 'bar',
					},
				]}
				defaultValue={null}
				onChange={handleClick}
			/>,
		);

		fireEvent.click(screen.getAllByRole('tablist')[2]);

		expect(handleClick).toHaveBeenCalled();
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(handleClick).toHaveBeenCalledWith('bar');
	});

	it('should be able to match snapshot', () => {
		const handleClick = vi.fn();

		const comp = render(
			<Tabs
				tabList={[
					{
						title: 'All',
						name: 'all',
					},
					{
						title: 'Foo',
						name: 'foo',
					},
					{
						title: 'Bar',
						name: 'bar',
					},
				]}
				defaultValue={'all'}
				onChange={handleClick}
			/>,
		);

		expect(comp).toMatchSnapshot();
	});
});
