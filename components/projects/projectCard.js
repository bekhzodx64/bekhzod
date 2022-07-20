import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import { fadeInUp, stagger } from '../../helpers/animations';
import ImagePlaceholder from '../layout/placeholder';

const ProjectCard = ({
	showDetail,
	setShowDetail,
	project: { id, name, image_path, deployed_url, github_url, key_techs },
}) => {
	const { t } = useTranslation();

	return (
		<div>
			<ImagePlaceholder
				image={image_path}
				name={name}
				clickHandler={() => setShowDetail(id)}
			/>
			<p className='mt-3 text-center'>{name}</p>

			{showDetail === id && (
				<div className='absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-slate-800 sm:p-0 md:bg-opacity-50 md:p-6 md:backdrop-blur-sm md:dark:bg-opacity-50 md:dark:backdrop-blur-sm'>
					<div className='relative grid w-full gap-x-12 rounded-lg bg-white p-2 text-black dark:bg-slate-700 dark:text-white sm:h-full sm:p-5 md:h-auto md:grid-cols-2 md:p-10 md:shadow'>
						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.div variants={fadeInUp}>
								<Image
									src={image_path}
									alt={name}
									className='rounded-lg object-cover'
									width='1280'
									height='720'
									layout='responsive'
								/>
							</motion.div>
						</motion.div>

						<motion.div
							variants={stagger}
							initial='initial'
							animate='animate'
							className='space-y-7'>
							<motion.h2
								variants={fadeInUp}
								className='mt-3 text-center text-3xl font-black md:text-3xl'>
								{name}
							</motion.h2>
							<motion.div
								variants={fadeInUp}
								className='flex flex-wrap items-center space-x-2 text-sm tracking-wider'>
								<span className='text-lg'>{t('projects:technology')}:</span>
								{key_techs.map((tech) => (
									<span
										key={tech}
										className='my-1 rounded-md bg-white px-3 py-1 shadow dark:bg-slate-800'>
										{tech}
									</span>
								))}
							</motion.div>
							<motion.div
								className='flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3'
								variants={fadeInUp}>
								<a
									href={github_url}
									target='_blank'
									className='mx-auto flex w-full max-w-[140px] items-center space-x-3 rounded-lg bg-slate-100 px-4 py-2 text-lg shadow transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 sm:mx-0 sm:w-auto sm:max-w-none'
									rel='noreferrer'>
									<AiFillGithub /> <span>Github</span>
								</a>
								<a
									href={deployed_url}
									target='_blank'
									rel='noreferrer'
									className='mx-auto flex w-full max-w-[140px] items-center space-x-3 rounded-lg bg-slate-100 px-4 py-2 text-lg shadow transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 sm:mx-0 sm:w-auto sm:max-w-none'>
									<CgWebsite /> <span>{t('projects:visit')}</span>
								</a>
							</motion.div>
						</motion.div>

						<button
							onClick={() => setShowDetail(null)}
							className='absolute top-3 right-3 rounded-full bg-slate-100 outline-none transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900'>
							<MdClose size={30} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
