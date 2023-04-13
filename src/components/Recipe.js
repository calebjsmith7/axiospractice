import React from "react";

export default function Recipe (props){
    return(
        <>
            <img style={{height: 200, width: 200}} src={props.thumbnail}/>
            <h2>{props.title}</h2>
            <em style={{padding: '10%', paddingTop: 10}}>{props.instructions}</em>
            <div style={{paddingBottom: 300}}/>
        </>
    )
}