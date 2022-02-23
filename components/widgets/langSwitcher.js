import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { MdClose, MdOutlineLanguage } from 'react-icons/md';

const LangSwitcher = () => {
	const langRouter = useRouter();

	const [show, setShow] = useState(false);

	const showHandler = () => {
		setShow(!show);
	};

	return (
		<ul className='fixed right-5 top-8 flex select-none space-x-3'>
			<li
				className='relative flex h-10 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-md dark:bg-blue-500'
				onClick={showHandler}>
				{show ? (
					<>
						<MdClose className='h-7 w-7 text-red-500 dark:text-white' />

						<ul className='absolute top-14 space-y-2'>
							{langRouter.locales.map((locale) => (
								<li key={locale} className='flex h-10 w-10 items-center justify-center'>
									<Link href={langRouter.asPath} locale={locale} scroll={false} replace>
										<a className='flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-semibold uppercase transition hover:bg-opacity-80 dark:bg-blue-400'>
											{locale}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div className='flex items-center space-x-1 font-bold uppercase text-blue-500 dark:text-white'>
						<MdOutlineLanguage className='h-5 w-5 text-blue-500 dark:text-white' />
						<span>{langRouter.locale}</span>
					</div>
					// <FaLanguage className='w-7 h-7 text-blue-500' />
				)}
			</li>
		</ul>
	);
};

export default LangSwitcher;
