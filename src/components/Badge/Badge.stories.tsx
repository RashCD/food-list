import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import starIcon from '../../assets/icons/star.svg';
import Icon from '../Icon/Icon';
import styles from './badge.module.css';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
};

export const BadgeWithIcon: Story = {
	args: {
		children: (
			<>
				<Icon
					source={starIcon}
					altText="Star"
					className={styles.icon}
				/>
				4.3
			</>
		),
		variant: 'secondary',
	},
};
