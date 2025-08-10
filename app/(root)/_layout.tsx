import { Redirect, Slot } from 'expo-router';

const _Layout = () => {
	const isAuthenticated = false;

	return isAuthenticated ? <Slot /> : <Redirect href='/login' />;
};

export default _Layout;
