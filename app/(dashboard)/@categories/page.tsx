import { BlogCategories } from '@/components/blogs/categories';
import { categories } from '@/lib/fake-data/response';
const CategoriesPage = () => {
	return <BlogCategories categories={categories} />;
};

export default CategoriesPage;
