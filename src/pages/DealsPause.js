import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DealsPause = () =>{
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
                        <li class="breadcrumb-item"><a href="/account/deals">Deals</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Pause Deal</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title">
                        Pause Deal - #1234
                    </div>
                    <div>

                        <div>
                            Are you sure you want to pause this deal?
                        </div>

                        <div class="row mt-30">
                            <div class="col-sm-6 col-md-12 col-lg-5 col-xl-4">
                                <Deal/>
                            </div>

                            <div class="col-sm-6 col-md-12 col-lg-7 col-xl-8">
                                <div class="note d-inline-block">
                                    Please note:
                                </div>
                                <ul class="list-style mt-10">
                                    <li>
                                        This action cannot be undone.
                                    </li>
                                    <li class="mt-5">
                                        Paused deals will no longer be active and visible to users on this platform.
                                    </li>
                                    <li class="mt-5">
                                        To keep the deal active but private, please <a href="/account/deals/edit/1234/info" class="underline">edit the visibility</a> status of this deal.
                                    </li>
                                    <li class="mt-5">
                                        Orders already attached to this deal will not be affected.
                                    </li>
                                    <li class="mt-5">
                                        Current payments for "featured" ad deal, will be paused.
                                    </li>
                                    <li class="mt-5">
                                        All pending refunds on this deal will not be affected.
                                    </li>
                                    <li class="mt-5">
                                        Earnings acquired from this deal will not be affected.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-20 pt-20 bt-1-ddd">

                            <form action="/account/deals" class="floated-content">
                                <button type="submit" class="btn btn-blue btn-sm pull-right ml-10">
                                    Pause Deal
                                </button>
                                <a href="/account/deals" class="btn btn-transparent-black btn-sm pull-right">
                                    Cancel
                                </a>
                            </form>

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
export default DealsPause;