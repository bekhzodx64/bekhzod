import { BsGithub, BsTelegram } from 'react-icons/bs';

const SocialInfo = () => {
	return (
		<div className='mx-auto my-5 flex w-full max-w-[230px] items-center justify-around text-blue-500 lg:max-w-none'>
			<a
				href='https://t.me/bekhzodx64'
				className='rounded-full outline-none focus:ring-4'
				target='_blank'
				aria-label='Telegram'
				rel='noreferrer'>
				<BsTelegram className='h-9 w-9' />
			</a>
			<a
				href='https://github.com/bekhzodx64'
				className='rounded-full outline-none focus:ring-4'
				target='_blank'
				aria-label='GitHub'
				rel='noreferrer'>
				<BsGithub className='h-9 w-9' />
			</a>
		</div>
	);
};

export default SocialInfo;
