import {
	BlogCategory,
	BlogHeaderInfo,
	BlogTags,
} from '@/components/blogs/shared';
import { Blog } from '@/utils';
import BlogBanner from './blog-banner';
import BlogDetailContent from './blog-detail-content';
import BlogDetailTitle from './blog-detail-title';

const BlogDetails = async ({ blog }: { blog: Blog }) => {
	return (
		<div className="flex flex-col gap-4">
			<BlogBanner image={blog.image} />
			<BlogCategory category={blog.category} />
			<BlogHeaderInfo headerInfo={blog} />
			<BlogDetailTitle title={blog.title} />
			<BlogDetailContent content={blog.content} />
			<BlogTags tags={blog.tags} />
		</div>
	);
};

export default BlogDetails;
