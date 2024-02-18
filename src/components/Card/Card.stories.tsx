import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent } from './Card';
import Badge from '../Badge/Badge';

const meta = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Content: Story = {
	args: {
		className: 'w-full',
		children: (
			<>
				<img
					alt="Vite Pizza"
					height="150"
					src="/vite.svg"
					style={{
						backgroundColor: '#f8f8f8',
						aspectRatio: '1/2',
						objectFit: 'contain',
					}}
					width="300"
				/>
				<CardContent>
					<div>
						<span>Vite pizza</span>
					</div>
					<div>
						<Badge variant="secondary" isRating>
							4.2
						</Badge>
						<Badge variant="secondary">50-70 min</Badge>
						<Badge variant="secondary">New</Badge>
					</div>
				</CardContent>
			</>
		),
	},
};
