import React from 'react';
import {Link} from 'react-router-dom';


const FilterSearch= () => {
	return(
<>
<form action="" method="get">

    <div class="filter-section">
        <div class="filter-title">
            Currently Showing
        </div>
        <div class="filter-body pr-0 pl-0">
            <div class="mh-150 list-icon-text filter-body-list">
                <Link to="/search" class="active">
                    <div>
                        <span class="fa fa-angle-right"></span>
                    </div>
                    <div>
                        All search results (30)
                    </div>
                </Link>
                <Link to="/search/deals">
                    <div>
                        <span class="fa fa-angle-right"></span>
                    </div>
                    <div>
                        Deals only (10)
                    </div>
                </Link>
                <Link to="/search/projects">
                    <div>
                        <span class="fa fa-angle-right"></span>
                    </div>
                    <div>
                        Projects only (10)
                    </div>
                </Link>
                <Link to="/search/freelancers">
                    <div>
                        <span class="fa fa-angle-right"></span>
                    </div>
                    <div>
                        Freelancers only (10)
                    </div>
                </Link>
            </div>
        </div>
    </div>

</form>
</>
		)
}
export default FilterSearch;