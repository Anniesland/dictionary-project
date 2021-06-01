import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
     return (
    <div className="Meaning">
        <h3> {props.meaning.partOfSpeech}</h3>
               {props.meaning.definitions.map(function ( definition, index ) 
           { return ( 
           <div key={index}>
               <br />
       <p> <strong>Definition:</strong>
        {definition.definition}</p>
        <br />
       <p> <strong>Example:</strong>
        <em>{definition.example}</em></p>
        <br />
        Synonym~
       <Synonyms synonyms={definition.synonyms} />
        </div>
    );
})}
</div>
    )
}