import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getTopBlogs = async () => {
	const blogs = await apiInstance.get(AppServiceEnum.GET_TOP_BLOGS);
	return blogs;
};
