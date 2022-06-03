import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const AdminPage = () =>{
	return(
		<>
<div class="wrapper">
	<AdminSidebar/>
            <header class="main-header">
            <a href="" class="logo">
              <span class="logo-mini"><b>Posla</b></span>
              <span class="logo-lg"><b>Posla</b></span>
            </a>
            <nav class="navbar navbar-static-top">
              <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
              </a>

              <div class="layout-mobile-title d-block d-md-none">
                Admin Panel
              </div>
              
              <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                  <li class="dropdown user user-menu" style={{minHeight: "50px"}}>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{height: "50px"}}>
                      <img src='/images/user.png' class="user-image" alt="User Image"/>
                      
                      <span class="hidden-xs" style={{position: "relative", top: "2px"}}>Fname Lname</span>
                      <span class="fa fa-angle-down" style={{position:"relative", top: "3px", marginLeft: "5px"}}></span>
                    </a>
                    <ul class="dropdown-menu">
                      
                      <li class="user-header" style={{textAlign: "center !important", paddingTop: "15px !important"}}>
                        
                        <img src='/images/user.jpg' class="img-circle" alt="fname"/>

                        <p style={{textAlign: "center !important"}}>
                          Fname Lname
                          <small style={{textAlign: "center !important"}}>Account created on: Jan X, 20XX</small>
                        </p>
                      </li>
                      
                      <li class="user-footer">
                        <div class="pull-left">
                          <a href="" class="btn btn-blue">Profile</a>
                        </div>
                        <div class="pull-right">
                          <a href="" class="btn btn-danger">Logout</a>
                        </div>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
    <div class="content-wrapper">
        <div class="body-wrapper">
            <div class="dashboard pt-30 pb-30 pr-30 pl-30">
                <div class="dashboard-title">
                    <div>
                        <img src='/images/logo.png' class="dp-contain" alt="Posla" style={{marginTop: "5px"}}/>
                    </div>
                    <div>
                        Admin Panel
                    </div>
                </div>
                
                <div class="dashboard-search mt-30">
                    <form action="" method="get">
                        <div class="input-group">
                            <input type="search" placeholder="Search deals, projects, users" required="required" class="form-control" name="s" value="" />
                            <div class="input-group-btn">
                                <button class="btn btn-orange" type="submit" style={{borderTopLeftRadius: "0"}}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="dashboard-boxes container mt-10 pb-40">
                    <div class="row">

                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        45
                                    </div>
                                    <div>
                                        Registered Users
                                    </div>
                                </div>
                                <div class="fa fa-users"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        213
                                    </div>
                                    <div>
                                        All Deals
                                    </div>
                                </div>
                                <div class="fa fa-user-tie"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        67
                                    </div>
                                    <div>
                                        All Projects
                                    </div>
                                </div>
                                <div class="fa fa-user-alt-slash"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div class="">
                                        32
                                    </div>
                                    <div class="">
                                        All Contact Us Messages
                                    </div>
                                </div>
                                <div class="fa fa-clock"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        $45,235
                                    </div>
                                    <div>
                                        Total Payments
                                    </div>
                                </div>
                                <div class="fa fa-check-circle"></div>
                            </a>
                        </div>

                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        $31,235
                                    </div>
                                    <div>
                                        Amount Paid
                                    </div>
                                </div>
                                <div class="fa fa-exclamation-circle"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        $3,000
                                    </div>
                                    <div>
                                        Dispensable User Revenue
                                    </div>
                                </div>
                                <div class="fa fa-envelope"></div>
                            </a>
                        </div>
                        
                        <div class="col-6 col-md-3">
                            <a href="" class="inner_border slow_speed">
                                <div>
                                    <div>
                                        $11,000
                                    </div>
                                    <div>
                                        Posla Revenue
                                    </div>
                                </div>
                                <div class="fa fa-credit-card"></div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        <AdminFooter/>
</div>

		</>
		)
}
export default AdminPage;