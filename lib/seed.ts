import { appwriteConfig, databases, storage } from './appwrite';
import dummyData from './data';
import { ID } from 'react-native-appwrite';

interface Category {
	name: string;
	description: string;
}

interface Customization {
	name: string;
	price: number;
	type: 'topping' | 'side' | 'size' | 'crust' | string;
}

interface MenuItem {
	name: string;
	description: string;
	imageUrl: string;
	price: number;
	rating: number;
	calories: number;
	protein: number;
	category_name: string;
	customizations: string[];
}

interface DummyData {
	categories: Category[];
	customizations: Customization[];
	menu: MenuItem[];
}

const data = dummyData as DummyData;

const clearAll = async (collectionId: string): Promise<void> => {
	const list = await databases.listDocuments(appwriteConfig.databaseId, collectionId);

	await Promise.all(
		list.documents.map(doc =>
			databases.deleteDocument(appwriteConfig.databaseId, collectionId, doc.$id)
		)
	);
};

const clearStorage = async (): Promise<void> => {
	const list = await storage.listFiles(appwriteConfig.bucketId);

	await Promise.all(list.files.map(file => storage.deleteFile(appwriteConfig.bucketId, file.$id)));
};

const uploadImageToStorage = async (imageUrl: string) => {
	const response = await fetch(imageUrl);
	const blob = await response.blob();

	const fileObj = {
		name: imageUrl.split('/').pop() || `file-${Date.now()}.jpg`,
		type: blob.type,
		size: blob.size,
		uri: imageUrl
	};

	const file = await storage.createFile(appwriteConfig.bucketId, ID.unique(), fileObj);

	return storage.getFileViewURL(appwriteConfig.bucketId, file.$id);
};

const seed = async (): Promise<void> => {
	await clearAll(appwriteConfig.categoriesCollectionId);
	await clearAll(appwriteConfig.customizationsCollectionId);
	await clearAll(appwriteConfig.menuCollectionId);
	await clearAll(appwriteConfig.menuCustomizationsCollectionId);
	await clearStorage();

	const categoryMap: Record<string, string> = {};
	for (const cat of data.categories) {
		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.categoriesCollectionId,
			ID.unique(),
			cat
		);
		categoryMap[cat.name] = doc.$id;
	}

	const customizationMap: Record<string, string> = {};
	for (const cus of data.customizations) {
		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.customizationsCollectionId,
			ID.unique(),
			{
				name: cus.name,
				price: cus.price,
				type: cus.type
			}
		);
		customizationMap[cus.name] = doc.$id;
	}

	const menuMap: Record<string, string> = {};
	for (const item of data.menu) {
		const uploadedImage = await uploadImageToStorage(item.imageUrl);

		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.menuCollectionId,
			ID.unique(),
			{
				name: item.name,
				description: item.description,
				imageUrl: uploadedImage,
				price: item.price,
				rating: item.rating,
				calories: item.calories,
				protein: item.protein,
				categories: categoryMap[item.category_name]
			}
		);

		menuMap[item.name] = doc.$id;

		for (const name of item.customizations) {
			await databases.createDocument(
				appwriteConfig.databaseId,
				appwriteConfig.menuCustomizationsCollectionId,
				ID.unique(),
				{
					menu: doc.$id,
					customizations: customizationMap[name]
				}
			);
		}
	}

	console.log('Seeding complete');
};

export default seed;
