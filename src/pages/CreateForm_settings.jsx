import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { SurveyContextProvider } from '../Context/SurveyContextProvider'
import SurveyRoutes from './SurveyRoutes'

const CreateForm_settings = () => {

    const { collaborators, invitee, surveyStatus,  disableAfter,  multipleResponses } = useContext(SurveyContextProvider)


    return (
        <>
            <SurveyRoutes />
            <SettingContainer>

                <div className="toggleContainer">
                    <div className="singleToggleContainer">
                        <div className="heading">
                            <span><i className='bx bx-cog' ></i></span>
                            <h3>Form settings</h3>
                        </div>


                        <div className="one">


                            <div className="heading">
                                <h3>Form status</h3>
                                <p>Control the status of the form for the public </p>
                            </div>
                            <SwitchContainer 
                            onClick={()=>{
                                console.log("clicked");
                            }}
                            >
                                <label className="switch">
                                    <input type="checkbox" 
                                    />
                                    <div className="slider"></div>
                                </label>
                            </SwitchContainer>
                        </div>

                        <div className="one">


                            <div className="heading">
                                <h3>Disable After  </h3>
                                <p>Disable the form at a given date </p>
                            </div>
                            <SwitchContainer>
                                <input type="date" className='datePicker' />
                            </SwitchContainer>
                        </div>

                        <div className="two">

                            <div className="heading">
                                <h3>Multiple Responses</h3>
                                <p>Controls if you want multiple response from a same user </p>
                            </div>
                            <SwitchContainer>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <div className="slider"></div>
                                </label>
                            </SwitchContainer>
                        </div>

                        <button>Save settings</button>
                    </div>
                    <div className="singleToggleContainer">
                        <div className="heading">
                            <span><i class='bx bx-envelope' ></i></span>
                            <h3>Email settings</h3>
                        </div>

                        <div className="addColaborators">
                            <div className="heading">
                                <h3>Add Collaborators</h3>
                                <p>Add ohter people as admin of this form.Type the email address of the persons septrated by semiColon (;) <br /> <b> Example </b>: demo1@gmail.com;demo2@gmail.com </p>
                            </div>
                            <div className='inputArea'>
                                <input type="text" className='addColabrator' />
                            </div>
                        </div>
                        <div className="invitePeople">
                            <div className="heading">
                                <h3>Invite People</h3>
                                <p>Invite other people to fill this form.Type the email address of the persons septrated by semiColon (;) <br /> <b> Example </b>: demo1@gmail.com;demo2@gmail.com </p>
                            </div>
                            <div className='inputArea'>
                                <input type="text" className='addColabrator' />
                            </div>
                        </div>
                        <button>Save settings</button>
                    </div>
                </div>

            </SettingContainer>
        </>

    )
}

export default CreateForm_settings


const SettingContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;

    .toggleContainer{
        flex: 1;
        background-color: #F3F4F7;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .singleToggleContainer{
            min-height: 40vh;
            width: 50%;
            margin: 40px;
            background-color: white;
            box-shadow:   1px 1px 5px #DEE2E6;
            padding: 10px;
            display: flex;
            flex-direction: column;
            
            .heading{
                display: flex;
                align-items: center ;
                justify-content: flex-start;
                margin-right: 20px;

                .bx{
                    width: 40px;
                    height: 30px;
                    font-size: 1.5rem;
                    margin-right: 10px;
                    margin-left: 10px;
                    background-color: #2487CE;
                    color: white;
                    border-radius : 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .one,.two{
                flex: 2;
                display: flex;
                align-items: center;
                justify-content: start;
                padding: 30px;
                padding-right: 200px;

                .heading{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                }
            }

            button{
                width: 120px;
                height: 40px;
                border: none;
                outline : none;
                color: white;
                font-size: 1rem;
                border-radius: 10px;
                cursor: pointer;
                background-color: #2487CE;
                
                &:hover{
                    background-color: #1d6da6;
                }
            }

            .addColaborators, .invitePeople{
                flex: 2;
                margin: 30px;
                display: flex;

                .heading{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .inputArea{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 400px;

                    input{
                        width: 100%;
                        height: 40%;
                        border: none;
                        outline: none;
                        border: 1px solid gray;
                        border-radius : 10px;
                        padding: 10px;
                    }
                }
            }

        }
    }
`


const SwitchContainer = styled.div`
border: 2px solid red;
    .switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  outline: none;
}
.switch input {
  position: absolute;
  top: -99999px;
  left: -99999px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.datePicker{
    background-color: #2487CE;
    width: 165px;
    height: 41px;
    padding: 15px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    font-family: "Roboto Mono",monospace;
    color: #ffffff;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 50px;
    border-radius: 5px;
}
::-webkit-calendar-picker-indicator{
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;

}

`