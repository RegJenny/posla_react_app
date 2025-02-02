import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ResEachSeller = () =>{
	return(
		<>
		<Header/>
	<div class="container">

        <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/account">Account</a></li>
                <li class="breadcrumb-item"><a href="/account/orders">Orders</a></li>
                <li class="breadcrumb-item"><a href="/account/orders/123456789012">123456789012</a></li>
                <li class="breadcrumb-item active" aria-current="page">Resolution</li>
            </ol>
        </div>

        
        <div class="section">
            <div class="section-title section-title-sm">
                Order Resolution - #123456789012
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
                                                <div style={{width: "75%"}}></div> -- put product rating here (in percentage) --
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
                                    <img src="/images/boxes.jpg" alt="" class="dp-contain" />
                                </a>
                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="mr-10 d-none d-lg-block d-xl-none overflow-hidden" style={{width: "70px", height: "70px"}}>
                                    <img src="/images/boxes.jpg" alt="" class="dp-contain" />
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

                    <form method="post" action="" class="form b-1-ddd p-20-10">
                        <div class="mb-20">
                            <h5 class="font-13 font-bold text-center">
                                Welcome, here you can resolve any issues regarding your order.
                            </h5>
                        </div>
    
                        <div class="bt-1-ddd">

                            <div class="note text-center">
                                PS: you can always message your buyer first, to resolve issues, before reporting it to us.
                            </div>

                            <div class="font-bold mt-20">
                                What would you like to do?
                            </div>

                            <div class="resolve-main">
                                <label class="checkbox-inline cursor-pointer d-inline-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order" class="ml-10 pull-left" value="modify"/>
                                    <div class="overflow-hidden">
                                        I want to modify the order
                                    </div>
                                </label>
                                
                                <label class="checkbox-inline cursor-pointer d-inline-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order" class="ml-10 pull-left" value="cancel"/>
                                    <div class="overflow-hidden text-red">
                                        I want to cancel the order
                                    </div>
                                </label>
                            </div>



                            <div class="resolve-modify d-none">

                                <div class="font-bold mt-30">
                                    Can you tell us why?
                                </div>
                                
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="more_time"/>
                                    <div class="overflow-hidden">
                                        For personal / technical reasons, I need more time to complete the order
                                    </div>
                                </label>
                                
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="more_work"/>
                                    <div class="overflow-hidden">
                                        The buyer requested for additional work which wasn’t in the scope of original order, so I need more time and/or payment to complete the order.
                                    </div>
                                </label>
                                
                            </div>


                            <div class="resolve-cancel d-none">

                                <div class="font-bold mt-30">
                                    Can you tell us why?
                                </div>
                                
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="not_responding"/>
                                    <div class="overflow-hidden">
                                        The buyer is not responding
                                    </div>
                                </label>
                                
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="order_again"/>
                                    <div class="overflow-hidden">
                                        The buyer wants to order again
                                    </div>
                                </label>
                                
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="agree_on_price"/>
                                    <div class="overflow-hidden">
                                        We couldn't agree on price
                                    </div>
                                </label>

                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="not_enough_info"/>
                                    <div class="overflow-hidden">
                                        I didn’t receive enough information from the buyer
                                    </div>
                                </label>

                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="more_work_cancel"/>
                                    <div class="overflow-hidden">
                                        The buyer requested for additional work which wasn’t in the scope of original order.
                                    </div>
                                </label>

                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="personal_reasons"/>
                                    <div class="overflow-hidden">
                                        I cannot complete this work due to personal / technical reasons
                                    </div>
                                </label>

                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="too_busy"/>
                                    <div class="overflow-hidden">
                                        I’m too busy for this job
                                    </div>
                                </label>
                            </div>
                            
                            <div class="resolve-modify resolve-cancel d-none">
                                <label class="checkbox-inline cursor-pointer d-block b-1-ddd p-10 mt-10 mr-10">
                                    <input type="radio" name="resolve_order_why" class="ml-10 pull-left" value="others"/>
                                    <div class="overflow-hidden">
                                        Others
                                    </div>
                                    <div class="form-group ml-10 mt-10 other-reason d-none">
                                        <textarea name="" style={{height: "85px"}} class="resize-none form-control"></textarea>
                                    </div>
                                </label>
                            </div>


                            <div class="form-footer mt-30">
                                <button type="submit" class="btn btn-primary btn-md btn-block">
                                    Continue
                                </button>
                                <a href="/account/orders/123456789012" class="btn btn-transparent-black btn-md btn-block">
                                    Cancel
                                </a>
                            </div>


                            <div class="mt-20">
                                Need more assistance?
                                Please, contact our <a href="/support" class="underline hover-orange">customer support</a>
                            </div>

                            
                            <div class="modal modal-confirm-ordinary">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Order Resolution Confirmation</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="p-10">
                                                Are you sure you want to continue?
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="close btn btn-transparent-black btn-sm" data-dismiss="modal">
                                                <span class="fa fa-times"></span>
                                                Cancel
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm btn-submit-force">
                                                <span class="fa fa-paper-plane"></span>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="modal modal-confirm-more-time">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Request Time Extension - Order Resolution Confirmation</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="p-10">
                                                
                                                <div class="form-group">
                                                    <label>Select how much extra time you'd need:</label>
                                                    <select name="" id="" class="form-control modal-confirm-more-time-required mt-5">
                                                        <option value="">- Select -</option>
                                                        <option value="1">1 day</option>
                                                        <option value="2">2 days</option>
                                                        <option value="3">3 days</option>
                                                        <option value="5">5 days</option>
                                                        <option value="7">7 days</option>
                                                        <option value="10">10 days</option>
                                                        <option value="20">20 days</option>
                                                        <option value="30">30 days</option>
                                                        <option value="45">45 days</option>
                                                        <option value="60">60 days</option>
                                                        <option value="90">90 days</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="close btn btn-transparent-black btn-sm" data-dismiss="modal">
                                                <span class="fa fa-times"></span>
                                                Cancel
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm btn-submit-force">
                                                <span class="fa fa-paper-plane"></span>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="modal modal-confirm-more-work">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Request Time Extension & Payment - Order Resolution Confirmation</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="p-10">
                                                
                                                <div class="form-group">
                                                    <label>Select how much extra time you'd need:</label>
                                                    <select name="" id="" class="form-control modal-confirm-more-work-required mt-5">
                                                        <option value="">- Select -</option>
                                                        <option value="1">1 day</option>
                                                        <option value="2">2 days</option>
                                                        <option value="3">3 days</option>
                                                        <option value="5">5 days</option>
                                                        <option value="7">7 days</option>
                                                        <option value="10">10 days</option>
                                                        <option value="20">20 days</option>
                                                        <option value="30">30 days</option>
                                                        <option value="45">45 days</option>
                                                        <option value="60">60 days</option>
                                                        <option value="90">90 days</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Extra amount to request from the buyer:</label>
                                                    <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                        <div class="input-group-btn">
                                                            <button type="button" class="btn btn-md">
                                                                <span class="font-18">$</span>
                                                            </button>
                                                        </div>
                                                        <input type="number" name="" class="form-control modal-confirm-more-work-required"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="close btn btn-transparent-black btn-sm" data-dismiss="modal">
                                                <span class="fa fa-times"></span>
                                                Cancel
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm btn-submit-force">
                                                <span class="fa fa-paper-plane"></span>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>




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

export default ResEachSeller;