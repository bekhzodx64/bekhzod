import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { knowledges, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../helpers/animations';

import Bar from '../components/resume/bar';

import { MdSchool } from 'react-icons/md';
import { GoLinkExternal } from 'react-icons/go';
import { RiToolsFill } from 'react-icons/ri';
import { MdDashboardCustomize } from 'react-icons/md';

const Resume = () => {
	const { t } = useTranslation();

	return (
		<motion.div
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			className='flex h-[90%] flex-col gap-5'>
			<Head>
				<title>{t('resume:title')}</title>
			</Head>

			<div className='grid gap-10 md:grid-cols-2'>
				<motion.div
					variants={fadeInUp}
					initial='initial'
					animate='animate'
					className='space-y-3'>
					<h5 className='text-center text-2xl font-bold md:text-left'>
						{t('resume:education')}
					</h5>
					<div className='space-y-2'>
						<h5 className='flex h-8 items-center space-x-1 text-xl font-bold'>
							<MdSchool />
							<span>{t('resume:university')}</span>
						</h5>
						<p className='font-semibold'>Разработка практических программных средств</p>
						<p>{t('resume:eduDescription')}</p>
					</div>
				</motion.div>

				<motion.div
					variants={fadeInUp}
					initial='initial'
					animate='animate'
					className='space-y-3'>
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
						<p>{t('resume:expDescription')}</p>
					</div>
				</motion.div>
			</div>

			<div className='my-auto grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='mb-3 flex items-center justify-center space-x-1 text-[22px] font-bold md:justify-start xl:text-2xl'>
						<MdDashboardCustomize />
						<span>{t('resume:knowledge')}</span>
					</h5>
					<div className='space-y-2'>
						{knowledges.map((knowledge) => (
							<Bar name={knowledge.name} level={knowledge.level} key={knowledge.name} />
						))}
					</div>
				</div>

				<div>
					<h5 className='mb-3 flex items-center justify-center space-x-1 text-[22px] font-bold md:justify-start xl:text-2xl'>
						<RiToolsFill />
						<span>{t('resume:programs')}</span>
					</h5>
					<div className='space-y-2'>
						{tools.map((tool) => (
							<Bar name={tool.name} level={tool.level} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;
