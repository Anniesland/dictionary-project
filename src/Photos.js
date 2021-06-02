import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) 
    {
        return (
<section className="Photos">
{props.photos.map(function(photo, index) {
    return  (
        <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
            <img src={photo.src.landscape} key={index} alt="search result"/>
        </a>
 ) }) }

</section>
  )
    }
    else {
        return null;
    }
}