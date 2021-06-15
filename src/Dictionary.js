import React, {useState} from "react";
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [results, setResults]=useState({});
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function handleKeywordChange(event){
        event.preventDefault();
        setKeyword(event.target.value);

    }
    function search(event){
        event.preventDefault();

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
        <Results results={results}/>
    </div>;
}