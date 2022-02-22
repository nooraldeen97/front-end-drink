import { Button, Card } from "react-bootstrap";
import "./Favorite.css";
import ShowModal from "./ShowModal";
import React, { useState } from 'react';


function FavCard(props) {

    const [show, setShow] = useState(false);

    function handleClose(){
        setShow(false);
    }

    function addCommentHandler(){
        setShow(true);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.elem.strdrinkthumb} />
                <Card.Body>
                    <Card.Title>{props.elem.strdrink}</Card.Title>
                    <hr></hr>
                    <Card.Text>{(props.elem.comment)?props.elem.comment:<span style={{color:"lightgray"}}>no comment</span>} </Card.Text>
                    <Button variant="primary" onClick={addCommentHandler}>Add Comment</Button>
                    <Button variant="primary" onClick={()=>{props.removeHandler(props.elem.id)}}>Remove</Button>
                </Card.Body>
            </Card>
            <ShowModal elem={props.elem} handleClose={handleClose} addCommentHandler={props.addCommentHandler}show={show}/>
        </>
    );
}

export default FavCard;