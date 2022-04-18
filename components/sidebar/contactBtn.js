import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { IoMdContact } from 'react-icons/io';

const ContactBtn = () => {
	const { t } = useTranslation('sidebar');

	return (
		<motion.div
			className='select-none text-center print:hidden'
			whileTap={{ scale: 0.9 }}>
			<button
				className='my-2 mx-auto flex w-full max-w-[300px] items-center justify-center space-x-2 rounded-full bg-blue-500 px-8 py-3 text-white outline-none transition focus:ring-4 lg:max-w-[200px]'
				onClick={() => window.open('https://t.me/bekhzodx64')}>
				<IoMdContact className='h-5 w-5 text-white ' />
				<span>{t('contact')}</span>
			</button>
		</motion.div>
	);
};

export default ContactBtn;
