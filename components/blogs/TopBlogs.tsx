import { Blogs } from '@/utils';
import { Title } from '../shared';
import BlogCard from './card/BlogCard';

const TopBlogs = ({ blogs }: { blogs: Blogs }) => {
	return (
		<div className="flex flex-col gap-4">
			<Title>Top Blogs</Title>
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

export default TopBlogs;
