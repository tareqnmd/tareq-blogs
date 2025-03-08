import { Blog } from '@/utils/types';
import { BlogCardDescription, BlogCardImage, BlogCardTitle } from '.';
import { BlogCategory, BlogTags, BlogTimeInfo } from '../shared';

const BlogCard = ({ blog }: { blog: Blog }) => {
	return (
		<div className="overflow-hidden transition-all duration-300 flex flex-col gap-2">
			<BlogCardImage blog={blog} />
			<BlogCategory category={blog.category} />
			<BlogTimeInfo blog={blog} />
			<BlogCardTitle blog={blog} />
			<BlogCardDescription description={blog.description} />
			<BlogTags tags={blog.tags} />
		</div>
	);
};

export default BlogCard;
