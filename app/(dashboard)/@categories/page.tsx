import { BlogCategories } from '@/components/dashboard';
import { categories } from '@/lib/blogs';
const CategoriesPage = () => {
	return <BlogCategories categories={categories} />;
};

export default CategoriesPage;
