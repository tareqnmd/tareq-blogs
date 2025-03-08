import { Blog, formatDate } from '@/utils';

const BlogTimeInfo = ({ blog }: { blog: Blog }) => {
	const { date, readingTime, views } = blog;
	return (
		<div className="flex flex-wrap items-center gap-1 md:gap-2 md:text-sm text-xs">
			<time>{formatDate(date)}</time>
			<div className="h-3 md:h-4 w-[1px] bg-gray-400" />
			<span>{readingTime} min read</span>
			<div className="h-3 md:h-4 w-[1px] bg-gray-400" />
			<span>{views} views</span>
		</div>
	);
};

export default BlogTimeInfo;
