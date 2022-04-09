import { Fragment } from 'react';

import Avatar from './avatar';
import Name from './name';
import Badge from './badge';
import SocialInfo from './social';
import Address from './address';
import ContactBtn from './contactBtn';
import ThemeBtn from './themeBtn';

const Sidebar = () => {
	return (
		<Fragment>
			<div className='print:grid print:grid-cols-3'>
				<Avatar />
				<Name />
				<Badge />
				<SocialInfo />
				<Address />
				<ContactBtn />
				<ThemeBtn />
			</div>
		</Fragment>
	);
};

export default Sidebar;
