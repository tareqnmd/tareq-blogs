import { BlogCategories } from '@/components/blogs/categories';
import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getCategories } from '@/service';
import { QueryClient } from '@tanstack/react-query';

const CategoriesPage = async () => {
	const queryClient = new QueryClient();
	const { data: categories } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOGS_BY_CATEGORIES],
		queryFn: getCategories,
	});
	return <BlogCategories categories={categories} />;
};

export default CategoriesPage;
