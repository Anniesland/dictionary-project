import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword]= useState("");
let [results, setResults]= useState(null);

function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
}

   function search(event) {
    event.preventDefault();
    alert (`searching for ${keyword}`);
    }

    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/home"
    axios.get(apiUrl).then(handleResponse);

function handleKeywordChange(event){
    setKeyword(event.target.value);
}
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="search" onChange={handleKeywordChange} />
            </form>
            <br />
          <em>  {keyword} </em>
            <Results results={results}/>
        </div>
    );
}
