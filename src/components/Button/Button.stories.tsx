import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			description: 'The variant of the button.',
			options: ['primary', 'outline', 'ghost'],
			table: {
				type: {
					summary: 'primary | outline | ghost',
				},
			},
		},
		children: {
			control: 'text',
			description: 'The text of the button.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		className: {
			control: 'text',
			description:
				'The class name of the button. Conflicting classes will override the base styles.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		active: {
			control: 'boolean',
			description: 'The active state of the button.',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Button',
		active: false,
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		children: 'Button',
		active: false,
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		children: 'Button',
		active: false,
	},
};
