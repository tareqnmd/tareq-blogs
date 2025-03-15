import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getAllBlogs = async () => {
	const blogs = await apiInstance.get(AppServiceEnum.GET_BLOGS);
	return blogs;
};
