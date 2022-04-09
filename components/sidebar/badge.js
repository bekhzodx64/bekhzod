import useTranslation from 'next-translate/useTranslation';

const Badge = () => {
	const { t } = useTranslation('sidebar');

	return (
		<div className='col-span-2 my-3 mx-auto w-full max-w-[350px] rounded-full bg-slate-200 px-2 py-2 text-center dark:bg-slate-700 print:my-0 print:px-0 print:py-0 print:text-right lg:max-w-none'>
			{t('profession')}
		</div>
	);
};

export default Badge;
