import clsx from 'clsx';
import styles from './badge.module.css';

type BadgeProps = {
	className?: string;
	variant?: 'primary' | 'secondary';
	children?: React.ReactNode;
	isRating?: boolean;
};

const variantStyles = {
	primary: styles.primary,
	secondary: styles.secondary,
};

const Badge = ({ className, variant = 'primary', children }: BadgeProps) => {
	return (
		<div className={clsx(styles.badge, variantStyles[variant], className)}>
			{children}
		</div>
	);
};

export default Badge;
