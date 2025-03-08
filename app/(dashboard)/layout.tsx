const DashboardLayout = ({
	children,
	recentBlogs,
	topBlogs,
}: {
	children: React.ReactNode;
	recentBlogs: React.ReactNode;
	topBlogs: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-12">
			{children}
			{recentBlogs}
			{topBlogs}
		</div>
	);
};

export default DashboardLayout;
