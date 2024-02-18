import React from 'react';
import styles from './card.module.css';
import clsx from 'clsx';

type CardProps = {
	className?: string;
	children?: React.ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
	return <div className={clsx(styles.card, className)}>{children}</div>;
};

type CardContentProps = {
	className?: string;
	children?: React.ReactNode;
};

export const CardContent = ({ className, children }: CardContentProps) => {
	return (
		<div className={clsx(styles.cardContent, className)}>{children}</div>
	);
};
