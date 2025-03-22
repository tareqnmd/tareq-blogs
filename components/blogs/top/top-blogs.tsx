'use client';
import { Blog } from '@/utils/types';
import { Title } from '../../shared';
import { BlogCard } from '../card';
import BlogCardsWrapper from '../card/blog-cards-wrapper';

const TopBlogs = ({ blogs }: { blogs: Blog[] }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6">
			<Title>Top Blogs</Title>
			<BlogCardsWrapper>
				{blogs.map((blog) => (
					<BlogCard
						key={blog.slug}
						blog={blog}
					/>
				))}
			</BlogCardsWrapper>
		</div>
	);
};

export default TopBlogs;
