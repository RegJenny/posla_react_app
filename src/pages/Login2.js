import React from 'react';

const Login2 = () =>{
	return(

		<>
<div class="#" style={{backgroundImage: "url('/images/auth-bg-1.png')"}}>

    <form method="POST" class="#" action="#">
      
        <div class="form-group">
            <label for="email" class="control-label">
                Email Address:
            </label>
            <input type="email" name="email" id="email" value="#" class="form-control"/>
        </div>
        <div class="input-group">
            <label for="password" class="control-label">
                Password:
            </label>
            <div class="input-group input-group-password">
                <input type="password" name="password" id="password" class="form-control"/>
                <button type="button" class="input-group-btn password-toggle">
                    <span class="fa fa-eye icon-17"></span>
                </button>
            </div>
        </div>
        <div class="mt-20">
            <a class="btn-forgot-password-switch text-fade hover-underline cursor-pointer">
                Forgot Password
            </a>
        </div>
        <div class="mt-20">
            <button type="submit" class="btn btn-blue btn-block">
                Login
            </button>
        </div>
        <div class="mt-20 text-center">
            <a class="btn-register-switch text-fade hover-underline cursor-pointer">
                Create New Account
            </a>
        </div>
    </form>
    
</div>



		</>

		)
}
export default Login2;