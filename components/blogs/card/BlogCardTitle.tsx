import { Blog, Routes } from '@/utils';
import Link from 'next/link';

const BlogCardTitle = ({ blog }: { blog: Blog }) => {
	const { title, slug } = blog;
	return (
		<Link
			href={`${Routes.BLOGS}/${slug}`}
			className="md:text-2xl xs:text-xl text-lg font-semibold"
		>
			{title}
		</Link>
	);
};

export default BlogCardTitle;
