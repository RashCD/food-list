import React from 'react';
import styles from './searchbar.module.css';
import clsx from 'clsx';
import searchIcon from '../../assets/icons/search.svg';
import Icon from '../Icon/Icon';

type SearchBarProps = {
	leftIcon?: string;
	leftIconOnclick?: () => void;
	leftIconAlt?: string;
	rightIcon?: string;
	rightIconOnclick?: () => void;
	rightIconAlt?: string;
	outline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar = ({
	leftIcon = searchIcon,
	leftIconOnclick,
	leftIconAlt = 'Search icon',
	rightIcon,
	rightIconOnclick,
	rightIconAlt = '',
	outline = false,
	...searchBarProps
}: SearchBarProps) => {
	return (
		<div className={clsx(styles.container, outline && styles.outline)}>
			{leftIcon && (
				<Icon
					source={leftIcon}
					altText={leftIconAlt}
					onClick={leftIconOnclick}
				/>
			)}
			<input
				className={clsx(styles.input, searchBarProps.className)}
				{...searchBarProps}
			/>
			{rightIcon && (
				<Icon
					source={rightIcon}
					altText={rightIconAlt}
					onClick={rightIconOnclick}
				/>
			)}
		</div>
	);
};

export default SearchBar;
