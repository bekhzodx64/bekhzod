import Image from 'next/image';
import avatar from '../../public/avatar.png';

const Avatar = () => {
	return (
		<div className='flex justify-center'>
			<Image
				src={avatar}
				alt='User Avatar'
				className='mx-auto rounded-full'
				width={128}
				height={128}
				layout='intrinsic'
				quality={100}
				priority
				placeholder='blur'
			/>
		</div>
	);
};

export default Avatar;
