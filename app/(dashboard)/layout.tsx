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
		<>
			{children}
			{recentBlogs}
			{topBlogs}
		</>
	);
};

export default DashboardLayout;
