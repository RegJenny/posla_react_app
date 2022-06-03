import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderReview = () =>{
	return(
			<>
	<Header/>
	<div class="container">

        <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/account">Account</a></li>
                <li class="breadcrumb-item"><a href="/account/orders">Orders</a></li>
                <li class="breadcrumb-item"><a href="/account/orders/123456789012">123456789012</a></li>
                <li class="breadcrumb-item active" aria-current="page">Review</li>
            </ol>
        </div>

        <div class="section">
            <div class="section-title section-title-sm">
                Review Orders - #123456789012
            </div>

            <div class="row">
                <div class="col-lg-3">

                    <div class="row sticky-top">
                        <div class="col-sm-6 col-lg-12">
                            <div class="floated-content p-10 mb-30 b-1-ddd">
                                <a href="/user/abcde12345" class="pull-left mr-10 br-50" style={{width: "70px", height: "70px"}}>
                                    <img src='/images/user.png' alt="Firstname lastname" class="dp-cover" />
                                </a>
                                <div class="overflow-hidden">
                                    <a href="/user/abcde12345" class="font-bold d-block hover-underline mt-5">
                                        Anthony Clifford
                                    </a>
                                    <div>
                                        <div class="rating-box rating-box-fff mt-2">
                                            <div>
                                                <div></div>
                                                <div style={{width: "75%"}}></div>  put product rating here (in percentage) 
                                            </div>
                                            <div class="ml-0">
                                                3.75 (233 reviews)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-12">
                            <div class="floated-content p-10 mb-30 b-1-ddd">
                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="pull-left mr-10 d-block d-lg-none d-xl-block overflow-hidden" style={{width: "70px", height: "70px"}}>
                                    <img src='/images/boxes.jpg' alt="" class="dp-contain" />
                                </a>
                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="mr-10 d-none d-lg-block d-xl-none overflow-hidden" style={{width: "70px", height: "70px"}}>
                                    <img src='/images/boxes.jpg' alt="" class="dp-contain" />
                                </a>
                                <div class="overflow-hidden">
                                    <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="font-bold hover-underline">
                                        I will design a beautiful logo for your business
                                    </a>
                                    <div class="text-fade mt-5">
                                        <div>
                                            Category (Subcategory)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
                <div class="col-lg-9">

                    <hr class="hr-orange d-block d-lg-none mt-0 hr-2"/>

                    <form method="post" action="/account/order/123456789012" class="form b-1-ddd p-20-10">
                        <div class="mb-20">
                            <h5 class="font-13 font-bold text-center">
                                Please rate this deal based on his performance and project delivery.
                            </h5>
                        </div>
    
                        <div class="note d-non text-center mb-30">
                            Click the stars to rate this product.
                            <hr/>
                             &nbsp; &nbsp; || &nbsp; &nbsp;  
                            <span class="nowrap">
                                1 <span class="fa fa-star"></span> represents worst experience
                            </span>
                            &nbsp; &nbsp; || &nbsp; &nbsp; 
                            <span class="nowrap">
                                5 <span class="fa fa-star"></span> represents best experience
                            </span>
                        </div>
    
                        <div class="product-rating-new">
                            <div class="row">
                                
                                <div class="col-sm-6 col-xl-4">
                                    <div class="p-25 br-5 b-1-ddd">
                                        <div>
                                            Seller communication 1
                                        </div>
                                        <div class="product-rating-new-js">
                                            <div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                            </div>
                                            <div>
                                                (0)
                                            </div>
                                            <input type="hidden" name="" class="hidden-rating-value"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6 col-xl-4">
                                    <div class="p-25 br-5 b-1-ddd">
                                        <div>
                                            Transparency
                                        </div>
                                        <div class="product-rating-new-js">
                                            <div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                            </div>
                                            <div>
                                                (0)
                                            </div>
                                            <input type="hidden" name="" class="hidden-rating-value"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6 col-xl-4">
                                    <div class="p-25 br-5 b-1-ddd">
                                        <div>
                                            Speed of Delivery
                                        </div>
                                        <div class="product-rating-new-js">
                                            <div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                            </div>
                                            <div>
                                                (0)
                                            </div>
                                            <input type="hidden" name="" class="hidden-rating-value"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6 col-xl-4">
                                    <div class="p-25 br-5 b-1-ddd">
                                        <div>
                                            Accuracy of Delivered Job
                                        </div>
                                        <div class="product-rating-new-js">
                                            <div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                            </div>
                                            <div>
                                                (0)
                                            </div>
                                            <input type="hidden" name="" class="hidden-rating-value"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6 col-xl-4">
                                    <div class="p-25 br-5 b-1-ddd">
                                        <div>
                                            Something here
                                        </div>
                                        <div class="product-rating-new-js">
                                            <div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                                <div><span class="fa fa-star"></span></div>
                                            </div>
                                            <div>
                                                (0)
                                            </div>
                                            <input type="hidden" name="" class="hidden-rating-value"/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
    
                        <div class="bt-2-eee pt-30 mt-20">
                            <div class="form-group">
                                <label for="address">Please enter your review for this project:</label>
                                <textarea name="description" rows="5" class="form-control" placeholder="Your review" style={{height: "150px"}} required></textarea>
                            </div>
                        </div>
    
                        <div class="mt-20">
                            <button type="submit" class="btn btn-blue btn-block">
                                Submit Review
                            </button>
                            <a href="/account/orders/123456789012" class="btn btn-transparent-grey btn-block mt-5">
                                Cancel
                            </a>
                        </div>
    
                    </form>
                </div>
            </div>

        </div>

    </div>
    <Footer/>
			</>
		)
}
export default OrderReview;