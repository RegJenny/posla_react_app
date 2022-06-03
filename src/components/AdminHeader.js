import React from 'react';

const AdminHeader = ()=>{
	return(
		<>
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
		</>
		)
}

export default AdminHeader;

