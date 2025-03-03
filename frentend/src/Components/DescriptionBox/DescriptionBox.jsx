import React from "react";
import './DescriptionBox.css'

const DescriptionBox =()=>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilites the 
                    buying and selling of products or services over the Internet.It
                    servers as a virtual market place where business and individual can
                    showcase their products, interact with customers, and conduct
                    transcactions without the need for a physical presences.E-commerce
                    website have gained immense popularity due to their convenice 
                    accessiblity and the global reach they offer.</p>
                    <p>
                        E-commerce websites typically display products or services along with 
                        detailed descriptions, images, prices , and any avaliable variatans
                        (e.g., sizes, colors). Each product usually has its own dedicated page
                        with relavent information. 
                    </p>
            </div>
        </div>
    )
}

export default DescriptionBox;