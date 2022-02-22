import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { MdSchool } from 'react-icons/md';
import { GoLinkExternal } from 'react-icons/go';
import { RiToolsFill } from 'react-icons/ri';
import { MdDashboardCustomize } from 'react-icons/md';

const Resume = () => {
	const { t } = useTranslation();

	return (
		<div className='flex h-[90%] flex-col gap-5'>
			<Head>
				<title>{t('resume:title')}</title>
			</Head>

			<div className='grid gap-10 md:grid-cols-2'>
				<div className='space-y-3'>
					<h5 className='text-center text-2xl font-bold md:text-left'>
						{t('resume:education')}
					</h5>
					<div className='space-y-2'>
						<h5 className='flex h-8 items-center space-x-1 text-xl font-bold'>
							<MdSchool />
							<span>{t('resume:university')}</span>
						</h5>
						<p className='font-semibold'>Разработка практических программных средств</p>
						<p>
							Учусь в магистратуре в Ташкентском Университете Информационных Технологий
							Имени Мухаммад Ал-Хоразмий.
						</p>
					</div>
				</div>

				<div className='space-y-3'>
					<h5 className='text-center text-2xl font-bold md:text-left'>
						{t('resume:experience')}
					</h5>
					<div className='space-y-2'>
						<h5 className='h-8 text-xl font-bold'>
							<a
								href='https://220volt.uz/'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center space-x-1 decoration-blue-500 underline-offset-2 outline-none transition hover:text-blue-500 focus:underline'>
								<GoLinkExternal />
								<span>220volt.uz</span>
							</a>
						</h5>
						<p className='font-semibold'>{t('resume:profession')}</p>
						<p>
							Устроился на работу Контент менеджером, поработал в этой должности 5 месяцев
							а потом на должности Веб разрботчика 9 месяцев. Но в конце пришлось
							уволиться из за нехватки времени на учебу.
						</p>
					</div>
				</div>
			</div>

			<div className='mt-auto grid gap-6 pb-6 md:grid-cols-2'>
				<div>
					<h5 className='mb-3 flex items-center space-x-1 text-[22px] font-bold xl:text-2xl'>
						<MdDashboardCustomize />
						<span>{t('resume:knowledge')}</span>
					</h5>
					<div className='pointer-events-none select-none space-y-2 print:flex print:items-center print:space-y-0'>
						{/* {languages.map((language) => (
							<Bar data={language} key={language.name} />
						))} */}
					</div>
				</div>

				<div>
					<h5 className='mb-3 flex items-center space-x-1 text-[22px] font-bold xl:text-2xl'>
						<RiToolsFill />
						<span>{t('resume:programs')}</span>
					</h5>
					<div className='pointer-events-none select-none space-y-2 print:flex print:items-center print:space-y-0'>
						{/* {tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
