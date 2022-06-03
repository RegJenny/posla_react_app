import React from 'react';



const Header = () => {
	return(
<>
<div class="navbar navbar-expand-md navbar-dark shadow-sm">
    <div class="container">

        <a class="navbar-brand" href="/">
            <img src="/images/logo-full-fff.png" class="dp-contain" alt="Posla"/>
        </a>

       <div>
       {/**
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
               <span class="fa fa-navicon icon-25"></span> 
            </button>
            <a href="/account" class="navbar-toggler mr-5">
                <span class="fa fa-user-circle icon-25"></span>
            </a>
        **/}
            <a class="navbar-toggler header_link_sidebar">
                <span class="fa fa-bars icon-25"></span>
            </a>
        </div>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div class="navbar-nav mr-auto ml-auto layout-search">
                <form action="/search" method="get" class="input-group">
                    <input type="search" name="q" class="form-control" placeholder="Search projects, deals, and freelancers..." />
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default btn-md">
                            <span class="fa fa-search"></span>
                        </button>
                    </div>
                </form>
            </div>


            <ul class="navbar-nav navbar-nav-links-nav ml-auto d-none d-lg-flex">
                <li class="nav-item">
                    <a class="nav-link active" href="/account/deals/create">Post Deals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/deals">Find Deals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Find Projects</a>
                </li>
            </ul>

            <ul class="navbar-nav navbar-nav-links-menu ml-auto d-none d-md-flex d-lg-none">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                        Menu
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/account/deals/create">
                            Post Deals
                        </a>
                        <a class="dropdown-item" href="/deals">
                            Find Deals
                        </a>
                        <a class="dropdown-item" href="/">
                            Find Projects
                        </a>
                    </div>
                </li>    
            </ul>

            <ul class="navbar-nav navbar-nav-links-auth ml-auto">
                      
                    <li class="nav-item">
                        <a class="nav-link btn-login cursor-pointer" href="/login">
                            Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn-register cursor-pointer" href="/register">
                            Register
                        </a>
                    </li>
                    
                {/* 
                        <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                            Username
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/account/dashboard">
                                Dashboard
                            </a>
                            <a class="dropdown-item" href="/account/profile">
                                Profile
                            </a>
                            <a class="dropdown-item" href="/account/orders">
                                My Orders
                            </a>
                            <a class="dropdown-item" href="/account/deals">
                                My Deals
                            </a>
                            <a class="dropdown-item" href="/account/projects">
                                My Projects
                            </a>
                            <a class="dropdown-item" href="/account/project-bids">
                                My Project Bids
                            </a>
                            <a class="dropdown-item" href="/account/favourites">
                                Favourites
                            </a>
                            <a class="dropdown-item" href="/messages">
                                Messages
                            </a>
                            <a class="dropdown-item" href="/account/earnings-withdrawals/">
                                Earnings & Withdrawals
                            </a>
                            <a class="dropdown-item" href="/account/wallet">
                                My Wallet
                            </a>
                            <a class="dropdown-item" href="/account/reviews">
                                My Reviews
                            </a>
                            <a class="dropdown-item" href="/account/settings">
                                Account Settings
                            </a>
                            <a class="dropdown-item" href="">
                                Logout
                            </a>
                        </div>
                    </li>
                 
                */}
               
                    
                
            </ul>

        </div>

    </div>
</div>
</>
		)
}

export default Header;