import React, {useState} from "react";
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        console.log(response);
        setPhotos(response.data.photos);
    }
    function handleKeywordChange(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }
    function search(){
         let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey="563492ad6f91700001000001657bc97299a74eb9aea896fb04880021";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers={"Authorization": `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers }).then(handlePexelsResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    if (loaded){
        return <div className="Dictionary">
        <section>
            <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue="sunset"/>
        </form>
        </section>
        
        <Results results={results}/>
        <Photos photos={photos}/>
    </div>;
    }else{
        load();
        return "Loading...";
    }
   
}