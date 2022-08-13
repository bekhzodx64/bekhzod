import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html>
			<Head>
				<meta name='description' content='Фронтенд разработчик ищет работу' />
				<meta
					name='keywords'
					content='фулл стек разработчик, фронтенд разработчик, разработчик в узбекистане, фронтенд узбекистан, фрилансер в узбекистане'
				/>
			</Head>
			<body className='bg-gradient-to-tl from-green-500 via-purple-500 to-blue-500 dark:from-slate-900 dark:to-slate-900'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
