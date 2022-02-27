import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout';
import Container from '../components/layout/container';
import Wrapper from '../components/layout/wrapper';
import Sidebar from '../components/sidebar/';
import Navbar from '../components/navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	const { pathname } = useRouter();

	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			<Container>
				{pathname === '/admin' ? (
					<Wrapper>
						<Layout className='mx-auto max-w-lg'>
							<Component {...pageProps} key={router.route} />
						</Layout>
					</Wrapper>
				) : (
					<Wrapper>
						<Layout className='lg:max-w-xs'>
							<Sidebar />
						</Layout>
						<Layout className='relative'>
							<Navbar />
							<Component {...pageProps} key={router.route} />
						</Layout>
					</Wrapper>
				)}
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
