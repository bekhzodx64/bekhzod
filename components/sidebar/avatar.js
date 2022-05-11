import Image from 'next/image';
import avatar from '../../public/avatar.png';

const Avatar = () => {
	return (
		<div className='justify-center print:hidden hidden lg:flex'>
			<Image
				src={avatar}
				alt='User Avatar'
				width={128}
				height={128}
				quality={100}
				priority
				placeholder='blur'
				className='mx-auto rounded-full'
			/>
		</div>
	);
};

export default Avatar;
