import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ project: { id, name, image_path, deployed_url, github_url } }) => {
	return (
		<div className='rounded-lg bg-slate-200 p-2'>
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer rounded-lg object-cover'
				// onClick={() => setShowDetail(id)}
				width='300'
				height='180'
				layout='responsive'
			/>
			<p className='mt-3 text-center'>{name}</p>

			{/* {showDetail === id && (
				<div className='dark:bg-dark-200 fixed right-0 top-0 left-0 bottom-0 z-10 flex items-center justify-center bg-white sm:p-0 md:bg-opacity-50 md:p-6 md:backdrop-blur-sm md:dark:bg-opacity-50 md:dark:backdrop-blur-sm'>
					<div className='dark:bg-dark-100 relative grid w-full gap-x-12 rounded-lg bg-white p-2 text-black dark:text-white sm:h-full sm:p-5 md:h-auto md:grid-cols-2 md:p-10 md:shadow'>
						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.div variants={fadeInUp} className='aspect-h-9 aspect-w-16'>
								<Image
									src={image_path}
									alt={name}
									className='pointer-events-none select-none rounded-lg object-cover'
									width='250'
									height='120'
									layout='responsive'
								/>
							</motion.div>
							<motion.div
								className='my-4 flex justify-center space-x-3'
								variants={fadeInUp}>
								<a
									href={github_url}
									target='_blank'
									className='dark:bg-dark-200 flex select-none items-center space-x-3 rounded-lg bg-slate-100 px-4 py-2 text-lg shadow'
									rel='noreferrer'>
									<AiFillGithub /> <span>Github</span>
								</a>
								<a
									href={deployed_url}
									target='_blank'
									rel='noreferrer'
									className='dark:bg-dark-200 flex select-none items-center space-x-3 rounded-lg bg-slate-100 px-4 py-2 text-lg shadow'>
									<CgWebsite /> <span>Посетить</span>
								</a>
							</motion.div>
						</motion.div>

						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.h2
								variants={fadeInUp}
								className='mb-3 text-xl font-semibold md:text-2xl'>
								{name}
							</motion.h2>
							<motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
								{description}
							</motion.h3>
							<motion.div
								variants={fadeInUp}
								className='mt-5 flex flex-wrap space-x-2 text-sm tracking-wider'>
								{key_techs.map((tech) => (
									<span
										key={tech}
										className='dark:bg-dark-200 my-1 select-none rounded-md bg-white px-3 py-1 shadow'>
										{tech}
									</span>
								))}
							</motion.div>
						</motion.div>

						<button
							onClick={() => setShowDetail(null)}
							className='dark:bg-dark-200 absolute top-3 right-3 rounded-full bg-gray-200 outline-none'>
							<MdClose size={30} />
						</button>
					</div>
				</div>
			)} */}
		</div>
	);
};

export default ProjectCard;
