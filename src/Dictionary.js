import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
let [keyword, setKeyword]= useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}
function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

   function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey= "563492ad6f9170000100000123698f066fc74fe2acb574b2ca19f583";
    let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers= {Authorization: `Bearer ${pexelsApiKey}`}
    axios.get(pexelsApiUrl, {headers: headers})
    .then(handlePexelsResponse);
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
            <span className="Photos"> <Photos photos={photos} /> </span>  
            <br />
         <span className="keyword"> <em>  {keyword} </em> </span>
         <Results results={results}/>
           
        </div>
    );
}
else {
    load();
    return "Loading...";
}
}