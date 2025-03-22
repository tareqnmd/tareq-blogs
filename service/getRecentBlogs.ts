import { apiInstance, recentBlogs } from '@/lib';
import { AppServiceEnum } from '@/lib/enum';

export const getRecentBlogs = async () => {
	return recentBlogs();
	const blogs = await apiInstance.get(AppServiceEnum.GET_RECENT_BLOGS);
	return blogs;
};
