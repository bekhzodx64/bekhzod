import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import ProjectCard from '../components/projects/projectCard'
import { projects as projectsData } from '../data'
import { fadeInUp, routeAnimation, stagger } from '../helpers/animations'

const Projects = () => {
	const [showDetail, setShowDetail] = useState(null)

	const { t } = useTranslation()

	return (
		<Fragment>
			<Head>
				<title>{t('projects:title')}</title>
			</Head>
			<motion.div
				className='overflow-y-auto'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<motion.div
					className='grid h-[530px] gap-5 pr-3 sm:grid-cols-2 xl:grid-cols-3'
					variants={stagger}
					initial='initial'
					animate='animate'
				>
					{projectsData.map((project) => (
						<motion.div
							className='rounded-lg bg-slate-200 p-2 dark:bg-slate-700'
							variants={fadeInUp}
							key={project.id}
						>
							<ProjectCard
								project={project}
								showDetail={showDetail}
								setShowDetail={setShowDetail}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</Fragment>
	)
}

export default Projects
