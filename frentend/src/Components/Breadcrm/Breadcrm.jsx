import React from "react";
import './Breadcrm.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrm = (props) => {
    const {product} = props;

    return(
        <div className="breadcrm">
           HOME <img src={arrow_icon} alt="" />
           SHOP<img src={arrow_icon} alt="" />
           {product.category} <img src={arrow_icon} alt="" />
           {product.name}
        </div>
    )
}

export default Breadcrm;