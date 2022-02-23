export const NavItem = ({ value, handlerFilterCategory, active }) => {
	let className =
		'cursor-pointer hover:text-green capitalize bg-slate-100 dark:bg-dark-200 py-1 px-4 rounded-lg select-none';

	if (active === value) className += ' text-green';

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	);
};

const ProjectsNavbar = (props) => {
	return (
		<ul className='mb-5 flex list-none space-x-3 overflow-x-auto'>
			<NavItem value='Все' {...props} />
			<NavItem value='html' {...props} />
			<NavItem value='react' {...props} />
			<NavItem value='node' {...props} />
		</ul>
	);
};

export default ProjectsNavbar;
