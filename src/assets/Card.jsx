import React from 'react'

export default function Card(props){
    return(
        <div className='carddad'>
            
            <div className='imgdiv'>
                <img src={props.imageUrl} />
            </div>
            <div className='textdiv'>
                <div className='topdiv'> <img src ='./smallicon.png'/> 
                <span>{props.location.toUpperCase()}</span>
               <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span className='datespan'>{props.startDate} - {props.startDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
    
}