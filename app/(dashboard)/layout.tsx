const DashboardLayout = ({
	children,
	recentBlogs,
	categories,
	topBlogs,
}: {
	children: React.ReactNode;
	recentBlogs: React.ReactNode;
	categories: React.ReactNode;
	topBlogs: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-12">
			{children}
			{recentBlogs}
			{categories}
			{topBlogs}
		</div>
	);
};

export default DashboardLayout;
