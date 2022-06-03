import React, {useState, useEffect} from 'react';
import CommonFilter from '../components/CommonFilter';
import {Link} from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CatBusiness = () => {
    const [project, setProject] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {setProject(res)})
        .catch((error) => {console.log(error)})
    });


    return(
<>
<Header/>
    <div class="container" style={{marginTop:"20px"}}>
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
                    <CommonFilter/>
                </div>

            </div>

            <div class="col-md-8 col-lg-6">


                <div class="modal" id="filter">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Filter</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="p-10">
                                   <CommonFilter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mb-20">
                    <div class="text-center">
                        <div class="font-20 font-bold">
                            Category name
                        </div>
                        <div class="font-12 text-fade">
                            (30 active projects)
                        </div>
                    </div>
                </div>

                <div class="section mb-5">
                    <div class="section-title floated-content">

                        <button class="btn btn-transparent-black d-block d-md-none pull-left btn-sm" data-toggle="modal" data-target="#filter">
                            <span class="fa fa-filter"></span>
                            Filter
                        </button>
                        
                        <div class="font-bold d-none d-md-inline mt-10 pull-left">
                            Showing 1 - 15 of 31
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md" Style={{"width": "100px", "padding": "0px"}}>
                                
                                    <option value="new" selected >Newest First</option>
                                    <option value="old"  selected >Oldest First</option>
                                    <option value="budget_high_low"  selected >Budget - High to Low</option>
                                    <option value="budget_low_high"  selected >Budget - Low to High</option>
                                    <option value="proposals_high_low" selected >Proposals - High to Low</option>
                                    <option value="proposals_low_high" selected >Proposals - Low to High</option>
                                
                            </select>
                        </form>

                    </div>
                    {project.map((item)=>(
                    <div class="project-list project-list-wide" style={{marginTop:"10px"}}>
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
                                {item.website}
                            </div>
                        </div>
                        </Link>
                    </div>
                        ))}

                </div>

                <div class="section">
                    //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <a href="" class="posla-ad-space">
                    <img src='/images/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
                </a>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured Projects
                    </div>
                    <div class="project-list project-list-mini">
                               <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
                                    <div>
                                        <div>
                                            <span className="fa fa-angle-right icon-50"></span>
                                        </div>
                                        <div className="">
                                            <div className="font-bold">
                                               ggffh
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
<Footer/>
</>
        )
}
export default CatBusiness; 


