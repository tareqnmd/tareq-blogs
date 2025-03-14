const BlogCardDescription = ({
	shortContent,
}: {
	shortContent: string;
}) => {
	return <p className="line-clamp-2 leading-5">{shortContent}</p>;
};

export default BlogCardDescription;
