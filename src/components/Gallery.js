
import React from "react"

export default function Gallery(props){
    return (
        <div>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}


