import { Blog, Routes } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
const BlogCardImage = ({ blog }: { blog: Blog }) => {
	const { image, slug, title } = blog;
	return (
		<Link
			href={`${Routes.BLOGS}/${slug}`}
			className="relative aspect-[4/3] md:aspect-[16/9] max-h-[200px] md:max-h-[300px] w-full overflow-hidden blog-card-media"
		>
			<Image
				src={image}
				alt={title}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				fill
				className="object-cover"
			/>
		</Link>
	);
};

export default BlogCardImage;
