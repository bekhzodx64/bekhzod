import { motion } from 'framer-motion';

import { SiTarget } from 'react-icons/si';

const Bar = ({ name, level }) => {
	const bar_width = `${level}`;

	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: bar_width,
			transition: {
				duration: 1,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className='overflow-hidden rounded-full bg-slate-200 text-white dark:bg-slate-700'>
			<motion.div
				className='flex items-center space-x-1 rounded-full bg-gradient-to-l from-green-500 to-blue-500 px-2 py-1 font-semibold sm:space-x-2'
				style={{ width: bar_width }}
				variants={variants}
				initial='initial'
				animate='animate'>
				<div>
					<SiTarget className='sm:h-5 sm:w-5' />
				</div>
				<div className='text-base'>{name}</div>
			</motion.div>
		</div>
	);
};

export default Bar;
