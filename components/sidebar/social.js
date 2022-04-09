import { motion } from 'framer-motion';
import { BsGithub, BsTelegram } from 'react-icons/bs';
import { AiFillFilePdf } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';

const SocialInfo = () => {
	const { t } = useTranslation();

	return (
		<div className='mx-auto my-5 flex w-full max-w-[350px] items-center justify-between space-x-2 text-blue-500 print:hidden lg:max-w-none'>
			<motion.a
				whileTap={{ scale: 0.9 }}
				href='https://t.me/bekhzodx64'
				className='rounded-full outline-none focus:ring-4'
				target='_blank'
				aria-label='Telegram'
				rel='noreferrer'>
				<BsTelegram className='h-9 w-9' />
			</motion.a>

			<motion.a
				className='flex w-full cursor-pointer items-center justify-center rounded-full bg-blue-500 py-2 text-white outline-none focus:ring-4'
				href='/bekhzod.pdf'
				download
				whileTap={{ scale: 0.9 }}
				aria-label='Resume'
				rel='noreferrer'>
				<AiFillFilePdf className='mr-2 h-6 w-6 text-white' />
				{t('sidebar:download')}
			</motion.a>

			<motion.a
				whileTap={{ scale: 0.9 }}
				href='https://github.com/bekhzodx64'
				className='rounded-full outline-none focus:ring-4'
				target='_blank'
				aria-label='GitHub'
				rel='noreferrer'>
				<BsGithub className='h-9 w-9' />
			</motion.a>
		</div>
	);
};

export default SocialInfo;
