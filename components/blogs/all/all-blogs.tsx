import { ServiceQueryKeyEnum } from '@/lib/enum';
import { getAllBlogs } from '@/service';
import { Blog } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
import { BlogCard } from '../card';
import BlogCardsWrapper from '../card/blog-cards-wrapper';
import AllBlogsFilter from './all-blogs-filter';

const AllBlogs = async () => {
	const queryClient = new QueryClient();
	const { data: blogs } = await queryClient.fetchQuery({
		queryKey: [ServiceQueryKeyEnum.GET_BLOGS],
		queryFn: getAllBlogs,
	});
	return (
		<div className="flex flex-col gap-4">
			<AllBlogsFilter />
			<BlogCardsWrapper>
				{blogs.map((blog: Blog) => (
					<BlogCard
						key={blog.slug}
						blog={blog}
					/>
				))}
			</BlogCardsWrapper>
		</div>
	);
};

export default AllBlogs;
