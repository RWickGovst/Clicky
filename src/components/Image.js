import React from "react";

const Image = (props) => {
return (
    <div>
        <img className = 'image'
        onClick={() => props.handleClick(props.id)}
        src={props.image} 
        alt="blah"/>
    </div>
)}
export default Image;