import Link from 'next/link';

const NavItem = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<Link href={route} scroll={false} replace>
			<a
				onClick={() => setActiveItem(name)}
				className='decoration-blue-500 decoration-2 underline-offset-2 outline-none hover:text-blue-500 focus:underline'>
				{name}
			</a>
		</Link>
	) : (
		<div className='relative select-none'>
			<div className='before:absolute before:-top-2 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:animate-pulse before:rounded-full before:bg-blue-500'>
				{name}
			</div>
		</div>
	);
};

export default NavItem;
