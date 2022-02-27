import Head from 'next/head';
import { motion } from 'framer-motion';
import { routeAnimation, stagger } from '../helpers/animations';
import useTranslation from 'next-translate/useTranslation';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaNodeJs } from 'react-icons/fa';

import ServiceCard from '../components/main/serviceCard';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<motion.div
			className='flex h-full flex-col justify-between gap-y-5'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<Head>
				<title>{t('main:title')}</title>
			</Head>
			<div className=''>
				<h2>
					Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные
					тексты. Букв взобравшись обеспечивает подпоясал, необходимыми, его точках имени
					маленькая большого пор продолжил если лучше, буквоград семантика взгляд собрал
					агентство рыбного!
				</h2>
			</div>
			<div className='-mx-6 space-y-10 p-6 md:h-full lg:bg-slate-200 lg:dark:bg-slate-700 2xl:space-y-12'>
				<h2 className='text-2xl font-bold tracking-wide'>Что я предлагаю</h2>
				<motion.div
					className=' relative grid gap-x-10 gap-y-14 sm:grid-cols-2 xl:grid-cols-3'
					variants={stagger}
					initial='initial'
					animate='animate'>
					<ServiceCard
						title='Верстка'
						description='Верстка страниц за короткие сроки используя HTML, CSS и JavaScript.'
						icon={<AiOutlineHtml5 className='h-9 w-9' />}
					/>
					<ServiceCard
						title='Front-End'
						description='Создание веб приложении с красивым интерфейсом используя React.js и Next.js.'
						icon={<FaReact className='h-9 w-9' />}
					/>
					<ServiceCard
						title='Back-End'
						description='В процессе Node.js и MongoDB.'
						icon={<FaNodeJs className='h-9 w-9' />}
					/>
					<ServiceCard
						title='ReactNative'
						description='Скоро...'
						icon={<FaReact className='h-9 w-9' />}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default HomePage;
