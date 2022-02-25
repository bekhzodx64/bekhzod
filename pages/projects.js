import { Fragment } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { projects } from '../data';

import { motion } from 'framer-motion';
import { routeAnimation, stagger, fadeInUp } from '../helpers/animations';

import ProjectCard from '../components/projects/projectCard';

const Projects = () => {
	const { t } = useTranslation();

	return (
		<Fragment>
			<Head>
				<title>{t('projects:title')}</title>
			</Head>
			{/* <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} /> */}
			<motion.div
				className='overflow-y-auto'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'>
				<motion.div
					className='relative grid h-[530px] gap-5 pr-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{projects.map((project) => (
						<motion.div className='rounded-lg' variants={fadeInUp} key={project.name}>
							<ProjectCard
								project={project}
								// showDetail={showDetail}
								// setShowDetail={setShowDetail}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</Fragment>
	);
};

export default Projects;
