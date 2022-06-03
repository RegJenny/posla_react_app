import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';


const AccountProfile = () =>{
  const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect (()=>{
        fetch("https://dummyjson.com/users/1")
  .then(response => response.json())
  .then(response=>{
    setResult(response)
  })
  .catch(error => console.log(error));

    },[])
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
                        <li class="breadcrumb-item"><a href="/">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Profile
                        <a href="/account/profile/edit" class="btn btn-blue btn-sm pull-right">Edit Profile</a>
                    </div>
                    <div>

                        <div class="row">
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Basic Information
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-user"></span>
                                                <div class="overflow-hidden">
                                                    Name:
                                                </div>
                                            </div>
                                            <div>
                                                {result.firstName} {result.lastName}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-user-circle"></span>
                                                <div class="overflow-hidden">
                                                    Username:
                                                </div>
                                            </div>
                                            <div>
                                                {result.username}
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-envelope"></span>
                                                <div class="overflow-hidden">
                                                    Email Address:
                                                </div>
                                            </div>
                                            <div>
                                                {result.email}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-phone-square"></span>
                                                <div class="overflow-hidden">
                                                    Phone:
                                                </div>
                                            </div>
                                            <div>
                                                {result.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Additional Information
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-flag"></span>
                                                <div class="overflow-hidden">
                                                    Country:
                                                </div>
                                            </div>
                                            <div>
                                                {result.maidenName}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-circle"></span>
                                                <div class="overflow-hidden">
                                                    Gender:
                                                </div>
                                            </div>
                                            <div>
                                              {result.gender}
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-calendar"></span>
                                                <div class="overflow-hidden">
                                                    Date of Birth:
                                                </div>
                                            </div>
                                            <div>
                                                {result.birthDate}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Description
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="p-20">
                                        <div class="text-fade">
                                            Short Description:
                                        </div>
                                        <div class="mt-5">
                                           {result.company.title}
                                        </div>
                                        <div class="text-fade mt-25">
                                            Long Description :
                                        </div>
                                        <div class="mt-5 text-justify">
                                            {result.company.department}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Languages
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-book"></span>
                                                <div class="overflow-hidden">
                                                    {result.firstName}
                                                </div>
                                            </div>
                                            <div>
                                                {result.eyeColor}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-book"></span>
                                                <div class="overflow-hidden">
                                                    {result.lastName}
                                                </div>
                                            </div>
                                            <div>
                                                {result.eyeColor}
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-book"></span>
                                                <div class="overflow-hidden">
                                                    {result.maidenName}
                                                </div>
                                            </div>
                                            <div>
                                                {result.eyeColor}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-10 pl-15 pr-15 mt-30 font-bold bg-blue text-fff">
                                    Skillset
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="p-15 pt-20 item-labels item-labels-md item-labels-tags-all">
                                        
                                        <div class="item-labels-tags">
                                            {result.company.department}
                                        </div>
                                        
                                        
                                    </div>
                                </div>

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
export default AccountProfile;
