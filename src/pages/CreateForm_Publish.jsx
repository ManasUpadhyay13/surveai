

import React from 'react'
import styled from 'styled-components'
import SurveyRoutes from './SurveyRoutes'

const CreateForm_Publish = () => {
    return (
        <>
        <SurveyRoutes/>
        <PublishConttainer>
        <br></br>
            <div className="publish">
                <div className="heading">
                    <h4>URL</h4>
                </div>

                <div className="link">
                    <i className='bx bx-link-alt'></i>
                    <input type="text" placeholder=' Publish the from to recieve the link' />
                </div>
                <br></br>
                <button>Publish</button>
                
            </div>
            <br></br>
            <div className="qr">
                <div className="heading">
                    <h4>Share your form by QR code</h4>
                </div>
                    <div className="qr-image">
                        <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="qr" />

                    </div>

                <button>Download QR</button>
            </div>
        </PublishConttainer>
        </>
    )
}

export default CreateForm_Publish


const PublishConttainer = styled.div`
font-family: 'Lexend', sans-serif;
    background-color: #F3F4F7;
    display: flex;
    align-items: center;
    justify-content: space-evenly  ;
    flex-direction: column;
    
    .publish{
        width: 50%;
        height: 30vh;
       
        background-color: white;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        .link{
            width: 100%;
            height: 80%;
            background-color: #F3F4F7;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 1px;

            input{
                width: 100%;
                border: none;
                outline: none;
                height: 100%;
                background-color: #F3F4F7;
                padding-left: 10px;
                font-size: 1rem;
            }

            .bx{
                font-size: 1.4rem;
            }

        }

        button{
           
            background-color: #2487ce;
            color: white;
            border:none;
            font-size: 12px;
            padding: 5px 20px;
            border-radius: 5px;
            margin: 0px 0px;
            cursor: pointer;  
            font-family: 'Lexend', sans-serif;
        }
        button:hover{
           
            background-color: #0d6efd;
            color: white;
            border:none;
            font-size: 12px;
            padding: 5px 20px;
            border-radius: 5px;
           
            cursor: pointer;  
        }
    }

    .qr{
        width: 50%;
        min-height: 55vh;
        background-color: white;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        .qr-image{
            width: 100%;
                display: flex;
            align-items: center;
            justify-content: center;
            img{
                 width: 200px;
            }
        }

        button{
            background-color: #2487ce;
            color: white;
            border:none;
            font-size: 12px;
            padding: 5px 20px;
            border-radius: 5px;
            margin: 0px 0px;
            cursor: pointer;  
            font-family: 'Lexend', sans-serif;
        }
        button:hover{
           
            background-color: #0d6efd;
            color: white;
            border:none;
            font-size: 12px;
            padding: 5px 20px;
            border-radius: 5px;
           
            cursor: pointer;  
        }

    }
    
`