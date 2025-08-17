import useAuthStore from '@/store/auth.store';
import { Redirect, Slot } from 'expo-router';

const RootLayout = () => {
	const { isAuthenticated } = useAuthStore();

	return isAuthenticated ? <Slot /> : <Redirect href='/login' />;
};

export default RootLayout;
