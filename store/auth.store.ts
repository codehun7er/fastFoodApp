import { getCurrentUser } from '@/lib/appwrite';
import { User } from '@/type';
import { create } from 'zustand';

type AuthState = {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | null;

	setIsAuthenticated: (value: boolean) => void;
	setIsLoading: (value: boolean) => void;
	setUser: (user: User) => void;

	fetchAuthenticatedUser: () => Promise<void>;
};

const useAuthStore = create<AuthState>(set => ({
	isAuthenticated: false,
	isLoading: false,
	user: null,
	setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
	setUser: (user: User) => set({ user }),
	setIsLoading: (value: boolean) => set({ isLoading: value }),
	fetchAuthenticatedUser: async () => {
		try {
			set({ isLoading: true });
			const user = await getCurrentUser();
			if (user) set({ isAuthenticated: true, user: user as unknown as User });
			else set({ isAuthenticated: false, user: null });
		} catch (error) {
			console.log('fetchAuthenticatedUser error', error);
			set({ isAuthenticated: false, user: null });
		} finally {
			set({ isLoading: false });
		}
	}
}));

export default useAuthStore;
