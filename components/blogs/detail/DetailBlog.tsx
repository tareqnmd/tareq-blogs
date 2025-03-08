import { BlogDetails } from '@/utils/types';
import { BlogCategory, BlogHeaderInfo, BlogTags } from '../shared';
import BlogDetailContent from './BlogDetailContent';
import BlogBanner from './BlogBanner';

const DetailBlog = ({ blog }: { blog: BlogDetails }) => {
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

export default DetailBlog;
