import { useState } from 'react';
import styles from './tabs.module.css';
import Button from '../Button/Button';

const TabList = [
	{
		title: 'All',
		name: 'all',
	},
];

type TabListProps = {
	title: string;
	name: string;
}[];

type TabsProps = {
	tabList: TabListProps;
	children?: React.ReactNode;
	onChange?: (name: string) => void;
	defaultValue: string | null;
};

const Tabs = ({ tabList = TabList, onChange, defaultValue }: TabsProps) => {
	const [tabSelected, setTabSelected] = useState(
		defaultValue || tabList[0].name,
	);

	const onSelectTab = (name: string) => {
		setTabSelected(name);
		onChange && onChange(name);
	};

	return (
		<div className={styles.tab} role="tab">
			{tabList.map((tab) => (
				<Button
					role="tablist"
					key={tab.title}
					variant="ghost"
					className={styles.list}
					active={tabSelected === tab.name}
					onClick={() => onSelectTab(tab.name)}
				>
					{tab.title}
				</Button>
			))}
		</div>
	);
};

export default Tabs;
