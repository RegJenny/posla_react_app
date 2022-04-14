import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabDeals from '../components/NavTabDeals';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DealPricing = () => {
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
		                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
		                        <li class="breadcrumb-item"><a href="/account/deals">Deals</a></li>
		                        <li class="breadcrumb-item active" aria-current="page">Create Deal</li>
		                    </ol>
		                </div>

		                <div class="section">
                    <div class="section-title">
                        Create Deal
                    </div>
                    <div>
                        
                        <NavTabDeals/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/deals/create/1234/requirements">
                                    
                                    <input type="hidden" name="stage" value="pricing"/>
                                    <div class="b-1-ddd">

                                        <div class="p-20">
                                            
                                            <div class="table-responsive b-1-ddd">
                                                <table class="table table-bordered table-col-padding" Style={{'min-width': '600px'}}>
                                                    <thead>
                                                        <tr class="bg-eee">
                                                            <th style={{'width': '120px'}}></th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[basic][status]" class="deal-pricing-toggle" id="basic" value="1" checked required/>
                                                                    <input type="hidden" name="type[basic][position]" value="1"/>
                                                                    <input type="hidden" name="type[basic][type]" value="Basic"/>
                                                                    Basic
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[standard][status]" class="deal-pricing-toggle" id="standard" value="1"/>
                                                                    <input type="hidden" name="type[standard][position]" value="2"/>
                                                                     <input type="hidden" name="type[standard][type]" value="Standard"/>
                                                                    Standard
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[premium][status]" class="deal-pricing-toggle" id="premium" value="1"/>
                                                                    <input type="hidden" name="type[premium][position]" value="3"/>
                                                                     <input type="hidden" name="type[premium][type]" value="Premium"/>
                                                                    Premium
                                                                </label>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td rowspan="2" style={{'width': '120px'}}></td>
                                                            <td>
                                                                <textarea name="type[basic][name]" id="" class="form-control resize-none mt-15 pricing_basic_action" Style={{'height': '45px'}} placeholder="Name"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[standard][name]" id="" class="form-control resize-none mt-15 pricing_standard_action" Style={{'height': '45px'}} placeholder="Name"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[premium][name]" id="" class="form-control resize-none mt-15 pricing_premium_action" Style={{'height': '45px'}} placeholder="Name"></textarea>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea name="type[basic][description]" id="" class="form-control resize-none pricing_basic_action" Style={{'height': '85px'}} placeholder="Short Description"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[standard][description]" id="" class="form-control resize-none pricing_standard_action" Style={{'height': '85px'}} placeholder="Short Description"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[premium][description]" id="" class="form-control resize-none pricing_premium_action" Style={{'height': '85px'}} placeholder="Short Description"></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                
                                                <hr class="mt-20 mb-20"/>

                                                <table class="table table-bordered table-col-padding" Style={{'height': '600px'}}>
                                                    <tbody>
                                                        <tr>
                                                            <td Style={{'height': '120px'}}>
                                                                <span>
                                                                    Delivery Timeframe
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="type[basic][delivery_timeframe]" id="" class="pricing_basic_action">
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
                                                            </td>
                                                            <td>
                                                                <select id="" name="type[standard][delivery_timeframe]" class="pricing_standard_action">
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
                                                            </td>
                                                            <td>
                                                                <select id="" name="type[premium][delivery_timeframe]" class="pricing_premium_action">
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td Style={{'height': '120px'}}>
                                                                <span>
                                                                    Revision
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="type[basic][revision_num]" id="" class="pricing_basic_action">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select name="type[standard][revision_num]" id="" class="pricing_standard_action">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select name="type[premium][revision_num]" id="" class="pricing_premium_action">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td Style={{'height': '120px'}}>
                                                                <span>
                                                                    Price
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[basic][price]" class="form-control pricing_basic_action"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[standard][price]" class="form-control pricing_standard_action"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[premium][price]" class="form-control pricing_premium_action"/>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <a href="/account/deals/create/1234/info" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </a>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right">
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                
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
export default DealPricing;