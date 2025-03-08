import { formatDate } from '@/utils';

const BlogDate = ({ date }: { date: string }) => {
	return <time>{formatDate(date)}</time>;
};

export default BlogDate;
