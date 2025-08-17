import { CreateUserParams, GetMenuParams, SignInParams } from '@/type';
import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const appwriteConfig = {
	endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
	platform: 'com.codehun7er.foodordering',
	projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
	databaseId: '68a1e53a000ff768bc3a',
	bucketId: '68a21e6c000bc572a1ba',
	userCollectionId: '68a1e5bb00278a9b7ddb',
	categoriesCollectionId: '68a21c3100259673c8e9',
	menuCollectionId: '68a21c950000dc127e40',
	customizationsCollectionId: '68a21d48002a026fae3c',
	menuCustomizationsCollectionId: '68a21dc800008eabee56'
};

export const client = new Client();

client
	.setEndpoint(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId)
	.setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {
	try {
		const newAccount = await account.create(ID.unique(), email, password, name);
		if (!newAccount) throw new Error();

		const avatarUrl = avatars.getInitialsURL(name);

		await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				name,
				email,
				avatar: avatarUrl
			}
		);

		await login({ email, password });
	} catch (e) {
		throw new Error(e as string);
	}
};

export const login = async ({ email, password }: SignInParams) => {
	try {
		return await account.createEmailPasswordSession(email, password);
	} catch (e) {
		throw new Error(e as string);
	}
};

export const getCurrentUser = async () => {
	try {
		const currentAccount = await account.get();

		if (!currentAccount) throw new Error();

		const currentUser = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			[Query.equal('accountId', currentAccount.$id)]
		);

		if (!currentUser.documents.length) throw new Error();

		return currentUser.documents[0];
	} catch (e) {
		throw new Error(e as string);
	}
};

export const getMenu = async ({ category, query }: GetMenuParams) => {
	try {
		const queries: string[] = [];

		if (category) queries.push(Query.equal('categories', category));
		if (query) queries.push(Query.search('name', query));

		const menus = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.menuCollectionId,
			queries
		);

		return menus.documents;
	} catch (e) {
		throw new Error(e as string);
	}
};

export const getCategories = async () => {
	try {
		const categories = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.categoriesCollectionId
		);

		return categories.documents;
	} catch (e) {
		throw new Error(e as string);
	}
};
