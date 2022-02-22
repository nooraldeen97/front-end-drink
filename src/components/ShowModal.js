import { Modal, Button } from 'react-bootstrap/';
import { useRef } from 'react';


function ShowModal(props) {

    const commentRef = useRef(null);


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} animation={false}>
                <img width="100%" height="400px" src={props.elem.strdrinkthumb} />
                <Modal.Title>{props.elem.strdrink}</Modal.Title>
                <Modal.Body><input type="text" ref={commentRef} placeholder='Your Comment' /></Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.addCommentHandler(commentRef.current.value, props.elem.id)} variant="primary" >
                        {(props.elem.comment) ? "update comment" : "Add Comment"}
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default ShowModal;