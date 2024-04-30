import React from 'react'
import { Image } from 'react-bootstrap';

export default function Avatar(props) {
    const imageStyle = {
        width: "200px",
       height:"150px" // Set the width here (e.g., '50px' or '100%')
      };
    
  return (
    <div className=" width-3 d-flex justify-content-center mt-2">
    <Image src={props.imageUrl}  style={imageStyle} />
  </div>
  )
}
