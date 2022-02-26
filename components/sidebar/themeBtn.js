import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import LangSwitcher from '../widgets/langSwitcher';

import { AiOutlineReload } from 'react-icons/ai';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation();

	const sound = () => {
		const sound = document.getElementById('sound');
		sound.play();
	};

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		sound();
	};

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<div className='mx-auto w-full max-w-[200px] select-none'>
				<button className='my-2 flex items-center justify-center rounded-full bg-blue-500 px-3 py-3 text-white outline-none focus:ring-4'>
					<AiOutlineReload className='animate-spin' />
				</button>
			</div>
		);

	return (
		<div className='mx-auto flex w-full max-w-[300px] select-none items-center space-x-3 lg:max-w-[200px]'>
			<motion.button
				whileTap={{ scale: 0.9 }}
				className='my-2 flex items-center justify-center rounded-full bg-blue-500 px-3 py-3 text-white outline-none focus:ring-4'
				onClick={changeTheme}>
				{theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
				<audio id='sound' src='/sounds/btn.mp3'></audio>
			</motion.button>

			<LangSwitcher />
		</div>
	);
};

export default ThemeBtn;
