import { allBlogs, apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getAllBlogs = async () => {
	return allBlogs();
	const blogs = await apiInstance.get(AppServiceEnum.GET_BLOGS);
	return blogs;
};
