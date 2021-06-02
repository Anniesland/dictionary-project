import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
             <ul className="Synonyms">
                 <br />
                 <br />
                 {props.synonyms.slice(0,1).map(function reduceRight(synonym, index) {
                   return ( <li key={index}>
                       {synonym}
                       </li> ) } )
              }
       </ul> 
      
            )    }
    else {
        return "none";
    }
}