const Container = (props) => {
	return (
		<div className='container flex min-h-screen flex-col overflow-y-auto overflow-x-hidden p-5'>
			{props.children}
		</div>
	);
};

export default Container;
