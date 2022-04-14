import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectName from '../components/ProjectName';
import {Link} from 'react-router-dom';
import ModalDialog from '../components/ModalDialog';
import Container from '../components/Container';

const HomePage = () => {
	return(
<>
	<Header/>
		<ModalDialog/>
		<Container/>
	<Footer/>
</>
		)
}

export default HomePage;