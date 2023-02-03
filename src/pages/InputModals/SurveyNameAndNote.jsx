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
                <Modal.Header closeButton>
                    <Modal.Title>Create a new survey</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Survey Name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter survey name"
                                autoFocus
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Write a note about the survey</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                onChange={(e) => { setNote(e.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" id='validateButton' onClick={validate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default SurveyNameAndNote
