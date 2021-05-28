import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
let [keyword, setKeyword]= useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

   function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    search();
}

if (loaded) {
    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="search" onChange={handleKeywordChange} />
            </form>
            <br />
          <em>  {keyword} </em>
            <Results results={results}/>
        </div>
    );
}
else {
    load();
    return "Loading...";
}
}