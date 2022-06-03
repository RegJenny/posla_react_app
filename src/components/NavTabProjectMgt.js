import React from 'react';

const NavTabProjectMgt = () =>{
    return(
        <>
            <ul class="nav nav-tabs posla-tabs posla-tabs-3 nav-tabs-style-1 nav-tabs-style-1-lg-responsive">
                <li class="nav-item">
                    <a href="/account/projects/edit/1234/rules" class="nav-link">
                        <div class="font-20 font-bold">
                            1
                        </div>
                        <div class="text-fade line-height-mini mb-5">
                            Rules
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/account/projects/edit/1234/info"class="nav-link ">
                        <div class="font-20 font-bold">
                            2
                        </div>
                        <div class="text-fade line-height-mini mb-5">
                            Info
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/account/projects/edit/1234/publish" class="nav-link">
                        <div class="font-20 font-bold">
                            3
                        </div>
                        <div class="text-fade line-height-mini mb-5">
                            Publish
                        </div>
                    </a>
                </li>
            </ul>
        </>
        )
}
export default NavTabProjectMgt;

