import React,{useState} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';

const AdminListCat = () => {
	const [data, setData] = useState({
		name:"",
		parent_id:"",
		position:"",
		status:"",
		description:""
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
			name: data.name,
			parent_id: data.parent_id,
			position: data.position,
			status: data.status,
			description: data.description
		}

		fetch('https://posla-api.herokuapp.com/api/auth/signup',{
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
			<AdminHeader/>
			<AdminSidebar/>
			<div class="box">
		        <div class="box-header">
		            <div class="box-title">
		                Create Category
		            </div>
		            <div class="box-tools pull-right">
		                <a href="" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Link
		                </a>
		            </div>
		        </div>
		        <div class="box-body">
		            

		            <form action='admin.categories.store' method="post" enctype="multipart/form-data" class="mx-auto mw-600">
		             
		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Name:</label>
		                            <input type="text" class="form-control" name="name" value={data.name} onChange={handleChange}/>
		                        </div>
		                    </div>
		                  
		                        <div class="col-md-6">
		                            <div class="form-group">
		                                <label>Parent Category:</label>
		                                <select name="parent_id" class="form-control" onChange={handleChange}>
		                                    <option value={data.parent_id} selected>-- None --</option>
		                                        <option >Web development</option> 
		                                        <option >Mobile App development</option>  
		                                </select>
		                            </div>
		                        </div>
		                  
		                </div>
		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Position:</label>
		                            <input type="number" class="form-control" name="position" max="100" min="1" value={data.position} onChange={handleChange}/>
		                        </div>
		                    </div>
		                    
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Status:</label>
		                            <select name="status" class="form-control" onChange={handleChange} required>
		                                <option disabled selected>-- Select --</option>
		                                <option value="1">Active</option>
		                                <option value="0">Disable</option>
		                            </select>
		                        </div>
		                    </div>
		                </div>


		                <div class="row">
		                    <div class="col-md-12">
		                        <div class="form-group">
		                            <label>Description:</label>
		                            <textarea class="form-control" name="description" style={{height: "100px"}} value={data.description} onChange={handleChange}></textarea>
		                        </div>
		                    </div>
		                </div>

		                <div class="form-footer">
		                    <input type="submit" name="" value="Create" class="btn btn-primary" onClick={handleSubmit}/>
		                    <a href="#" class="btn btn-transparent-black">Cancel</a>
		                    <p style={{display:display}}>category created successfully</p>
		                </div>

		            </form>


		        </div>
		    </div>

		</>

		)
}

export default AdminListCat;