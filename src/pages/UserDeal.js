import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal';


const UserDeal = () =>{
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
                        <li class="breadcrumb-item active" aria-current="page">Deals</li>
                    </ol>
                </div>
                
                <div class="">

                    <div class="section">
                        <div class="section-title">
                            Firstname's Deals (6)
                        </div>
                        <div>
                            <div class="deal-list deal-list-mini row">
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <Deal/>
                                </div>
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
export default UserDeal;