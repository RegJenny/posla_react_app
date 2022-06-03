import React, {useState, useEffect} from 'react';
import ProjectList from './ProjectList';
import {Link} from 'react-router-dom';

const Container = () =>{
	const [category, setCategory] = useState([]);
	
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => {
				setCategory(res);
			})
			.catch((error) => {
				console.log(error);
			})
	});
	
	{
		/**
	useEffect(()=>{
	fetch("https://posla-api.herokuapp.com/api/front/projects")
		.then(res => res.json())
		.then(res => {
			setCategory(res);
		})
		.catch((error) => {
			console.log(error);
		})
	});
	**/
	}


	return(
		<>
	<div class="container">
        
        <div class="row">
            <div class="col-md-4 col-lg-3 d-none d-md-block">
                
                <div class="sticky-top">
                    <div class="home-category-list">

        			{category.map((item)=>{ return(
                    	<a href="/category/business/projects">
                            <span class="fa fa-angle-right icon-000 icon-18 pull-right d-inline"></span>
                            {item.name}
                        </a>
                    		)})}       
                    </div>
                    
                    <div class="mt-10">
                        <a href="/support" class="text-fade d-inline hover-underline">
                            Suggest a category
                            <span class="fa fa-angle-right icon-grey ml-2"></span>
                        </a>
                    </div>
                </div>
              </div>

            <div class="col-md-8 col-lg-6">
                
                <div class="row">
                    <div class="col-sm-6 col-lg-12">
					       <div class="section d-block d-sm-none">
					            <a data-toggle="modal" data-target="#modalCategories" class="d-block">
					                <span class="fa fa-angle-right pull-right icon-18"></span>
					                <span class="fa fa-list-alt pull-left icon-18 mr-10 icon-blue"></span>
					                View all project categories
					            </a>
					        </div>
					        
					        <div class="section">
					            <div class="section-title">
					                Featured Projects
					            </div>
					            <div class="project-list project-list-wide">
								<Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
							            <div>
							                <div>
							                    <span className="fa fa-angle-right icon-50"></span>
							                </div>
							                <div className="">
							                    <div className="font-bold">
							                   		njrnfjnrjfn
							                    </div>

							                    <div className="text-fade ellipsis-2-lines mt-5">
							                        nvnkfvkf
							                    </div>
							                </div>
							            </div>

							        <div className="mt-5 ellipsis">
							            <div className="project-price">
							                $150
							            </div>
							            <div className="item-labels">
							                <div className="item-labels-new">
							                    New
							                </div>
							                <div className="item-labels-featured">
							                    Featured
							                </div>
							                <div className="item-labels-proposals">
							                    18 proposals
							                </div>
							            </div>
							        </div>

							        <div className="item-labels item-labels-tags-all ellipsis">
							            <div className="item-labels-prefix">
							                Tags & Skills:
							            </div>
							            <div className="item-labels-tags">
							                Tag name
							            </div>

							        </div>
							        </Link>
					            </div>
					        </div>
					        {category.map((item)=>(

					        <div class="section">
				                <div class="section-title">
				                    {item.name}
				                    <a href="/category/business/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
				                </div>
				                <div class="project-list project-list-wide">
									<Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
							            <div>
							                <div>
							                    <span className="fa fa-angle-right icon-50"></span>
							                </div>
							                <div className="">
							                    <div className="font-bold">
							                       {item.name}
							                    </div>

							                    <div className="text-fade ellipsis-2-lines mt-5">
							                        {item.email}
							                    </div>
							                </div>
							            </div>

							        <div className="mt-5 ellipsis">
							            <div className="project-price">
							                $150
							            </div>
							            <div className="item-labels">
							                <div className="item-labels-new">
							                    New
							                </div>
							                <div className="item-labels-featured">
							                    Featured
							                </div>
							                <div className="item-labels-proposals">
							                    18 proposals
							                </div>
							            </div>
							        </div>

							        <div className="item-labels item-labels-tags-all ellipsis">
							            <div className="item-labels-prefix">
							                Tags & Skills:
							            </div>
							            <div className="item-labels-tags">
							                {item.username}
							            </div>
							        </div>
							        </Link>
				                </div>
				                <a href="/category/business/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
				                    View All {item.name} Projects
				                    <span class="fa fa-angle-right"></span>
				                </a>
				            </div>



					        	))}
				    </div>
				</div>
				</div>


					<div class="col-lg-3 d-none d-lg-block">
		                
		                <div class="home-section-user bg-fff shadow-sm mb-30 br-4">
		                    <div></div>
		                    <div class="home-section-user-info">
		                        <a href="/account">
		                            <span class="fa fa-user"></span>
		                        </a>
		                        <div>
		                            <a href="/account" class="font-bold d-block hover-underline">
		                                Olawale Lawal
		                            </a>
		                            <div class="text-fade">
		                                Frontend Developer, UIUX Designer, Graphics Designer
		                            </div>
		                        </div>
		                    </div>
		                    <div>
		                        <a href="/deals" class="btn btn-orange btn-block">
		                            Switch to Buying
		                        </a>
		                    </div>
		                </div>

		                <div class="section pl-10 pr-10 sticky-top">
		                    <div class="section-title">
		                        Latest Projects
		                    </div>
		                    <div class="project-list project-list-mini">
		           

		                    <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
					            <div>
					                <div>
					                    <span className="fa fa-angle-right icon-50"></span>
					                </div>
					                <div className="">
					                    <div className="font-bold">
					                       jjj
					                    </div>

					                    <div className="text-fade ellipsis-2-lines mt-5">
					                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					                    </div>
					                </div>
					            </div>


					        <div className="mt-5 ellipsis">
					            <div className="project-price">
					                $150
					            </div>
					            <div className="item-labels">
					                <div className="item-labels-new">
					                    New
					                </div>
					                <div className="item-labels-featured">
					                    Featured
					                </div>
					                <div className="item-labels-proposals">
					                    18 proposals
					                </div>
					            </div>
					        </div>

					        <div className="item-labels item-labels-tags-all ellipsis">
					            <div className="item-labels-prefix">
					                Tags & Skills:
					            </div>
					            <div className="item-labels-tags">
					                Tag name
					            </div>
					        </div>
					        </Link>

		                    </div>
		                </div>

		            </div>


        </div> 

    </div>
    </>
		)
}
export default Container;