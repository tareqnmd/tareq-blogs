const BlogDetailContent = ({ content }: { content: string }) => {
	return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default BlogDetailContent;
