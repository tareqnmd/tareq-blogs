import Image from 'next/image';

const BlogBanner = ({ image }: { image: string }) => {
	return (
		<div
			className="relative aspect-[4/3] md:aspect-[16/9] max-h-[200px] md:max-h-[300px] w-full overflow-hidden blog-card-media"
		>
			<Image
				src={image}
				alt="blog-banner"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				fill
				className="object-cover"
			/>
		</div>
	);
};

export default BlogBanner;
