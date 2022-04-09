import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout';
import Container from '../components/layout/container';
import Wrapper from '../components/layout/wrapper';
import Sidebar from '../components/sidebar/';
import Navbar from '../components/navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			<Container>
				<Wrapper>
					<Layout className='print:max-w-none lg:max-w-xs'>
						<Sidebar />
					</Layout>
					<Layout className='relative'>
						<Navbar />
						<Component {...pageProps} key={router.route} />
					</Layout>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
