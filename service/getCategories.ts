import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getCategories = async () => {
	const categories = await apiInstance.get(AppServiceEnum.GET_CATEGORIES);
	return categories;
};
