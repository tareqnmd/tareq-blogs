import { apiInstance, blogCategories } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getCategories = async () => {
	return blogCategories();
	const categories = await apiInstance.get(AppServiceEnum.GET_CATEGORIES);
	return categories;
};
