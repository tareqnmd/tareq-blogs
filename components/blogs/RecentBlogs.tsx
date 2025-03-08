import { Blogs } from '@/utils';
import { Title } from '../shared';
import { BlogCard } from './card';

const RecentBlogs = ({ blogs }: { blogs: Blogs }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-8">
			<Title>Recent Blogs</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{blogs.map((blog) => (
					<BlogCard
						key={blog.slug}
						blog={blog}
					/>
				))}
			</div>
		</div>
	);
};

export default RecentBlogs;
