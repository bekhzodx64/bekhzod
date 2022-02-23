import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head></Head>
			<body className='bg-gradient-to-tl from-green-500 to-blue-500 dark:from-slate-900 dark:to-slate-900'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
