import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'next-themes';

const ThemeBtn = () => {
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation('sidebar');

	// theme changer function
	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className='select-none text-center'>
			<button
				className='my-2 w-full max-w-[300px] rounded-full bg-blue-500 px-8 py-3 text-white outline-none transition focus:ring-4 lg:max-w-[200px]'
				onClick={changeTheme}>
				{t('theme')}
			</button>
		</div>
	);
};

export default ThemeBtn;
