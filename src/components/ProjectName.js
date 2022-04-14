import React from 'react';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';


const ProjectName = () => {
	return(
	<>
		 <div className="col-md-4 col-lg-3 d-none d-md-block"> 
                <div className="sticky-top">
                    <div className="home-category-list">
                        <Link to="/category/business/projects">
                            Category Name
                            <span className="fa fa-angle-right"></span>
                        </Link>      
                    </div>
                    
                    <div className="mt-10">
                        <Link to="/support" className="text-fade d-inline hover-underline">
                            Suggest a category
                            <span className="fa fa-angle-right icon-grey ml-2"></span>
                        </Link>
                    </div>
                </div>
            </div>



            <div className="col-md-8 col-lg-6">
                 <div className="section">
                    <div className="section-title">
                        Featured Projects
                    </div>
                    <div className="project-list project-list-wide">
                        <ProjectList/>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">
                        Category 2
                        <Link to="/category/business/projects" className="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div className="project-list project-list-wide">
                        <ProjectList/>
                    </div>
                    <Link to="/category/business/projects" className="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                        View All Category 2 Projects
                    </Link>
                </div>



                <div className="section">
                    <div className="section-title">
                        Category 2
                        <Link to="/category/business/projects" className="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div className="project-list project-list-wide">
                        <ProjectList/>
                    </div>
                    <Link to="/category/business/projects" className="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                        View All Category 2 Projects
                        <span className="fa fa-angle-right"></span>
                    </Link>
                </div>



                <div className="section">
                    <div className="section-title">
                        Category 2
                        <Link to="/category/business/projects" className="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div className="project-list project-list-wide">
                        <ProjectList/>
                    </div>
                    <Link to="/category/business/projects" className="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                        View All Category 2 Projects
                        <span className="fa fa-angle-right"></span>
                    </Link>
                </div>
            </div>










             <div className="col-lg-3 d-none d-lg-block">
                
                <div className="home-section-user bg-fff shadow-sm mb-30 br-4">
                    <div></div>
                    <div className="home-section-user-info">
                        <Link to="/account">
                            <span className="fa fa-user"></span>
                        </Link>
                        <div>
                            <Link to="/account" className="font-bold d-block hover-underline">
                                Olawale Lawal
                            </Link>
                            <div className="text-fade">
                                Frontend Developer, UIUX Designer, Graphics Designer
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/deals" className="btn btn-orange btn-block">
                            Switch to Buying
                        </Link>
                    </div>
                </div>

                <div className="section pl-10 pr-10 sticky-top">
                    <div className="section-title">
                        Latest Projects
                    </div>
                    <div className="project-list project-list-mini">
                        <ProjectList/>
                    </div>
                </div>

            </div>
        </>
		)
}
export default ProjectName;