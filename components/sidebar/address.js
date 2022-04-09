import useTranslation from 'next-translate/useTranslation';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';

const Address = () => {
	const { t } = useTranslation('sidebar');

	return (
		<div className='col-span-3 my-5 -mx-6 space-y-3 bg-slate-200 py-4 dark:bg-slate-700 print:my-0 print:grid print:grid-cols-3 print:space-y-0'>
			<div className='flex items-center justify-center space-x-2'>
				<GoLocation />
				<span>{t('address')}</span>
			</div>
			<div className='flex items-center justify-center space-x-2'>
				<GoMail />
				<a
					href='mailto:mr.bekzod2018@gmail.com'
					className='decoration-blue-500 decoration-2 underline-offset-2 outline-none focus:underline'>
					mr.bekzod2018@gmail.com
				</a>
			</div>
			<div className='flex items-center justify-center space-x-2'>
				<BsTelephone />
				<a
					href='tel:+998971574739'
					className='decoration-blue-500 decoration-2 underline-offset-2 outline-none focus:underline'>
					+998 (97) 157 47 39
				</a>
			</div>
		</div>
	);
};

export default Address;
