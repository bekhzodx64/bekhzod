import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { stagger, fadeInRight } from '../../helpers/animations';

import { MdOutlineLanguage } from 'react-icons/md';

const LangSwitcher = () => {
	const langRouter = useRouter();

	const [show, setShow] = useState(false);

	const showHandler = () => {
		setShow(!show);
	};

	return (
		<ul className='flex w-full select-none space-x-3'>
			<li
				className='relative flex h-10 w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
				onClick={showHandler}>
				{show ? (
					<>
						<motion.ul
							variants={stagger}
							initial='initial'
							animate='animate'
							className='absolute inset-0 flex cursor-default justify-between rounded-full bg-blue-500'>
							{langRouter.locales.map((locale) => (
								<motion.li
									variants={fadeInRight}
									key={locale}
									className='flex h-10 w-10 items-center justify-center'>
									<Link href={langRouter.asPath} locale={locale} scroll={false} replace>
										<a className='hover:border-400 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 text-xs font-semibold uppercase text-white transition hover:bg-white hover:text-black'>
											{locale}
										</a>
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</>
				) : (
					<div className='flex items-center space-x-1 uppercase text-white'>
						<MdOutlineLanguage className='h-5 w-5 text-white' />
						<span>{langRouter.locale}</span>
					</div>
				)}
			</li>
		</ul>
	);
};

export default LangSwitcher;
