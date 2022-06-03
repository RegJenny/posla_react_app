import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';

const ProjectDelete = () =>{
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
                        <li class="breadcrumb-item active" aria-current="page">Delete Projects</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title">
                        Delete Project - #1234
                    </div>
                    <div>

                        <div>
                            Are you sure you want to delete this project?
                        </div>

                        <div class="row mt-30">
                            <div class="col-sm-12">
                                <div class="project-list project-list-wide">
                                   <ProjectList/>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="note d-inline-block mt-20">
                                    Please note:
                                </div>
                                <ul class="list-style mt-10">
                                    <li>
                                        This action cannot be undone.
                                    </li>
                                    <li class="mt-5">
                                        Deleted projects cannot be recovered.
                                    </li>
                                    <li class="mt-5">
                                        Orders already attached to this project, will not be deleted.
                                    </li>
                                    <li class="mt-5">
                                        Current payments for "featured" ad project, will be canceled without refund.
                                    </li>
                                    <li class="mt-5">
                                        All pending refunds on this project, will be canceled.
                                    </li>
                                    <li class="mt-5">
                                        Earnings acquired from this project, can still be withdrawn.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-20 pt-20 bt-1-ddd">

                            <form action="/account/projects" class="floated-content">
                                <button type="submit" class="btn btn-danger btn-sm pull-right ml-10">
                                    Delete Project
                                </button>
                                <a href="/account/projects" class="btn btn-transparent-black btn-sm pull-right">
                                    Cancel
                                </a>
                            </form>

                        </div>


                        
                    </div>
                </div>


            </div>
        </div>
    </div>
        </>
    )
}
export default ProjectDelete;


