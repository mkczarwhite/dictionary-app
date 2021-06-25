import React from "react";
import "./Phonetics.css";

export default function Phonetic (props){
    return(
        <div className="Phonetic">
            <div className="row">
                <div className="col text-center">
                <a href={props.phonetic.audio}target="_blank" rel="noreferrer">Listen</a>{props.phonetic.text}
                </div>
            </div> 
        </div>
    )
}