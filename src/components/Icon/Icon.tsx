import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './icon.module.css';

type IconProps = {
	altText: string;
	source: string;
	onClick?: () => void;
	className?: string;
};

const Icon = ({ altText, source, onClick, className }: IconProps) => {
	if (typeof onClick === 'function') {
		return (
			<Button variant="ghost" onClick={onClick} className={styles.button}>
				<img
					src={source}
					className={clsx(styles.icon, className)}
					alt={altText}
				/>
			</Button>
		);
	}

	return (
		<img
			src={source}
			className={clsx(styles.icon, className)}
			alt={altText}
		/>
	);
};

export default Icon;
