import { Blog, Routes } from '@/utils';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const BlogCardTitle = ({ blog }: { blog: Blog }) => {
	const { title, slug } = blog;
	return (
		<Link
			href={`${Routes.BLOGS}/${slug}`}
			className="flex justify-between items-start gap-4"
		>
			<h3 className="text-2xl font-semibold">{title}</h3>
			<BsArrowUpRight className="h-6 w-6" />
		</Link>
	);
};

export default BlogCardTitle;
