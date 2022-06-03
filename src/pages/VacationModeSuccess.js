import React from 'react';
import AccountSidebar from '../components/AccountSidebar';

const VacationModeSuccess = () =>{
	return(
		<>
			<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

                <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item"><a href="/account/settings">Settings</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Vacation Mode</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Vacation Mode
                    </div>
                    <div>

                        <div class="page-alert page-alert-success">
                            <span class="fa fa-check-circle"></span>
                            <div class="pt-15">
                                Vacation Mode Activated
                            </div>
                            <div>
                                Your account is now on vacation mode. You can turn this off whenever you deem fit.
                                Thank you.
                            </div>
                            <div class="mt-10">
                                <div class="mw-300 mx-auto text-center">
                                    <div>
                                        <a href="/account" class="btn btn-blue">
                                            My Account
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>

		</>
		)
}
export default VacationModeSuccess;