import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

interface BlogCardProps {
	title: string;
	description: string;
	date: string;
	image: string;
	categories: string[];
	slug: string;
}

const BlogCard = ({
	title,
	description,
	date,
	image,
	categories,
	slug,
}: BlogCardProps) => {
	return (
		<Link
			href={`/blog/${slug}`}
			className="overflow-hidden transition-all duration-300"
		>
			<div className="relative aspect-[16/9] overflow-hidden blog-card-media">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover opacity-90 transition-opacity duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="blog-card-content">
				<time className="text-sm text-gray-400 mb-4 block">{date}</time>
				<div className="flex justify-between items-start gap-4 mb-4">
					<h3 className="text-2xl font-semibold text-white group-hover:text-white/90 transition-colors duration-200">
						{title}
					</h3>
					<BsArrowUpRight className="text-white/70 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</div>
				<p className="text-gray-400 mb-6 line-clamp-2">{description}</p>
				<div className="flex flex-wrap gap-2">
					{categories.map((category) => (
						<span
							key={category}
							className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/90 hover:bg-white/20 transition-colors duration-200"
						>
							{category}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
