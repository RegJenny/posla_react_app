import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabProjectMgt from '../components/NavTabProjectMgt';

const ProjectSuccess = () =>{
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
                        <li class="breadcrumb-item"><a href="/account/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Project</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Create Project
                    </div>
                    <div>
                        
                        <NavTabProjectMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <div class="page-alert page-alert-success">
                                    <span class="fa fa-check-circle"></span>
                                    <div class="pt-15">
                                        Project Edited Successfully
                                    </div>
                                    <div>
                                        Your project has been successfully submitted to the admin for approval.
                                        A notification will be sent to you once approved or rejected.
                                        <br/>
                                        Thank you.
                                    </div>
                                    <div class="mt-10">
                                        <div class="mw-300 mx-auto text-center">
                                            <div>
                                                <a href="/account/projects" class="btn btn-blue">
                                                    My Projects
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
        </div>
    </div>
		</>
		)
}
export default ProjectSuccess;