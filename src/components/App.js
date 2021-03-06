import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Speakers from './Speakers';

export default function App() {
	return (
		<Layout startingTheme='light'>
			<Header />
			<Speakers />
		</Layout>
	);
}
