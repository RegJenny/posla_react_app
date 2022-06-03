import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import NavTabDeals from '../components/NavTabDeals';

const DealInfo = () => {

    const [display, setDisplay]= useState("None")
    const [errors, setErrors] = useState("");
    const [title, setTitle] = useState("");
    const [category_id, setCategory_Id] = useState("");
    const [subcategory_id, setSubcategory_Id] = useState("");
    const [picture_1, setPicture_1] = useState("");
    const [picture_2, setPicture_2] = useState("");
    const [picture_3, setPicture_3] = useState("");
    const [picture_4, setPicture_4] = useState("");
    const [picture_5, setPicture_5] = useState("");
    const [picture_6, setPicture_6] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [tags, setTags]= useState([]);
    const [stage, setStage] = useState("");

    
    {/*const handleChange = (e) =>{
        setDealsInfo({...dealsInfo, [e.target.name]:[e.target.value]});
        console.log(dealsInfo);
    }
*/}

    const handleSubmit =(e)=>{
        e.preventDefault()
       {/* const sendDealsInfo ={
           title: dealsInfo.title,
        category_id: dealsInfo.category_id,
       subcategory_id:dealsInfo.subcategory_id,
        picture_1:dealsInfo.picture_1,
        picture_2:dealsInfo.picture_2,
        picture_3:dealsInfo.picture_3,
        picture_4:dealsInfo.picture_4,
        picture_5:dealsInfo.picture_5,
        Picture_6:dealsInfo.Picture_6,
        description:dealsInfo.description,
        status:dealsInfo.status,
        tags:dealsInfo.tags,
        stage:dealsInfo.stage
        }

        fetch('https://jbuit.com/api/contact/',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"},
             body: JSON.stringify(sendDealsInfo)
           }).then(async response => {
             if (!response.ok) {
             const validation = await response.json();
             setErrors(validation.errors);
             console.log(validation.errors);
           }else{
            setDisplay('block');
           }
        })
    */}
    {/*New Code*/}
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 32|eErM5O7mDTyPLqezAvMuF7m234Iy659hjdJRVLM5");

        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("category_id", "{{main_category}}");
        formdata.append("subcategory_id", "{{sub_category}}");
        formdata.append("description", "lowt project");
        formdata.append("status", "1");
        formdata.append("tags", "english, mathis, po, kjsdjks");
        formdata.append("pictures[]", "favicon.ico");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://jbuit.com/api/contact/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

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
                       £
                    <div>
                        
                        <NavTabDeals/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                  <form action="/account/deals/create/1234/pricing" enctype="multipart/form-data">
                                    
                                    <div class="b-1-ddd">

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Deal Title:
                                                        </label>
                                                        <textarea name="title" id="title" class="form-control resize-none" Style={{'height': '99px'}} onChange={(e)=>{setTitle(e.target.value)}} placeholder="I will..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category_id" id="category"  onChange={(e)=>{setCategory_Id(e.target.value)}} required>
                                                            <option value="" selected disabled>- Select -</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory" class="control-label">
                                                            Sub Category:
                                                        </label>
                                                        <select name="subcategory_id" id="subCategory" onChange={(e)=>{setSubcategory_Id(e.target.value)}} required>
                                                            <option value="" > Select </option>
                                                            <option value="" >Sub category 1</option>
                                                            <option value="" >Sub category 1</option>
                                                            <option value="" >Sub category 1</option>
                                                            <option value="" >Sub category 1</option>
                                                            <option value="" >Sub category 1</option>
                                                            <option value="" >Sub category 1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                             <hr/>

                                        <div class="row">
                                            <div class="col-sm-12 file-upload-box-container">
                                            
                                                <div class="file-upload-box">
                                                    <label class="" for="picture_1">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Main Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_1" accept="image/*" onChange={(e)=>{setPicture_1(e.target.value)}} />
                                                </div>

                                                <div class="file-upload-box">
                                                    <label class="" for="picture_2">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Add Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_2" accept="image/*" onChange={(e)=>{setPicture_2(e.target.value)}} />
                                                </div>

                                                <div class="file-upload-box">
                                                    <label class="" for="picture_3">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Add Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_3" accept="image/*" onChange={(e)=>{setPicture_3(e.target.value)}} />
                                                </div>


                                                <div class="file-upload-box">
                                                    <label class="" for="picture_4">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Add Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_4" accept="image/*" onChange={(e)=>{setPicture_4(e.target.value)}} />
                                                </div>
                                                
                                                <div class="file-upload-box">
                                                    <label class="" for="picture_5">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Add Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_5" accept="image/*" onChange={(e)=>{setPicture_5(e.target.value)}} />
                                                </div>


                                                <div class="file-upload-box">
                                                    <label class="" for="picture_6">
                                                        <div>
                                                            <span class="fa fa-plus icon-50"></span>
                                                        </div>
                                                        <div>
                                                            Add Picture
                                                            <br />
                                                            (jpg, jpeg, png, gif)
                                                        </div>
                                                        <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                            <span class="fa fa-times"></span>
                                                            Delete
                                                        </button>
                                                    </label>
                                                    <input type="file" name="£" id="picture_6" accept="image/*" onChange={(e)=>{setPicture_6(e.target.value)}} />
                                                </div>

                                              </div>
                                            </div>

                                            <hr/>

                                     <div class="col-sm-6">
                                                <div class="form-group">
       
                                            <div class="row">
                                                    <label for="description" class="control-label">
                                                        Deal Description:
                                                    </label>
                                                    <textarea name="description" id="description" class="form-control resize-none" Style={{'height': '99px'}} ></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label for="visibility" class="control-label">
                                                        Visiblility:
                                                    </label>
                                                    <select name="status" id="visibility" onChange={(e)=>{setStatus(e.target.value)}} >
                                                        <option value="">- Select -</option>
                                                        <option value="1">Public</option>
                                                        <option value="0">Private</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="tags" class="control-label">
                                                            Tags:
                                                        </label>
                                                        let's do comman separated value for now.. onsave, explode input with comma 
                                                        <input type="search" name="tags" class="form-control" placeholder="Search" value={tags}/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" Style={{'margin-left': '-2px'}}>
                                                            <div class="item-labels-tags cursor-pointer" onClick ={()=>{setTags("mobile")}}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick ={()=>{setTags("dat")}}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick ={()=>{
                                                                {tags.push("web")}
                                                            }}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick ={()=>{setTags("real")}}>
                                                                Mobile App
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        	</div>
                                        </div>


                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <a href="/account/deals/create" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </a>
                                                <input type="hidden" name="stage" value="info" onChange={(e)=>{setStage(e.target.value)}} />
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit}>
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
                                                </button>
                                                <p style={{display:display}}>category created successfully</p>
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
export default DealInfo;