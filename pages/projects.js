import { Fragment } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Projects = () => {
	const { t } = useTranslation();

	return (
		<Fragment>
			<Head>
				<title>{t('projects:title')}</title>
			</Head>
			{/* <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} /> */}
			<div
				className='mb-6 h-96 overflow-y-auto pr-5 md:h-[360px] lg:mb-0 lg:h-[445px]'
				// variants={routeAnimation}
				// initial='initial'
				// animate='animate'
				// exit='exit'
			>
				<div
					className='relative mt-1 grid gap-5 sm:grid-cols-2 md:grid-cols-3'
					// variants={stagger}
					// initial='initial'
					// animate='animate'
				>
					{/* {projects.map((project) => (
						<motion.div
							className='dark:bg-dark-200 rounded-lg bg-gray-200 p-2'
							variants={fadeInUp}
							key={project.name}>
							<ProjectCard
								project={project}
								showDetail={showDetail}
								setShowDetail={setShowDetail}
							/>
						</motion.div>
					))} */}
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
