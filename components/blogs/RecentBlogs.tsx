import BlogCard from './card/BlogCard';

const RecentBlogs = () => {
	return (
		<div>
			<h2>Recent Blogs</h2>
			<BlogCard
				title="UX review presentations"
				description="How do you create compelling presentations that wow your colleagues and impress your managers?"
				date="Sunday, 1 Jan 2023"
				categories={['Design', 'Research', 'Presentation']}
				image="/images/blog.jpg"
				slug="ux-review-presentations"
			/>
		</div>
	);
};

export default RecentBlogs;
