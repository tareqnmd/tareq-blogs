const CategoriesLayout = ({
	children,
	categories,
}: {
	children: React.ReactNode;
	categories: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-4">
			{categories}
			{children}
		</div>
	);
};

export default CategoriesLayout;
