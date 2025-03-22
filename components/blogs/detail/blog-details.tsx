import {
	BlogCategory,
	BlogHeaderInfo,
	BlogTags,
} from '@/components/blogs/shared';
import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getBlogDetails } from '@/service';
import { QueryClient } from '@tanstack/react-query';
import BlogBanner from './blog-banner';
import BlogDetailContent from './blog-detail-content';
import BlogDetailTitle from './blog-detail-title';

const BlogDetails = async ({ slug }: { slug: string }) => {
	const queryClient = new QueryClient();
	const { data: blog } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOG_DETAILS, slug],
		queryFn: () => getBlogDetails(slug),
	});
	return (
		<div className="flex flex-col gap-4">
			<BlogBanner image={blog.image} />
			<BlogDetailTitle title={blog.title} />
			<BlogCategory category={blog.category} />
			<BlogHeaderInfo headerInfo={blog} />
			<BlogDetailContent content={blog.content} />
			<BlogTags tags={blog.tags} />
		</div>
	);
};

export default BlogDetails;
