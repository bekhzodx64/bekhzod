const Layout = (props) => {
	return (
		<div
			className={`${props.className} w-full overflow-hidden rounded-3xl bg-white px-6 py-6 ring-8 ring-white/50 dark:bg-slate-800 dark:ring-slate-700`}>
			{props.children}
		</div>
	);
};

export default Layout;
