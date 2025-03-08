const BlogTag = ({ tag }: { tag: string }) => {
	return (
		<span className="text-sm text-secondary bg-primary px-2 py-1 rounded-md">
			{tag}
		</span>
	);
};

export default BlogTag;
