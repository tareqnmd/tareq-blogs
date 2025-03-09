import { BlogCategory as BlogCategoryType } from '@/utils';
import { Routes } from '@/utils/enum';
import Link from 'next/link';

const BlogCategory = ({ category }: { category: BlogCategoryType }) => {
	return (
		<Link
			href={`${Routes.CATEGORIES}/${category.slug}`}
			className="rounded-full text-xs xs:text-sm text-secondary bg-primary px-4 py-1"
		>
			{category.name}
		</Link>
	);
};

export default BlogCategory;
