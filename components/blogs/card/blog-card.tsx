import {
	BlogCategory,
	BlogHeaderInfo,
	BlogTags,
} from '@/components/blogs/shared';
import { cn } from '@/lib/cn';
import { Blog } from '@/utils/types';
import { BlogCardDescription, BlogCardImage, BlogCardTitle } from '.';

const BlogCard = ({
	blog,
	extraClass,
}: {
	blog: Blog;
	extraClass?: string;
}) => {
	return (
		<div className={cn('@container', extraClass)}>
			<div className="overflow-hidden transition-all duration-300 grid grid-cols-1 @xl:grid-cols-2 gap-2">
				<BlogCardImage blog={blog} />
				<div className="flex flex-col gap-2">
					<BlogCategory category={blog.category} />
					<BlogHeaderInfo headerInfo={blog} />
					<BlogCardTitle blog={blog} />
					<BlogCardDescription shortContent={blog.shortContent} />
					<BlogTags tags={blog.tags} />
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
