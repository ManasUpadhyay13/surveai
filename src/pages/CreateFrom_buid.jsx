import React, { useState } from 'react'
import styled from 'styled-components'

const CreateFrom_buid = () => {
  const [surveyState, setSurveyState] = useState([])


  const addTextAreaBox = () => {
    var textarea = {

    }
  }

  const addMcqBox = () => {
    console.log("mcq");
  }

  return (
    <BuildContainer>

      <AddButtonContainer onClick={addTextAreaBox} >

        <button>
          <i className='bx bx-layer-plus'></i>
        </button>

      </AddButtonContainer>

      <AddButtonContainerTwo onClick={addMcqBox}>

        <button className='addButtonTwo'>
          <i className='bx bx-select-multiple'></i>
        </button>

      </AddButtonContainerTwo>

      <SurveyContainer>
        <div className="survey-name">
          <h1>demo name </h1>
        </div>

        <div className="survey-box-container">

          <div className="survey-box-textarea">

            <input type="text" className="textarea-input" placeholder='Type your question' />
          </div>
          <i className='bx bx-trash'></i>
        </div>
        <div className="survey-box-container">

          <div className="survey-box-mcq">

            <input type="text" className="textarea-input" placeholder='Type your question' />

            <div className="mcq-options">
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
            </div>
          </div>
          <i className='bx bx-trash'></i>
        </div>
        <div className="survey-box-container">

          <div className="survey-box-mcq">

            <input type="text" className="textarea-input" placeholder='Type your question' />

            <div className="mcq-options">
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
              <input type="text" className="single-mcq-option" placeholder='Enter option 1' />
            </div>
          </div>
          <i className='bx bx-trash'></i>
        </div>
        <div className="survey-box-container">

          <div className="survey-box-textarea">

            <input type="text" className="textarea-input" placeholder='Type your question' />
          </div>
          <i className='bx bx-trash'></i>
        </div>
        <div className="survey-box-container">

          <div className="survey-box-textarea">

            <input type="text" className="textarea-input" placeholder='Type your question' />
          </div>
          <i className='bx bx-trash'></i>
        </div>
      </SurveyContainer>


    </BuildContainer>
  )
}

export default CreateFrom_buid


const BuildContainer = styled.div`
  height: 100%;
  min-height: 84vh;
  /* background-color: #ececfc; */
  background-color: #F3F4F7;
  position: relative;
`

const AddButtonContainer = styled.div`
  position: fixed;
  top: 150px;
  left: 70px;
  width: 4%;
  height: 8vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  button{
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: normal;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #C8CEED;
    border-radius: 50%;
  }

  button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: pulse-animation 1s infinite;
  }

  @keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #b4bef1;
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}  

@media (max-width: 1150px) {
  width: 7%;
  height: 10vh;
}
@media (max-width: 800px) {
  top: 110px;
  left: 30px;
}
@media (max-width: 700px) {
  width: 9%;
}
@media (max-width: 550px) {
  width: 12%;
}
@media (max-width: 425px) {
  width: 15%;
}
@media (max-width: 350px) {
  width: 18%;
}
`
const AddButtonContainerTwo = styled.div`
  position: fixed;
  top: 250px;
  left: 70px;
  width: 4%;
  height: 8vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  button{
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: normal;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #C8CEED;
    border-radius: 50%;
  }

  button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: pulse-animation 1s infinite;
  }

  @keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #b4bef1;
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}  

@media (max-width: 1150px) {
  width: 7%;
  height: 10vh;
}
@media (max-width: 800px) {
  top: 110px;
  left: 120px;
}
@media (max-width: 700px) {
  width: 9%;
}
@media (max-width: 550px) {
  width: 12%;
}
@media (max-width: 425px) {
  width: 15%;
}
@media (max-width: 350px) {
  width: 18%;
}
`

const SurveyContainer = styled.div`
  width: 50%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto auto;
  background-color: #F3F4F7;

  .survey-name{
    width: 90%;
    height: 20vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
    border-bottom: 1px solid gray;
    margin-top: 6rem;
  }

  .survey-box-container{
    width: 90%;
    min-height: 20vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border-bottom: 1px solid grey; */

    .survey-box-textarea{
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      input{
        width: 100%;
        height: 50%;
        font-size: 1rem;
        outline: none;
        border: none;
        /* border-bottom: 1px solid gray; */
        padding: 10px;
      }
    }
    .survey-box-mcq{
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 20px;
      flex-direction: column;

      input{
        width: 100%;
        height: 50%;
        font-size: 1rem;
        outline: none;
        border: none;
        /* border-bottom: 1px solid gray; */
        padding: 10px;
      }

      .mcq-options{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        input{
          width: calc(100/3.5);
          font-size: 0.8rem;
        }

        @media (max-width:500px) {
          flex-direction: column;
          margin-top: 1rem;
        }
      }
    }
  }

  .bx{
    font-size: 1rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    /* border: 2px solid red; */

   
  }

  @media (max-width:1150px) {
    width: 70%;
  }
  @media (max-width:800px) {
    width: 90%;
  }
  @media (max-width:600px) {
    width: 100%;
  }

`