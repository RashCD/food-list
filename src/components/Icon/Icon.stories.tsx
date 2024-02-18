import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

import searchIcon from '../../assets/icons/search.svg';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		altText: {
			control: 'text',
			description: 'The alt text of the icon.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		source: {
			control: 'text',
			description: 'The source of the icon.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		onClick: {
			control: 'function',
			description:
				'The function to be called when the icon is clicked. If undefined, the icon will not be clickable.',
			table: {
				type: {
					summary: '() => void',
				},
			},
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
	args: {
		altText: 'Search icon',
		source: searchIcon,
		onClick: undefined,
	},
};

export const SearchClickable: Story = {
	args: {
		altText: 'Search icon',
		source: searchIcon,
	},
};
