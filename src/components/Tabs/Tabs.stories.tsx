import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta = {
	title: 'Components/Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		tabList: {
			control: 'object',
			description: 'The list of tabs to be displayed.',
			table: {
				type: {
					summary: 'TabListProps[]',
				},
			},
		},
		onChange: {
			control: 'function',
			description: 'The function to be called when a tab is selected.',
			table: {
				type: {
					summary: '(name: string) => void',
				},
			},
		},
	},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
	args: {
		tabList: [
			{
				title: 'All',
				name: 'all',
			},
		],
	},
};

export const Multiple: Story = {
	args: {
		tabList: [
			{
				title: 'All',
				name: 'all',
			},
			{
				title: 'Burger',
				name: 'burger',
			},
		],
	},
};
