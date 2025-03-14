import { BlogCategories } from '@/components/blogs/categories';
import { categories } from '@/lib/blogs';
const CategoriesPage = () => {
	return <BlogCategories categories={categories} />;
};

export default CategoriesPage;
