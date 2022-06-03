import React from 'react';

const AdminSidebar = () =>{
    return(
        <>
            <aside class="main-sidebar">
                <section class="sidebar">

                    <div class="user-panel">
                        <a href="#" target="_blank">
                            <div class="image" style={{width: "60px", height: "60px", background: "#0073B1", border: "10px solid #0073B1", boxSizing: "content-box", overflow: "hidden"}}>
                                <img src='/images/logo.png' class="img-circle dp-contain" alt="Posla" style={{marginTop: "-15px"}}/>
                            </div>
                        </a>
                        <div class="info" style={{paddingLeft: "10px", paddingRight: "10px"}}>

                            <p>Fname Lname</p>
                            <p class="font-weight-normal" style={{color: "#aaa"}}>
                                Admin
                            </p>
                        </div>
                    </div>


                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">Welcome</li>
                        <li class="#">
                            <a href="/admin/dashboard">
                                <i class="fa fa-tachometer-alt"></i> <span>Dashboard</span>
                            </a>
                        </li>

                        <li class="header">Samples</li>

                        <li class="#">
                            <a href="#">
                                <i class="fa fa-list"></i>
                                <span>Pages</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li class="#">
                                    <a href="/admin/sample/list">
                                        <i class="fa fa-list"></i>
                                        List Page
                                    </a>
                                </li>
                                <li class="#">
                                    <a href="/admin/sample/form">
                                        <i class="fa fa-list"></i>
                                        Form Page
                                    </a>
                                </li>
                                <li class="#">
                                    <a href="/admin/sample/details">
                                        <i class="fa fa-list"></i>
                                        Details Page
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="#">
                            <a href="#">
                                <i class="fa fa-list"></i>
                                <span>Category</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li class="#">
                                    <a href='/admin/categories/index.php'>
                                        <i class="fa fa-list"></i>
                                        List Category
                                    </a>
                                </li>
                                <li class="#">
                                    <a href='/admin/categories/create.php'>
                                        <i class="fa fa-list"></i>
                                        Create Category
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header">Others</li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="fa fa-desktop"></i> <span>Goto homepage</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-user"></i> <span>Logout</span>
                            </a>
                        </li>

                    </ul>
                </section>
                
            </aside>
        </>
        )
}

export default AdminSidebar;


