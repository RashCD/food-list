import React from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type ButtonProps = {
	active?: boolean;
	variant?: 'primary' | 'outline' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles = {
	primary: styles.primary,
	outline: styles.outline,
	ghost: styles.ghost,
};

const Button = ({
	variant = 'primary',
	children,
	className,
	active = false,
	...restProps
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				styles.button,
				variantStyles[variant],
				className,
				active && styles.active,
			)}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
