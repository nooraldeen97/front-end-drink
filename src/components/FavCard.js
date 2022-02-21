import { Button, Card } from "react-bootstrap";
import axios from 'axios';


function FavCard(props) {



    console.log(props)
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.elem.strdrinkthumb} />
                <Card.Body>
                    <Card.Title>{props.elem.strdrink}</Card.Title>
                    <Button variant="primary" onClick={()=>{props.removeHandler(props.elem.id)}}>Remove</Button>
                    <Button variant="primary">Add Comment</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default FavCard;