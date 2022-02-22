import { Card } from "react-bootstrap";
import React, { useState } from 'react';
import "./button.css";
import axios from 'axios';



function HomeCard(props) {

    const [flag, setFlag]=useState(false);

    function addToFavHandler(obj){
        axios.post("https://drink-store.herokuapp.com/addToFav",obj)
        .then(()=>{console.log("added successfully")})
        .catch((error)=>{console.log(error)})

        if(flag){
            setFlag(false)
        }else{
            setFlag(true)
        }
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.elem.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{props.elem.strDrink}</Card.Title>
                    <p  id="btn" onClick={()=>{if(!flag)addToFavHandler(props.elem)}} >{(flag)?<span>❤️ Added</span>:<span>🖤 Add to favorite</span>} </p>
                </Card.Body>
            </Card>
        </>
    );
}

export default HomeCard;

