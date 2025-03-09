import { SOCIAL_MEDIA_LINKS } from '@/utils/constants';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

const Footer = () => {
	return (
		<footer className="border-t border-t-primary/40 footer flex flex-wrap justify-between py-2 gap-1 md:py-4 xl:py-6">
			<p className="text-sm">
				&copy; {new Date().getFullYear()} Tareq Blogs. All rights reserved.
			</p>
			<div className="flex items-center gap-2">
				<Link
					target="_blank"
					href={SOCIAL_MEDIA_LINKS.LINKEDIN}
				>
					<BsLinkedin />
				</Link>
				<Link
					target="_blank"
					href={SOCIAL_MEDIA_LINKS.PORTFOLIO}
				>
					<TbWorldWww />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
