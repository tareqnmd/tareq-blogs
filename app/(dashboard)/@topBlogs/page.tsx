import { TopBlogs } from '@/components/blogs/top';
import { topBlogs } from '@/lib/fake-data/response';

const TopBlogsPage = () => {
	return <TopBlogs blogs={topBlogs} />;
};

export default TopBlogsPage;
