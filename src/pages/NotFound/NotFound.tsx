import { useRouteError } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFound = () => {
	const error = useRouteError() as Error & { statusText: string };

	console.error(error);

	return (
		<div className={styles.notFound}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
};

export default NotFound;
