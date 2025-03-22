import { apiInstance, topBlogs } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getTopBlogs = async () => {
	return topBlogs();
	const blogs = await apiInstance.get(AppServiceEnum.GET_TOP_BLOGS);
	return blogs;
};
