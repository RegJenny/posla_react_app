import React from 'react';

const EmailSample = () =>{
	return(
		<>
			<div style={{background: "#eee", overflow: "hidden"}}>
            
            <div style={{maxWidth: "600px", margin: "30px auto", fontSize: "14px", lineHeight:" 20px", fontWeight: "normal", fontFamily: "Montserrat", boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"}}>

                <div style={{background: "#0073B1", padding: "10px 0px", textAlign: "center"}}>
                    <a href="https://posla.com" style={{fontSize: "30px", fontWeight: "bold", fontFamily: "Montserrat", color: "#fff", display: "inline-block", textDecoration: "none", padding: "10px"}}>
                        <img src='/images/logo-fff-blue.png' alt="" style={{width: "30px", height: "30px", display: "inline-block", position: "relative", top: "3px"}}/>
                        POSLA.COM
                    </a>
                </div>

                <div style={{backgroundColor: "#f1f1f1", borderBottom: "1px solid #eee"}}>
                    <div style={{textAlign: "center", padding: "15px 0px", margin: "0px 20px"}}>
                        New Order Notification - #1234567890
                    </div>
                </div>

                <div style={{backgroundColor: "#fff", borderBottom: "1px solid #ddd", padding: "30px 20px", textAlign: "justify"}}>
                
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    
                    <br/><br/>
                    <hr style={{margin: "0px", border: "1px solid #eee"}}/>

                    <div style={{color: "#ff940a", textAlign: "center", marginTop: "20px", fontWeight: "bold"}}>
                        Deal Ordered
                    </div>
                   
                    <ul style={{listStyle: "none", padding: "0px", margin: "10px 0px", border: "1px solid #ddd", borderBottom: "none"}}>
                    
                        <li style={{borderBottom: "1px solid #ddd", overflow: "hidden"}}>
                            <div style={{float: "left", width: "80px", height: "80px", marginLeft: "10px",textAlign: "center"}}>
                                <img src='/images/boxes.jpg' alt="qwdqwdqwdqw" style={{maxWidth: "100%", maxHeight: "100%"}} />
                            </div>
                            <div style={{padding: "0px 20px", marginTop: "10px", overflow: "hidden"}}>
                                <div>
                                    qwdqwdqwdqw
                                </div>
                                <div style={{color: "#aaa"}}>
                                    Qty: 1
                                </div>
                                <div>
                                    $999
                                </div>
                            </div>
                        </li>
                
                        <li style={{borderBottom: "1px solid #ddd", overflow: "hidden"}}>
                            <div style={{float: "left", width: "80px", height: "80px", marginLeft: "10px", textAlign: "center"}}>
                                <img src='/images/boxes.jpg' alt="qwdqwdqwdqw" style={{maxWidth: "100%", maxHeight: "100%"}} />
                            </div>
                            <div style={{padding: "0px 20px", marginTop: "10px", overflow: "hidden"}}>
                                <div>
                                    qwdqwdqwdqw
                                </div>
                                <div style={{color: "#aaa"}}>
                                    Qty: 1
                                </div>
                                <div>
                                    $999
                                </div>
                            </div>
                        </li>
                
                    </ul>

                    <div style={{padding: "20px 0 20px", minHeight: "130px"}}>
                        <div style={{width: "49%", minWidth: "250px", margin: "0 0 20px", maxWidth: "400px", verticalAlign: "top", display: "inline-block", overflow: "hidden"}}>
                            <div style={{color: "#ff940a", fontWeight: "bold"}}>Shipping Address</div>
                            <div>
                                <div style={{float: "left", width: "10px", height: "10px", position: "relative", top: "5px", borderRadius: "50%", background: "#ff940a"}}></div>
                                <div style={{padding: "0px 20px", marginTop: "10px", overflow: "hidden"}}>
                                    <div style={{textAlign: "Left"}}>
                                        <div style={{fontWeight: "bold"}}>Lorem Ipsum</div>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        <br/>
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        <br/>
                                        sed diam voluptua.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{width: "49%", minWidth: "250px", margin: "0 0 20px", maxWidth: "400px", verticalAlign: "top", display: "inline-block", overflow: "hidden"}}>
                            <div style={{color: "#ff940a",fontWeight: "bold"}}>Agent Pickup Station</div>
                            <div>
                                <div style={{float: "left", width: "10px", height: "10px", position: "relative", top: "5px", borderRadius: "50%", background: "#ff940a"}}></div>
                                <div style={{padding: "0px 20px", marginTop: "10px", overflow: "hidden"}}>
                                    <div style={{textAlign: "left"}}>
                                        <div style={{fontWeight: "bold"}}>
                                            Lorem Ipsum
                                        </div>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        <br/>
                                        Opening times: Mon - Sat (8am - 6pm)
                                        <br/>
                                        qwdqwdqwdqwqwd
                                        <br/>
                                        <a href="tel:08012345678">0801-234-5678</a>, 
                                        <a href="tel:08012345678">0801-234-5678</a><br/>
                                        <a href="mailto:info@posla.com">info@posla.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <hr style={{margin: "0px", border: "1px solid #eee"}}/>

                    <div style={{color: "#ff940a", textAlign: "center", margin: "20px 0px 10px", fontWeight: "bold"}}>
                        Payment Information
                    </div>

                    <div style={{maxWidth: "400px", margin: "auto", border: "2px solid #eee"}}>
                        <div style={{background: "#fff", padding: "10px"}}>
                            <div style={{width: "50%", float: "left"}}>
                                SubTotal
                            </div>
                            <div style={{overflow: "hidden;"}}>
                                $456
                            </div>
                        </div>
                        <div style={{background: "#eee", padding: "10px"}}>
                            <div style={{width: "50%", float: "left"}}>
                                Shipping Fee
                            </div>
                            <div style={{overflow: "hidden;"}}>
                                $456
                            </div>
                        </div>
                        <div style={{background: "#fff", padding: "10px"}}>
                            <div style={{width: "50%",float: "left"}}>
                                Discount
                            </div>
                            <div style={{overflow: "hidden;"}}>
                                $456
                            </div>
                        </div>
                        <div style={{background: "#eee", padding: "10px"}}>
                            <div style={{width: "50%", float: "left"}}>
                                Tax
                            </div>
                            <div style={{overflow: "hidden;"}}>
                                $0
                            </div>
                        </div>
                        <div style={{background: "#fff", padding: "10px"}}>
                            <div style={{width: "50%", float: "left"}}>
                                Total
                            </div>
                            <div style={{overflow: "hidden;"}}>
                                $456
                            </div>
                        </div>
                    </div>

                    
                </div>
                
                <div style={{fontSize: "12px", padding: "10px 20px", borderTop: "1px solid #eee",textAlign: "center"}}></div>

                <div style={{padding: "5px 0px 8px", fontSize: "12px", color: "#fff", backgroundColor: "#000", textAlign: "center"}}>
                    Copyright © • Posla.com • All Rights Reserved
                </div>
                    

            </div>
            
        </div>
		</>
		)
}
export default EmailSample;