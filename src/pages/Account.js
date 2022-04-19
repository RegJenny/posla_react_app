import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import AccountDashboard from '../components/AccountDashboard';

const Account = () => {
    return(
<>
<Header/>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-lg-3">

                <AccountSidebar/>
                
            </div>
            
            <div class="d-none d-md-block col-12 col-md-8 col-lg-9">
                
               <AccountDashboard/>

            </div>
            
        </div>
    </div>
<Footer/>
</>
        )
}

export default Account;


