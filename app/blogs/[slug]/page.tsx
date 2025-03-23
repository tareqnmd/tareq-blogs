import { BlogDetails } from '@/components/blogs';
import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getAllBlogs, getBlogDetails } from '@/service';
import { Blog } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

const getData = async (slug: string) => {
	const queryClient = new QueryClient();
	const { data: blog } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOG_DETAILS, slug],
		queryFn: () => getBlogDetails(slug),
	});
	if (!blog) {
		notFound();
	}
	return blog;
};

export const generateStaticParams = async () => {
	const queryClient = new QueryClient();
	const { data: blogs } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOGS],
		queryFn: () => getAllBlogs(),
	});
	return blogs.map((blog: Blog) => ({
		slug: blog.slug,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const blog = await getData(slug);
	return {
		title: blog.title,
		description: blog.description,
		image: blog.image,
	};
};

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const blog = await getData(slug);
	if (!blog) {
		notFound();
	}
	return <BlogDetails blog={blog} />;
};

export default BlogPage;
