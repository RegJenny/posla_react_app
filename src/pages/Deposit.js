import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';


const Deposit = () =>{
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
			                        <li class="breadcrumb-item"><a href="/account/wallet">Wallet</a></li>
			                        <li class="breadcrumb-item active" aria-current="page">New Deposit</li>
			                    </ol>
			                </div>

			                <div class="section">
			                    <div class="section-title section-title-sm">
			                        New Deposit
			                    </div>
			                    <div>

			                        
			                        
			                    </div>

			                </div>


			            </div>
			        </div>
			    </div>
			<Footer/>
		</>
		)
}
export default Deposit;