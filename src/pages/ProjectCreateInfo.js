import React, {useState} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabProjectMgt from '../components/NavTabProjectMgt';

const ProjectCreateInfo = () =>{
	const [data, setData] = useState({
		title:"",
		category:"",
		subcategory:"",
		timeframe:"",
		budget:"",
		expdate:"",
		picture_1:"",
		picture_2:"",
		picture_3:"",
		picture_4:"",
		picture_5:"",
		picture_6:"",
		description:"",
		visibility:"",
		tags:""
	});
	const [display, setDisplay] = useState("None")
	const [errors, setErrors] = useState("");

	const handleChange = (e) =>{
		setData({...data, [e.target.name]:[e.target.value]});
		console.log(data);
	}

	const handleSubmit =(e)=>{
		e.preventDefault()
		const sendData ={
			title: data.title,
			category: data.category,
			subcategory: data.subcategory,
			timeframe: data.timeframe,
			budget: data.budget,
			expdate: data.expdate,
			picture_1: data.picture_1,
			picture_2: data.picture_2,
			picture_3: data.picture_3,
			picture_4: data.picture_4,
			picture_5: data.picture_5,
			picture_6: data.picture_6,
			description: data.description,
			visibility: data.visibility,
			tags: data.tags
		}

		fetch('https://posla-api.herokuapp.com/api/projects/create/stage-two-info',{
	      method: 'POST',
	      headers: {
	        "Content-Type" : "application/json",
	        "accept" : "application/json"},
	         body: JSON.stringify(sendData)
	       }).then(async response => {
	         if (!response.ok) {
	         const validation = await response.json();
	         setErrors(validation.errors);
	         console.log(validation.errors);
	       }else{
	        setDisplay('block')
	       }
	    })

	}

	return(
	<>
	<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">
                <AccountSidebar/>    
            </div>
            
            <div class="col-12 col-md-8 col-lg-9">
                
                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item"><a href="/account/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Project</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Edit Project
                    </div>
                    <div>
                        
                       <NavTabProjectMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/projects/edit/1234/publish">
                                    <div class="b-1-ddd">

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Project Title:
                                                        </label>
                                                        <textarea name="title" id="title" onChange={handleChange} class="form-control resize-none" style={{height: "99px"}} placeholder="I need..." value={data.title}></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category" id="category" onChange={handleChange} value={data.category}>
                                                            <option>- Select -</option>
                                                            <option>web development</option>
                                                            <option>mobile development</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory" class="control-label">
                                                            SubCategory:
                                                        </label>
                                                        <select name="subcategory" id="subcategory" onChange={handleChange} value={data.subcategory}>
                                                            <option>- Select -</option>
                                                             <option>frontend development</option>
                                                              <option>backend development</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="timeframe" class="control-label">
                                                                    Project Timeframe:
                                                                </label>
                                                                <select name="timeframe" id="timeframe" onChange={handleChange} value={data.timeframe}>
                                                                    <option>- Select -</option>
                                                                    <option >1 day</option>
                                                                    <option >2 days</option>
                                                                    <option>3 days</option>
                                                                    <option >5 days</option>
                                                                    <option>7 days</option>
                                                                    <option>10 days</option>
                                                                    <option>20 days</option>
                                                                    <option>30 days</option>
                                                                    <option>45 days</option>
                                                                    <option>60 days</option>
                                                                    <option>90 days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="budget" class="control-label">
                                                                    Budget:
                                                                </label>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control" name="budget" id="budget" value={data.budget} onChange={handleChange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="expdate" class="control-label">
                                                            Active Until:
                                                        </label>
                                                        <input type="datetime-local" class="form-control" name="expdate" id="expdate" onChange={handleChange} value={data.expdate}/>
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
                                                        <input type="file" name="picture_1" id="picture_1" accept="image/*" onChange={handleChange} value={data.picture_1}/>
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
                                                        <input type="file" name="picture_2" id="picture_2" accept="image/*" onChange={handleChange} value={data.picture_2}/>
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
                                                        <input type="file" name="picture_3" id="picture_3" accept="image/*" onChange={handleChange} value={data.picture_3}/>
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
                                                        <input type="file" name="picture_4" id="picture_4" accept="image/*" onChange={handleChange} value={data.picture_4}/>
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
                                                        <input type="file" name="picture_5" id="picture_5" accept="image/*" onChange={handleChange} value={data.picture_5}/>
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
                                                        <input type="file" name="picture_6" id="picture_6" accept="image/*" onChange={handleChange} value={data.picture_6}/>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <hr/>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="description" class="control-label">
                                                            Project Description:
                                                        </label>
                                                        <textarea name="description" id="description" class="form-control resize-none" style={{height: "99px"}} onChange={handleChange} value={data.description}></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="visibility" class="control-label">
                                                            Visiblility:
                                                        </label>
                                                        <select name="visibility" id="visibility" onChange={handleChange} value={data.visibility}>
                                                            <option>- Select -</option>
                                                            <option>Public</option>
                                                            <option>Private</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="tags" class="control-label">
                                                            Tags:
                                                        </label>
                                                        let's do comman separated value for now.. onsave, explode input with comma 
                                                        <input type="search" name="tags" class="form-control" placeholder="Search" onChange={handleChange} value={data.tags}/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" style={{marginLeft: "-2px"}}>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <a href="/account/projects/edit/1234/rules" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </a>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit}>
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
                <p style={{display:display}}>success</p>

            </div>
        </div>
    </div>

		</>
		)
}
export default ProjectCreateInfo;