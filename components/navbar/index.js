import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import NavItem from './navItem'

const Navbar = () => {
	let { t } = useTranslation('navbar')

	const [activeItem, setActiveItem] = useState(null)

	const { pathname } = useRouter()

	const about = t('about')
	const projects = t('projects')
	const resume = t('resume')

	useEffect(() => {
		if (pathname === '/') setActiveItem(about)
		if (pathname === '/projects') setActiveItem(projects)
		if (pathname === '/resume') setActiveItem(resume)
	}, [about, projects, resume, pathname])

	return (
		<div className='mb-4 flex items-center justify-between print:hidden'>
			<span className='border-b-4 border-blue-500 text-2xl font-bold text-blue-500'>
				{activeItem}
			</span>
			<div
				className='
			text-base 
			font-semibold 
			rounded-2xl 
			bg-white
			dark:bg-slate-800
			px-5
			py-5 
			mx-auto 
			fixed 
			left-5
			right-5
			bottom-3
			lg:mx-0
			sm:text-lg 
			lg:static 
			lg:space-x-5 
			lg:px-0 
			lg:py-0 
			lg:rounded-none
			lg:max-w-none
			lg:w-auto
			lg:bg-transparent 
			z-20 
			flex 
			sm:max-w-md
			sm:w-full
			shadow-md
			lg:shadow-none
			divide-x
			lg:divide-none
			print:hidden
			'
			>
				<div className='flex flex-col justify-center items-center grow'>
					<NavItem
						route='/'
						name={about}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						icon={<AiFillHome className='lg:hidden w-8 h-8 text-[#3B82F6]' />}
					/>
				</div>
				<div className='flex flex-col justify-center items-center grow'>
					<NavItem
						route='/projects'
						name={projects}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						icon={
							<BsFillBriefcaseFill className='lg:hidden w-8 h-8 text-[#3B82F6]' />
						}
					/>
				</div>
				<div className='flex flex-col justify-center items-center grow'>
					<NavItem
						route='/resume'
						name={resume}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						icon={<FaUserAlt className='lg:hidden w-8 h-8 text-[#3B82F6]' />}
					/>
				</div>
			</div>
		</div>
	)
}

export default Navbar
