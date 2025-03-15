import { apiInstance } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getRecentBlogs = async () => {
	const blogs = await apiInstance.get(AppServiceEnum.GET_RECENT_BLOGS);
	return blogs;
};
