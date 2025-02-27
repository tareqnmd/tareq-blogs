import { SOCIAL_MEDIA_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="border-t footer flex py-2 md:py-4 xl:py-6 items-center justify-between">
			<p className="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Tareq Blogs. All rights reserved.
			</p>
			<div className="flex items-center gap-2">
				<Link
					target="_blank"
					href={SOCIAL_MEDIA_LINKS.LINKEDIN}
				>
					<BsLinkedin />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
