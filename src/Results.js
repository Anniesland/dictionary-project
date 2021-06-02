import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Container">
            <div className="Box">
        <div className="Phonetics">
             {props.results.phonetics.map(function ( phonetic, index ) 
           {return (<div key={index}> <Phonetic phonetic={phonetic} /> </div>) } ) }
           </div>
           </div> <br />
           <div className="Box">
        <div className="Results">
           {props.results.meanings.map(function ( meaning, index ) 
           {return ( <div key={index}> <Meaning meaning={meaning} /> </div>)    
             } ) }
             <br />
             </div>  
             </div>
        </div> 
    )
} else {
    return null;
}
}