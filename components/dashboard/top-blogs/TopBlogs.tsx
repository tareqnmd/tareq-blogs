import { Blogs } from '@/utils';
import { BlogCard } from '../../blogs/card';
import { Title } from '../../shared';

const TopBlogs = ({ blogs }: { blogs: Blogs }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6">
			<Title>Top Blogs</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
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
