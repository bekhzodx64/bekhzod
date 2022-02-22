import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const Custom404 = () => {
	const router = useRouter();
	let { t } = useTranslation('error');

	return (
		<div className='flex h-[91%] flex-col items-center justify-center space-y-3'>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
			<p className='text-xl'>{t('description', { path: router.asPath })}</p>
		</div>
	);
};

export default Custom404;
