import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';



const UserProject = () =>{
	return(
		<>
			<Header/>
				    <div class="container">
        <div class="row">
            <div class="col-md-4 col-lg-3">

                <AccountSidebar/>
                
            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/user/abcde12345">Abcde12345</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Projects</li>
                    </ol>
                </div>
                
                <div class="sticky" data-mdb-sticky-position="bottom">

                    <div class="section">
                        <div class="section-title">
                            Firstname's Projects (6)
                        </div>
                        <div>
                            <div class="project-list project-list-wide">
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                                <ProjectList/>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                       -- //for pagination --
                    </div>

                </div>

            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}

export default UserProject;