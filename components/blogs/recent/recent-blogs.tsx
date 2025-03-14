import { Blogs } from '@/utils';
import { BlogCard } from '../card';

const RecentBlogs = ({ blogs }: { blogs: Blogs }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
			{blogs.map((blog, index) => (
				<BlogCard
					key={blog.slug}
					blog={blog}
					extraClass={index === 0 ? 'col-span-full' : ''}
				/>
			))}
		</div>
	);
};

export default RecentBlogs;
