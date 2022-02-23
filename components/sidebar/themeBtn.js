import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'next-themes';

import { AiOutlineReload } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation();

	const day = () => {
		const day = document.getElementById('day');
		day.play();
	};

	const night = () => {
		const night = document.getElementById('night');
		night.play();
	};

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		if (theme === 'dark') {
			day();
		} else {
			night();
		}
	};

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<button className='my-2 mx-auto flex w-full max-w-[300px] items-center justify-center space-x-2 rounded-full bg-blue-500 px-8 py-3 text-white outline-none transition focus:ring-4 lg:max-w-[200px]'>
				<AiOutlineReload className='animate-spin' />
				{theme === 'dark' ? (
					<span>{t('sidebar:day')}</span>
				) : (
					<span>{t('sidebar:night')}</span>
				)}
			</button>
		);

	return (
		<div className='select-none text-center'>
			<button
				className='my-2 mx-auto flex w-full max-w-[300px] items-center justify-center space-x-2 rounded-full bg-blue-500 px-8 py-3 text-white outline-none transition focus:ring-4 lg:max-w-[200px]'
				onClick={changeTheme}>
				{theme === 'dark' ? (
					<>
						<BsSun />
						<span>{t('sidebar:day')}</span>
					</>
				) : (
					<>
						<BsMoon />
						<span>{t('sidebar:night')}</span>
					</>
				)}
			</button>
			<audio id='day' src='/sounds/day.mp3'></audio>
			<audio id='night' src='/sounds/night.mp3'></audio>
		</div>
	);
};

export default ThemeBtn;
