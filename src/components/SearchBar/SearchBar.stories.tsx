import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';

const meta = {
	title: 'Components/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		leftIcon: {
			control: 'select',
			options: [arrowLeftIcon, arrowRightIcon],
			description: 'The source of the icon to be displayed on the left.',
			table: {
				defaultValue: {
					summary: 'searchIcon',
				},
				type: {
					summary: 'string',
				},
			},
		},
		leftIconOnclick: {
			control: 'function',
			description:
				'The function to be called when the left icon is clicked.',
			table: {
				type: {
					summary: '() => void',
				},
			},
		},
		leftIconAlt: {
			control: 'text',
			description: 'The alt text of the left icon.',
			table: {
				defaultValue: {
					summary: 'Search icon',
				},
				type: {
					summary: 'string',
				},
			},
		},
		rightIcon: {
			control: 'select',
			options: [arrowLeftIcon, arrowRightIcon],
			description: 'The source of the icon to be displayed on the right.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		rightIconOnclick: {
			control: 'function',
			description:
				'The function to be called when the right icon is clicked.',
			table: {
				type: {
					summary: '() => void',
				},
			},
		},
		rightIconAlt: {
			control: 'text',
			description: 'The alt text of the right icon.',
			table: {
				defaultValue: {
					summary: '',
				},
				type: {
					summary: 'string',
				},
			},
		},
		outline: {
			control: 'boolean',
			description: 'Whether the search bar should be outlined.',
			table: {
				defaultValue: {
					summary: 'false',
				},
				type: {
					summary: 'boolean',
				},
			},
		},
	},
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchBarNormal: Story = {
	args: {},
};

export const SearchBarWithLeftIcon: Story = {
	args: {
		leftIcon: arrowLeftIcon,
		leftIconOnclick: undefined,
		leftIconAlt: 'Search with left icon',
	},
};

export const SearchBarWithLeftIconClickable: Story = {
	args: {
		leftIcon: arrowLeftIcon,
		leftIconAlt: 'Search with left icon clickable',
		leftIconOnclick: () => alert('Left icon clicked!'),
	},
};

export const SearchBarWithRightIcon: Story = {
	args: {
		rightIcon: arrowRightIcon,
		rightIconOnclick: undefined,
		rightIconAlt: 'Search with right icon',
	},
};

export const SearchBarWithRightIconClickable: Story = {
	args: {
		rightIcon: arrowRightIcon,
		rightIconAlt: 'Search with right icon clickable',
		rightIconOnclick: () => alert('Right icon clicked!'),
	},
};
