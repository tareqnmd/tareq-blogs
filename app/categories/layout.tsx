const CategoriesLayout = ({
	children,
	categories,
}: {
	children: React.ReactNode;
	categories: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-4">
			{children}
			{categories}
		</div>
	);
};

export default CategoriesLayout;
