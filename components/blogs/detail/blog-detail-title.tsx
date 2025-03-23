const BlogDetailTitle = ({ title }: { title: string }) => {
	return (
		<h3 className="md:text-2xl leading-none xs:text-xl text-lg font-semibold max-w-max">
			{title}
		</h3>
	);
};

export default BlogDetailTitle;
