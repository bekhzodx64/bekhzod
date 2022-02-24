import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

const ContactBtn = () => {
	const { t } = useTranslation('sidebar');

	return (
		<motion.div className='select-none text-center' whileTap={{ scale: 0.95 }}>
			<button
				className='my-2 w-full max-w-[300px] rounded-full bg-blue-500 px-8 py-3 text-white outline-none transition focus:ring-4 lg:max-w-[200px] '
				onClick={() => window.open('https://t.me/bekhzodx64')}>
				{t('contact')}
			</button>
		</motion.div>
	);
};

export default ContactBtn;
