import { cn } from '@/lib/cn';
import { Blog } from '@/utils/types';
import { BlogCardDescription, BlogCardImage, BlogCardTitle } from '.';
import { BlogCategory, BlogHeaderInfo, BlogTags } from '../shared';

const BlogCard = ({
	blog,
	extraClass,
}: {
	blog: Blog;
	extraClass?: string;
}) => {
	return (
		<div
			className={cn(
				'overflow-hidden transition-all duration-300 flex flex-col gap-2',
				extraClass
			)}
		>
			<BlogCardImage blog={blog} />
			<BlogCategory category={blog.category} />
			<BlogHeaderInfo blog={blog} />
			<BlogCardTitle blog={blog} />
			<BlogCardDescription shortContent={blog.shortContent} />
			<BlogTags tags={blog.tags} />
		</div>
	);
};

export default BlogCard;
