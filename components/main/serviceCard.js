import { motion } from 'framer-motion';
import { fadeInUp } from '../../helpers/animations';

const ServiceCard = ({ icon, title, description }) => {
	return (
		<motion.div
			variants={fadeInUp}
			className='rounded-2xl bg-slate-100 shadow dark:bg-slate-700 print:shadow-none lg:bg-white lg:dark:bg-slate-800'>
			<div className='relative flex h-[135px] space-y-3 px-3 py-5 lg:px-5 lg:py-2'>
				<div className='absolute -top-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-blue-500 dark:bg-slate-700 print:hidden lg:bg-white lg:dark:bg-slate-800'>
					{icon}
				</div>
				<div className='flex-1 space-y-2 overflow-hidden'>
					<h3 className='z-10 text-xl font-black text-blue-500 print:text-black'>
						{title}
					</h3>
					<p>{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ServiceCard;
