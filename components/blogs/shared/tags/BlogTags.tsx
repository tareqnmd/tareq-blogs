import BlogTag from './BlogTag';

const BlogTags = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex flex-wrap gap-2">
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
