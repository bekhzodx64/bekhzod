import { useRouter } from 'next/router';
import Link from 'next/link';

const LangSwitcher = () => {
	let langRouter = useRouter();

	return (
		<ul className='fixed right-5 top-5 flex select-none space-x-3'>
			{langRouter.locales.map((locale) => (
				<li key={locale}>
					<Link href={langRouter.asPath} locale={locale} scroll={false}>
						<a className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black uppercase text-black transition hover:bg-slate-200'>
							{locale}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default LangSwitcher;
