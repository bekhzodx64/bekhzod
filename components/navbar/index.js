import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import NavItem from './navItem';

const Navbar = () => {
	let { t } = useTranslation('navbar');

	const [activeItem, setActiveItem] = useState(null);

	const { pathname } = useRouter();

	const about = t('about');
	const projects = t('projects');
	const resume = t('resume');

	useEffect(() => {
		if (pathname === '/') setActiveItem(about);
		if (pathname === '/projects') setActiveItem(projects);
		if (pathname === '/resume') setActiveItem(resume);
	}, [about, projects, resume, pathname]);

	return (
		<div className='mb-4 flex items-center justify-between print:hidden'>
			<span className='hidden border-b-4 border-blue-500 text-2xl font-bold text-blue-500 sm:block'>
				{activeItem}
			</span>
			<div className='mx-auto flex space-x-5 text-base font-semibold sm:mx-0 sm:text-lg'>
				<NavItem
					route='/'
					name={about}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					route='/projects'
					name={projects}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					route='/resume'
					name={resume}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			</div>
		</div>
	);
};

export default Navbar;
