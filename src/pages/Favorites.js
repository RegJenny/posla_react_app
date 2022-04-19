import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal.js';



const Favorites = () =>{
	return(
		<>
			<Header/>
	<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

                <AccountSidebar/>
            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Favourites</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Favourites (9)
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <a href="/account/favourites/deals" class="nav-link active">
                                    <div class="text-center">
                                        Deals (10)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/favourites/projects" class="nav-link">
                                    <div class="text-center">
                                        Projects (3)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    

                        <div class="deal-list deal-list-mini mt-20 row">

                            
                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                <Deal/>
                            </div>


                        </div>
                        

                    </div>
                </div>


            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default Favorites;