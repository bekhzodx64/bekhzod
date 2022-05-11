import Link from 'next/link';

const NavItem = ({ activeItem, name, route, setActiveItem, icon }) => {
	return activeItem !== name ? (
		<Link href={route} scroll={false} replace>
			<a
				onClick={() => setActiveItem(name)}
				className='decoration-blue-500 lg:decoration-2 underline-offset-2 outline-none lg:hover:text-blue-500 lg:focus:underline flex flex-col items-center text-xs sm:text-lg'>
				{icon}
				{name}
			</a>
		</Link>
	) : (
		<div className='relative select-none'>
			<div className='before:hidden lg:before:block lg:before:absolute before:-top-2 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:animate-bounce before:rounded-full before:bg-blue-500 flex flex-col items-center text-xs sm:text-lg'>
				{icon}
				{name}
			</div>
		</div>
	);
};

export default NavItem;
