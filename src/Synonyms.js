import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
        return (
            
             <ul className="Synonyms">
                 {props.synonyms.slice(0,1,2).map(function reduceRight(synonym, index ) {
                   return ( <li key={index}>
                       {synonym}
                       </li> ) } )
              }
       </ul> 
      
            )    }
    else {
        return null;
    }
}