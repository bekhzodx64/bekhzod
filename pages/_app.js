import { ThemeProvider } from 'next-themes';
// import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/layout';
import Container from '../components/layout/container';
import Wrapper from '../components/layout/wrapper';
import Sidebar from '../components/sidebar/';
import Navbar from '../components/navbar';

import '../styles/globals.css';
import LangSwitcher from '../components/widgets/langSwitcher';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			<LangSwitcher />
			<Container>
				<Wrapper>
					<Layout className='lg:max-w-xs'>
						<Sidebar />
					</Layout>
					<Layout>
						<Navbar />
						<Component {...pageProps} key={router.route} />
					</Layout>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
