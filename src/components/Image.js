import React from "react";

const Image = (props) => {
    console.log(props);
            return (
    <img className = 'image' onClick={() => props.handleClick(props.id)}
            src={props.image} 
            alt="blah"/>
            )
}
export default Image;