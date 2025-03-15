import {
	BlogCategory,
	BlogHeaderInfo,
	BlogTags,
} from '@/components/blogs/shared';
import { BlogDetails as BlogDetailsType } from '@/utils/types';
import BlogBanner from './blog-banner';
import BlogDetailContent from './blog-detail-content';

const BlogDetails = async ({ blog }: { blog: BlogDetailsType }) => {
	return (
		<div className="flex flex-col gap-4">
			<BlogBanner image={blog.image} />
			<BlogCategory category={blog.category} />
			<BlogHeaderInfo headerInfo={blog} />
			<BlogDetailContent content={blog.content} />
			<BlogTags tags={blog.tags} />
		</div>
	);
};

export default BlogDetails;
