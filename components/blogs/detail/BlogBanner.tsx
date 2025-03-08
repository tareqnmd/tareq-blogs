import Image from 'next/image';

const BlogBanner = ({ image }: { image: string }) => {
	return (
		<Image
			src={image}
			alt="blog-banner"
			width={1000}
			height={1000}
			className="w-full h-full object-cover"
		/>
	);
};

export default BlogBanner;
