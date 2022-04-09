const Wrapper = (props) => {
	return (
		<div className='my-auto flex flex-col gap-7 print:my-0 print:gap-0 lg:flex-row'>
			{props.children}
		</div>
	);
};

export default Wrapper;
