import { BlogDetails } from '@/utils/types';

const DetailBlog = ({ blog }: { blog: BlogDetails }) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold">{blog.title}</h1>
			<p className="text-gray-500">{blog.content}</p>
			<p className="text-gray-500">{blog.date}</p>
			<p className="text-gray-500">{blog.category}</p>
			<p className="text-gray-500">{blog.tags}</p>
			<p className="text-gray-500">{blog.content}</p>
		</div>
	);
};

export default DetailBlog;
