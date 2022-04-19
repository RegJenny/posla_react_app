import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import MessagesUsersList from '../components/MessagesUsersList';
import Msg from '../components/Msg';



const Messages =() =>{
	return(
		<>
	<Header/>
	<div class="container">

        <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/account">Account</a></li>
                <li class="breadcrumb-item active" aria-current="page">Messages</li>
            </ol>
        </div>

        <div class="section p-0 b-1-ddd">
            
            <div class="row">
                <div class="col-12 col-sm-5 col-lg-4 col-xl-3 list-left">

                    <div class="">
                        <div class="p-10 pt-15 font-15 font-bold d-none d-sm-block" Style={{"height": "49px"}}>
                            Select a chat
                        </div>
                        <div class="p-10 pt-10 font-bold text-center d-block d-sm-none">
                            Select a chat
                        </div>

                        <div class="bg-eee bt-1-ddd p-10 layout-search" Style={{"max-width": "none"}}>
                            <form action="" method="get" class="input-group">
                                <input type="search" name="s" class="form-control" placeholder="Search user & message..." />
                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default btn-md">
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                            </form>
                        </div>


                        <MessagesUsersList/>

                    </div>
                    
                </div>
    
                <div class="col-12 col-sm-7 col-lg-8 col-xl-9 bl-1-ddd pl-0 d-none d-sm-block">

                    <div class="bg-eee bb-1-ddd p-10 floated-content" Style={{"height": "50px"}}>
                        <div class="pull-right dropdown">
                            <a id="navbarDropdown" class="dropdown-toggle pr-5 pl-5 bg-eee d-inline-block overflow-hidden" Style={{"height": "30px"}} href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <span class="fa fa-bars icon-20 mt-5"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/account/dashboard">
                                    Mark as unread
                                </a>
                                <a class="dropdown-item" href="/account/dashboard">
                                    Report
                                </a>
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            
                            <a href="/user/abcde12345" class="d-inline-block overflow-hidden">
                                <div class="pull-left mr-10 br-50 overflow-hidden" Style={{"width": "30px" ,"height": "30px"}}>
                                    <img src='img/app/samples/user.png' alt="Firstname lastname" class="dp-cover" />
                                </div>
                                <div class="overflow-hidden">
                                    <div class="font-bold mt-5 ellipsis hover-underline">
                                        Olawale Lawal
                                    </div>
                                </div>
                            </a>
                            
                        </div>
                    </div>

                    <div>

                        <div class="page-alert mt-100">
                            <span class="fa fa-edit"></span>
                            <div class="pt-15 font-normal">
                                Select a chat
                            </div>
                            <div>
                                To start messaging, please select the user you'd like to send message to.
                            </div>
                           
                            <div class="mt-10">
                                <div class="mw-300 mx-auto text-center">
                                    <div>
                                        <a href="/search" class="btn btn-blue">
                                            Search User
                                        </a>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                        <Msg/>   
                    </div>
                    
                </div>
            </div>

        </div>

    </div>
			<Footer/>
		</>
		)
}
export default Messages;