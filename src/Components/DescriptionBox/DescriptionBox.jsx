import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">Description</div>
            <div className="descriptionbox-navbox fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>An e-coomerce website is an online platform that facilitates the buying and selling of products or services over internet. It serves as a virtual market place where business and individuals can showcase their products, interacts with costumers and conduct transactions withput the need for a physical presence. E-commerce websites have gained immense popularity due to their convineince, accessibility, and the global reach they offers.</p>
            
            <p>E-commerce websites typically display product or services along with detailed description, images, prices and any available variations (e.g: color, size). Each product usually has its own dedicated page with relevant information.</p>
        </div>

    </div>
  )
}

export default DescriptionBox
