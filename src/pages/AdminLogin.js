import React from 'react';

const AdminLogin = ()=>{
    return(
        <>
            <div class="content m-0 p-0">
                <div class="row margin-none padding-none" style={{height: "100%"}}>
                    <div class="col-md-6">

                        <div class="content-content">
                            <div class="app">
                                <img src='/images/logo.png' alt="Freeki.com" class="dp-contain" />
                            </div>
                            <div class="title font-bold">
                                Admin Login
                            </div>
                            
                            <form action="" method="post">
                                <div class="form-group has-feedback">
                                    <label for="">Email Address:</label>
                                    <input name="email" type="email" class="form-control" value="#" />
                                    <span class="fa fa-envelope form-control-feedback" style={{fontSize: "17px"}}></span>
                                </div>
                                <div class="form-group has-feedback">
                                    <label for="">Password:</label>
                                    <input name="password" type="password" class="form-control" />
                                    <span class="fa fa-lock form-control-feedback"></span>
                                </div>
                                <div>
                                    <a href="#" class="text-color-fade">Forgot Password</a>
                                </div>
                                <div class="mt-20">
                                    <div>
                                        <button type="submit" class="btn btn-blue btn-block">Log in as Admin</button>
                                        <a href="/" class="btn btn-transparent-black btn-block" style={{marginTop: "10px"}}>Goto Homepage</a>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div class="footer">
                            <div class="copyright">
                                <p>Copyright © 2021 • Posla • All Rights Reserved</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 hidden-xs hidden-sm vcenter text-center auth-login-bg" style={{background: "url('/images/posla-admin.jpg')", backgroundSize: "cover"}}>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default AdminLogin;