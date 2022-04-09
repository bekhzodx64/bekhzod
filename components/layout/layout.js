const Layout = (props) => {
	return (
		<div
			className={`${props.className} h-auto w-full overflow-hidden rounded-3xl bg-white px-6 py-6 ring-8 ring-white/50 dark:bg-slate-800 dark:ring-slate-700/60 lg:max-h-[630px]`}>
			{props.children}
		</div>
	);
};

export default Layout;
