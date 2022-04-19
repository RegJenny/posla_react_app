import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const DealsCat = () =>{
    return(
<>
<Header/>
    <div class="modal" id="modalCategories">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Deal Categories</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="p-10">
                        <div id="deals_cat">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

    <div class="container">
        <div class="row" id="deals">
            
        </div>
    </div>
<Footer/>
</>
        )
}

export default DealsCat;
 
    