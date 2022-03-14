import { Button, Card,Col } from "react-bootstrap";
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
        <Col className = "d-flex align-items-center justify-content-center col-md-4 col-lg-3 mx-auto g-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.elem.strdrinkthumb} />
                <Card.Body>
                    <Card.Title>{props.elem.strdrink}</Card.Title>
                    <hr></hr>
                    <Card.Text>{(props.elem.comment)?props.elem.comment:<span style={{color:"lightgray"}}>no comment</span>} </Card.Text>
                    <Button variant="primary" onClick={addCommentHandler}>{(props.elem.comment) ? "update comment" : "Add Comment"}</Button>
                    <Button variant="primary" onClick={()=>{props.removeHandler(props.elem.id)}}>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
            <ShowModal elem={props.elem} handleClose={handleClose} addCommentHandler={props.addCommentHandler}show={show}/>
        </>
    );
}

export default FavCard;