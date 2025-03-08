import { Blog } from '@/utils';
import { BlogDate, BlogReadTime, BlogViews } from '.';

const BlogHeaderInfo = ({ blog }: { blog: Blog }) => {
	const { date, readingTime, views } = blog;
	return (
		<div className="flex flex-wrap items-center gap-1 md:gap-2 md:text-sm text-xs">
			<BlogDate date={date} />
			<div className="h-3 md:h-4 w-[1px] bg-gray-400" />
			<BlogReadTime readTime={readingTime} />
			<div className="h-3 md:h-4 w-[1px] bg-gray-400" />
			<BlogViews views={views} />
		</div>
	);
};

export default BlogHeaderInfo;
