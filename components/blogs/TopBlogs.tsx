import { Blogs } from '@/utils';
import { Title } from '../shared';
import { BlogCard } from './card';

const TopBlogs = ({ blogs }: { blogs: Blogs }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-8">
			<Title>Top Blogs</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
