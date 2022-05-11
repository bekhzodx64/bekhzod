import { ThemeProvider } from 'next-themes';
import Container from '../components/layout/container';
import Layout from '../components/layout/layout';
import Wrapper from '../components/layout/wrapper';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar/';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			<Container>
				<Wrapper>
					<Layout className='print:max-w-none lg:max-w-xs'>
						<Sidebar />
					</Layout>
					<Layout className='relative mb-[110px] lg:mb-0'>
						<Navbar />
						<Component {...pageProps} key={router.route} />
					</Layout>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
