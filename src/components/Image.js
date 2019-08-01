import React from "react";

const Image = props => (
    <div
        onClick={() => props.handleClick(props.id)}
        style={{backgroundImage: `url("${props.image}")`}}
    />
)
export default Image;