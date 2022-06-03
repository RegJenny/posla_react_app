import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSearch from '../components/FilterSearch';
import FilterDeals from '../components/FilterDeals';
import Deal from '../components/Deal';

const SearchDeals = () => {
    return(
<>
<Header/>
<div class="container">
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
                    <FilterSearch/>
                    <FilterDeals/>
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
                                    <FilterSearch/>
                                    <FilterDeals/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mb-20">
                    <div class="text-center">
                        <div class="font-20 font-bold">
                            Search Result (Deals)
                        </div>
                        <div class="font-12 text-fade">
                            (10 active deals)
                        </div>
                    </div>
                </div>

                <div class="section mb-5 pb-5">
                    <div class="section-title floated-content">

                        <button class="btn btn-transparent-black d-block d-md-none pull-left btn-sm" data-toggle="modal" data-target="#filter">
                            <span class="fa fa-filter"></span>
                            Filter
                        </button>
                        
                        <div class="font-bold d-none d-md-inline mt-10 pull-left">
                            Showing 1 - 20 of 65
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md"  style={{width: "100px", padding: "0px"}}>
                                <option value="new" selected>Newest First</option>
                                <option value="old">Oldest First</option>
                                <option value="budget_high_low">Budget - High to Low</option>
                                <option value="budget_low_high">Budget - Low to High</option>
                                <option value="ratings_high_low">Ratings - High to Low</option>
                                <option value="ratings_low_high">Ratings - Low to High</option>
                            </select>
                        </form>

                    </div>

                    <div class="deal-list deal-list-double">
                        <Deal/>
                    </div>
                </div>

                <div class="section">
                   //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <a href="" class="posla-ad-space">
                    <img src='/img/app/samples/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
                </a>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured Deals
                    </div>
                    <div class="deal-list deal-list-single">
                        <Deal/>
                    </div>
                </div>

            </div>

        </div>
    </div>
<Footer/>
</>
    )
}

export default SearchDeals;