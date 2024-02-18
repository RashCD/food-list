import type { Meta, StoryObj } from '@storybook/react';

import FoodCard from './FoodCard';

const meta = {
	title: 'Components/FoodCard',
	component: FoodCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		rating: {
			control: 'number',
			description: 'The rating of the food.',
			table: {
				type: {
					summary: 'number',
				},
			},
		},
		promotion: {
			control: 'select',
			description: 'The promotion name of the food.',
			options: ['gift', 'discount', '1+1', ''],
			table: {
				type: {
					summary: 'text',
				},
			},
		},
		isNew: {
			control: 'boolean',
			description: 'The isNew of the food.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
		},
		minCookTime: {
			control: 'number',
			description: 'The mininum cook time of the food.',
			table: {
				type: {
					summary: 'number',
				},
			},
		},
		maxCookTime: {
			control: 'number',
			description: 'The maximum cook time of the food.',
			table: {
				type: {
					summary: 'number',
				},
			},
		},
		name: {
			control: 'text',
			description: 'The name of the food.',
			table: {
				type: {
					summary: 'text',
				},
			},
		},
		imageUrl: {
			control: 'text',
			description: 'The image url of the food.',
			table: {
				type: {
					summary: 'text',
				},
			},
		},
	},
} satisfies Meta<typeof FoodCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		rating: 3.9508,
		promotion: null,
		isNew: false,
		minCookTime: 80,
		maxCookTime: 100,
		name: 'Niquent Drinks',
		imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
	},
};

export const WithPromotion: Story = {
	args: {
		rating: 3.4708,
		promotion: 'gift',
		isNew: false,
		minCookTime: 80,
		maxCookTime: 100,
		name: 'Niquent Drinks',
		imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
	},
};

export const WithNew: Story = {
	args: {
		rating: 2.3308,
		promotion: 'gift',
		isNew: true,
		minCookTime: 80,
		maxCookTime: 100,
		name: 'Niquent Drinks',
		imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
	},
};
