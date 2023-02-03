import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

function MyVerticallyCenteredModal({ setFormState, setSingleQuery, setOptions, options, setStartValue, setEndValue, setSkipValue }) {
    const [show, setShow] = useState(false);
    const [toggleState, setToggleState] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var optionCount = 2;

const handleOptionInput = (e, index) => {
        const data = [...options]
        data[index] = e.target.value
        setOptions(data)
    }

    const handleAddOtherOption = () => {
        const newOption = document.createElement("input")
        newOption.setAttribute("placeholder", "Type option")
        newOption.setAttribute("type", "text")
        newOption.onchange = (e) => {
            // console.log(e.target.value);
            handleOptionInput(e, optionCount)
        }
        document.querySelector(".options").appendChild(newOption)
        optionCount++;
    }

    const validate = () =>{

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <i className='bx bx-list-plus'></i>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select any one</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <div className='option'
                            onClick={() => { setToggleState(1) }}>
                            <i className='bx bx-text'></i>
                            <p> Text Area  </p>
                        </div>
                        <div className={toggleState === 1 ? "inputArea show" : "inputArea hide"}>
                            <input type="text" placeholder='Type your question here'
                                onChange={(e) => { setSingleQuery(e.target.value) }}
                            />
                            <div className="button">
                                <button onClick={() => {
                                    setFormState("textarea")
                                    setToggleState(0)
                                    handleClose()
                                }}>Save</button>
                                <button onClick={() => { setToggleState(0) }}>Cancel</button>
                            </div>

                        </div>
                        <div className='option'
                            onClick={() => { setToggleState(2) }}
                        >
                            <i className='bx bx-select-multiple' ></i>
                            <p> Multiple Choice  </p>
                        </div>
                        <div className={toggleState === 2 ? "mcqArea show" : "mcqArea hide"}>
                            <input type="text" placeholder='Type your question here'
                                onChange={(e) => { setSingleQuery(e.target.value) }}
                            />
                            <div className="options">
                                <input type="text" name={`option${optionCount}`} placeholder='Type option' onChange={(e) => { handleOptionInput(e, 0) }} />
                                <input type="text" name={`option${optionCount}`} placeholder='Type option' onChange={(e) => { handleOptionInput(e, 1) }} />
                                <input type="text" name={`option${optionCount}`} placeholder='Type option' onChange={(e) => { handleOptionInput(e, 2) }} />
                                <input type="text" name={`option${optionCount}`} placeholder='Type option' onChange={(e) => { handleOptionInput(e, 3) }} />
                            </div>
                            {/* <p onClick={handleAddOtherOption} >Add other option</p> */}
                            <div className="button">
                                <button onClick={() => {
                                    setFormState("mcq")
                                    setToggleState(0)
                                    handleClose()
                                }}>Save</button>
                                <button onClick={() => { setToggleState(0) }}>Cancel</button>
                            </div>

                        </div>
                        <div className='option'
                            onClick={() => { setToggleState(3) }}
                        >
                            <i className='bx bxs-star-half' ></i>
                            <p> Star Rating  </p>
                        </div>
                        <div className={toggleState === 3 ? "inputArea show" : "inputArea hide"}>
                            <input type="text" placeholder='Type your question here'
                                onChange={(e) => { setSingleQuery(e.target.value) }}
                            />

                            <div className="button">
                                <button onClick={() => {
                                    setFormState("star")
                                    setToggleState(0)
                                    handleClose()
                                }}>Save</button>
                                <button onClick={() => { setToggleState(0) }}>Cancel</button>
                            </div>

                        </div>
                        <div className='option'
                            onClick={() => { setToggleState(4) }}
                        >
                            <i className='bx bx-ruler' ></i>
                            <p> Scale  </p>
                        </div>
                        <div className={toggleState === 4 ? "inputArea show" : "inputArea hide"}>
                            <input type="text" placeholder='Type your question here'
                                onChange={(e) => { setSingleQuery(e.target.value) }}
                            />
                            <div className="components">
                                <input type="number" placeholder='Star value' onChange={(e) => { setStartValue(e.target.value) }} />
                                <input type="number" placeholder='End value' onChange={(e) => { setEndValue(e.target.value) }} />
                                <input type="number" placeholder='Skip value' onChange={(e) => { setSkipValue(e.target.value) }} />
                            </div>

                            <div className="button">
                                <button onClick={() => {
                                    setFormState("scale")
                                    setToggleState(0)
                                    handleClose()
                                }}>Save</button>
                                <button onClick={() => { setToggleState(0) }}>Cancel</button>
                            </div>

                        </div>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyVerticallyCenteredModal


const Container = styled.div`
    width: 100%;
    min-height: 35vh;   
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: column  ;

    .option{
        flex: 1;
        width: 100%;
        min-height: 8vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1rem;
        padding-left: 160px;
        border: 1px solid gray;
        margin: 5px;
        cursor: pointer;
        gap: 1rem;

        .bx,p{
            font-size: 1.3rem;
        }
        p{
            margin: auto 0      ;
        }

        &:hover{
            box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
    }

    .inputArea{
        width: 90%;
        height: 21vh;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        flex-direction: column;

        input[type = "text"]{
            width: 100%;
            height: 8vh;
            padding: 20px;
        }

       .components{
        display: flex;
        align-items: center;
        justify-content: space-between;

        input{
            width: 30%;
            margin: 10px;
            padding: 5px;
        }
       }
    }
    .mcqArea{
        width: 90%;
        min-height: 15vh;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        flex-direction: column;

        input[type = "text"]{
            width: 100%;
            height: 8vh;
            padding: 20px;
        }

      
    }

    .options{
        width: 100%;

        input[type="text"]{
            margin: 10px;
            height: 4vh;
            width: 40%;
        }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        

        button{
            margin: 10px;
            cursor: pointer;
            width: 20%;
            border: none;
            outline : none;
            background-color: #C8CEED;
            padding: 5px;
            border-radius: 10px;

            &:hover{
                color: white;
                background-color: #2487CE;
            }
        }
    }
    p{
        cursor: pointer;
        font-size: 0.8rem;
    }

    .show{
        display: block;
    }

    .hide{
        display: none;
    }
`




/*

<Container>
                        <div className='option'
                            onClick={() => {
                                setFormState("textarea")
                                handleClose()
                            }}>
                            <i className='bx bx-text'></i>
                            <p> Text Area  </p>
                        </div>
                        <div className='option'
                            onClick={() => {
                                setFormState("mcq")
                                handleClose()
                            }}
                        >
                            <i className='bx bx-select-multiple' ></i>
                            <p> Multiple Choice  </p>
                        </div>
                        <div className='option'
                            onClick={() => {
                                setFormState("star")
                                handleClose()
                            }}
                        >
                            <i className='bx bxs-star-half' ></i>
                            <p> Star Rating  </p>
                        </div>
                        <div className='option'
                            onClick={() => {
                                setFormState("scale")
                                handleClose()
                            }}
                        >
                            <i className='bx bx-ruler' ></i>
                            <p> Scale  </p>
                        </div>
                    </Container>

*/