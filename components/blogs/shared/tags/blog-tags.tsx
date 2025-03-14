import BlogTag from './blog-tag';

const BlogTags = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex flex-wrap gap-1 xs:gap-2">
			{tags.map((tag) => (
				<BlogTag
					key={tag}
					tag={tag}
				/>
			))}
		</div>
	);
};

export default BlogTags;
