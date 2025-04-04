import { BlogCategory as BlogCategoryType } from '@/utils/types';
import { Title } from '../../shared';
import BlogCategory from './blog-category';

const BlogCategories = ({ categories }: { categories: BlogCategoryType[] }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6">
			<Title>Blog by Categories</Title>
			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
					<BlogCategory
						key={category.slug}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};

export default BlogCategories;
