import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Deal from './Deal';
import ProjectList from './ProjectList';

const AccountDashboard = () =>{

    const [deal, setDeal] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setDeal(res)
            })
            .catch((error) => 
                console.log(error)
            )
    });
	return(
			<>
                <div class="section" style={{marginTop:"20px"}}>
                    <div class="section-title">
                        Active Deals ({deal.length})
                        <Link to="/account/deals" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div>
                        {/*maximum of 3 deals where status == active*/}
                        <div class="deal-list deal-list-mini row">
                           
                             {deal.products.map((item)=>(
                                        <div class="col-sm-6 col-lg-4">
                                            <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal">   
                                                <div class="deal-info-top">
                                                    <div>
                                                        <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover"/>
                                                    </div>
                                                    <div class="">
                                                        <div>
                                                            <img src={item.thumbnail} alt="Olawale Lawal" class="dp-contain"/>
                                                        </div>
                                                        <div class="text-fade font-13 ellipsis">
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                    <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                                     {item.email}
                                                    </div>
                                                </div>

                                                <div class="mt-10 mr-10 ml-10 ellipsis">
                                                    <div class="project-price">
                                                        <span class="font-size-10 text-fade">Starting At</span>
                                                        $ {item.price}
                                                    </div>
                                                    <div class="item-labels">
                                                        <div class="item-labels-new">
                                                            New
                                                        </div>
                                                        <div class="item-labels-featured">
                                                            Featured
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px"}}>
                                                    <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                                        <div class="item-labels-prefix">
                                                            Tags & Skills:
                                                        </div>
                                                        <div class="item-labels-tags">
                                                            Mobile App
                                                        </div>
                                                        <div class="item-labels-tags">
                                                            iOS App
                                                        </div>
                                                        <div class="item-labels-tags">
                                                            App Store
                                                        </div>
                                                        <div class="item-labels-tags">
                                                            Swift Language
                                                        </div>
                                                        <div class="item-labels-tags">
                                                            Objective C
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </Link>
                                         </div>  
                                    ))} 
                        </div>
                        <div>
                            <Link to="/account/deals" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                                View All Deals
                                <span class="fa fa-angle-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div class="section">
                    <div class="section-title">
                        Active Projects (6)
                        <Link to="/account/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div>
                        <div class="project-list project-list-wide">
                            maximum of 3 projects where status == active
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
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
        </div>
    </Link>
        </div>
    </div>
    <div>
        <Link to="/account/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
            View All Projects
            <span class="fa fa-angle-right"></span>
        </Link>
    </div>
</div>


                <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="section">
                            <div class="section-title">
                                Stats - Seller
                            </div>
                            <div>
                                <div class="tab-pane container p-0" id="price_3_premium">
                                    <div class="text-left-right text-left-right-60-40">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-file"></span>
                                                <div class="overflow-hidden">
                                                    Projects Completed:
                                                </div>
                                            </div>
                                            <div>
                                                117
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-star"></span>
                                                <div class="overflow-hidden">
                                                    Overall Rating:
                                                </div>
                                            </div>
                                            <div>
                                                4.5
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-users"></span>
                                                <div class="overflow-hidden">
                                                    Buyers worked with:
                                                </div>
                                            </div>
                                            <div>
                                                83
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="section">
                            <div class="section-title">
                                Stats - Buyer
                            </div>
                            <div>
                                <div class="tab-pane container p-0" id="price_3_premium">
                                    <div class="text-left-right text-left-right-60-40">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-file"></span>
                                                <div class="overflow-hidden">
                                                    Projects Posted:
                                                </div>
                                            </div>
                                            <div>
                                                3
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-star"></span>
                                                <div class="overflow-hidden">
                                                    Projects Issuance:
                                                </div>
                                            </div>
                                            <div>
                                                2
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-users"></span>
                                                <div class="overflow-hidden">
                                                    Sellers worked with:
                                                </div>
                                            </div>
                                            <div>
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section">
                    <div class="section-title">
                        My Reviews
                    </div>
                    <div>
                        <div class="rating-box rating-box-lg mt-5">
                            <div>
                                <div></div>
                                <div >
                                <i class="fa fa-star"></i>
                                </div>  put product rating here (in percentage)
                            </div>
                            <div class="font-bold text-orange">
                                5.0
                            </div>
                        </div>
                    </div>
                    <div class="p-20 pb-0 mb-20 b-1-ddd">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div Style="width: 80%;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div Style={{"width": "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div Style={{"width": "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div Style={{"width": "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div Style={{"width": "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-title">
                        1809 Reviews
                        <Link to="/account/reviews" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</Link>
                    </div>
                    <div>
                        
                        <div class="user-msg b-1-eee">
                            <div class="overflow-hidden">
                                <div class="user-msg-img pull-left">
                                    <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                </div>
                                <div class="pull-right d-none d-sm-block">
                                    <div class="rating-box mt-5">
                                        <div>
                                            <div></div>
                                            <div Style="width: 75%;"></div> put product rating here (in percentage) -
                                        </div>
                                        <div class="font-bold text-orange">
                                            5.0
                                        </div>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="font-bold">
                                        Firstname Lastname
                                    </div>
                                    <div class="text-fade">
                                        Published: Jan 12, 2019
                                    </div>
                                    <div class="rating-box d-block d-sm-none">
                                        <div>
                                            <div></div>
                                            <div Style={{"width": "75%"}}></div>  put product rating here (in percentage)
                                        </div>
                                        <div class="font-bold text-orange">
                                            5.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10 font-normal text-justify">
                                I've worked with Kristen twice now. I have never worked with a graphic designer before and she's truly the best. Such a great lady and works really hard to make her customers satisfied. She is also really talented, open to ideas and works fast.
                            </div>
                        </div>
                        
                        


                        <Link to="/account/reviews" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                            View All Reviews
                            <span class="fa fa-angle-right"></span>
                        </Link>
                        
                    </div>
                </div>
            </>
		)
}
export default AccountDashboard;