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
			<Avatar />
			<Name />
			<Badge />
			<SocialInfo />
			<Address />
			<ContactBtn />
			<ThemeBtn />
		</Fragment>
	);
};

export default Sidebar;
