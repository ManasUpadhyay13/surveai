import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { SurveyContextProvider } from '../../Context/SurveyContextProvider';
import Toast from '../../Toast/Toast';

function SurveyNameAndNote({ toggleModal, setToggleModal }) {

    const navigate = useNavigate()

    const { name, note, setName, setNote } = useContext(SurveyContextProvider)


    const handleClose = () => setToggleModal(false);

    useEffect(() => {
        setName("")
        setNote("")
        document.getElementById("validateButton").disabled = true;
    }, [])

    useEffect(() => {
        if ( note != "") {
            document.getElementById("validateButton").disabled = false;
        }
    },[note])

    const validate = () => {

        setToggleModal(false)
        navigate("/createForm/build")
    }

    return (
        <>

            <Modal show={toggleModal} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title ><p style={{color: "#2487ce",fontSize  : "15px" }}>Create a new survey</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control
                                type="email"
                                placeholder="Survey Name"
                                
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                          
                            <Form.Control as="textarea" rows={3}
                             placeholder="Notes"
                                onChange={(e) => { setNote(e.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
                    <Button variant="primary"  id='validateButton' onClick={validate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default SurveyNameAndNote

    