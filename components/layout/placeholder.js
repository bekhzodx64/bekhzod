import Image from 'next/image';

export default function ImagePlaceholder({ image, name, clickHandler }) {
	const newImageSrc = image.toString().replace(/[()]/g, '');
	const convertImage = (w, h) => `
	<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	  <defs>
	    <linearGradient id="g">
	      <stop stop-color="#91A3B0" offset="20%" />
	      <stop stop-color="#E2E8F0" offset="50%" />
	      <stop stop-color="#91A3B0" offset="70%" />
	    </linearGradient>
	  </defs>
	  <rect width="${w}" height="${h}" fill="#91A3B0" />
	  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
	  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
	</svg>`;

	const toBase64 = (str) =>
		typeof window === 'undefined'
			? Buffer.from(str).toString('base64')
			: window.btoa(str);

	return (
		<div className='rounded-lg overflow-hidden'>
			<Image
				src={newImageSrc}
				alt={name}
				layout='responsive'
				placeholder='blur'
				width='1280'
				height='720'
				blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(1280, 720))}`}
				onClick={clickHandler}
				className='cursor-pointer rounded-lg object-cover'
			/>
		</div>
	);
}
