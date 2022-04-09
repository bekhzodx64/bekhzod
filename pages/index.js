import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiElectron } from 'react-icons/si';
import ServiceCard from '../components/main/serviceCard';
import { routeAnimation, stagger } from '../helpers/animations';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<motion.div
			className='flex h-full flex-col justify-between gap-y-5 print:gap-y-0'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<Head>
				<title>{t('main:title')}</title>
			</Head>
			<div>
				<h2>
					Здравствуйте ! Занимаюсь веб разработкой больше 2-х лет. Создаю веб сайты с
					учетом кроссбраузерности, адаптивности и отзывчивости. Для быстрых решений со
					стилем сайта использую фреймворк Tailwindcss ( который лучше чем bootstrap ).
					Перейдите во вкладку Проекты что бы посмотреть мои проделанные работы.
				</h2>
			</div>
			<div className='-mx-6 space-y-10 p-6 md:h-full lg:bg-slate-200 lg:dark:bg-slate-700 2xl:space-y-12'>
				<h2 className='text-2xl font-bold tracking-wide'>{t('main:question')}</h2>
				<div className='overflow-y-auto pt-6 print:overflow-visible print:pt-0 xl:overflow-y-visible xl:pt-0'>
					<motion.div
						className='relative grid h-[325px] gap-x-10 gap-y-14 pr-3 print:h-auto print:grid-cols-2 print:gap-y-0 print:pr-0 sm:grid-cols-2 lg:h-[270px] xl:h-full xl:grid-cols-3 landscape:print:grid-cols-3'
						variants={stagger}
						initial='initial'
						animate='animate'>
						<ServiceCard
							title={t('main:service1')}
							description={t('main:serviceDescription1')}
							icon={<AiOutlineHtml5 className='h-9 w-9' />}
						/>
						<ServiceCard
							title='Front-End'
							description={t('main:serviceDescription2')}
							icon={<FaReact className='h-9 w-9' />}
						/>
						<ServiceCard
							title='Back-End'
							description={t('main:serviceDescription3')}
							icon={<FaNodeJs className='h-9 w-9' />}
						/>
						<ServiceCard
							title='Full-Stack'
							description={t('main:serviceDescription4')}
							icon={<SiMongodb className='h-9 w-9' />}
						/>
						<ServiceCard
							title='ReactNative'
							description={t('main:serviceDescription5')}
							icon={<FaReact className='h-9 w-9' />}
						/>
						<ServiceCard
							title='Electron JS'
							description={t('main:serviceDescription5')}
							icon={<SiElectron className='h-9 w-9' />}
						/>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
