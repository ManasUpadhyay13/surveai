import React, { useEffect, useState , useContext } from 'react'
import styled from 'styled-components'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import SurveyRoutes from './SurveyRoutes';
import { SurveyContextProvider } from '../Context/SurveyContextProvider';

const CreateFrom_buid = () => {


  const [formState, setFormState] = useState("")
  const [questions, setQuestions] = useState([])
  const [singleQuery, setSingleQuery] = useState("")
  const [options, setOptions] = useState([])
  const [startValue, setStartValue] = useState(0)
  const [endValue, setEndValue] = useState(0)
  const [skipValue, setSkipValue] = useState(0)
  const [toggleUpdateSurvey, setToggleUpdateSurvey] = useState(false)


  const { name , note} = useContext(SurveyContextProvider)



  useEffect(() => {



    if (formState === "textarea") {
      console.log(singleQuery);
      const setTextarea = [...questions, {
        "type": "textarea",
        "question": `${singleQuery}`
      }]
      setQuestions(setTextarea)
      setFormState("")
      setSingleQuery("")
    }
    else if (formState === "mcq") {
      console.log(options);
      const setMcqarea = [...questions, {
        "type": "mcq",
        "question": `${singleQuery}`,
        "options": options
      }]
      setQuestions(setMcqarea)
      setFormState("")
    }
    else if (formState === "star") {
      const setStararea = [...questions, {
        "type": "star",
        "question": `${singleQuery}`
      }]
      setQuestions(setStararea)
      setFormState("")
    }
    else if (formState === "scale") {
      const setScalearea = [...questions, {
        "type": "scale",
        "question": `${singleQuery}`,
        "start": `${startValue}`,
        "end": `${endValue}`,
        "steps": `${skipValue}`
      }]
      setQuestions(setScalearea)
      setFormState("")
    }

  }, [formState])


  useState(() => {
    console.log(questions);
  }, [questions])





  const handleSurveyDelete = (index) => {
    const data = [...questions]
    data.splice(index, 1)
    setQuestions(data)
  }


  const handleTextAreaChange = (e, index) => {
    const data = [...questions]
    console.log(e.target.value)
    setQuestions(data)
  }


  const handleSurveyEdit = (index) => {
    const data = [...questions]
    console.log(data[index]);
  }

  return (
    <>
    <SurveyRoutes/>
      <BuildContainer>

        <AddButtonContainer >

          <MyVerticallyCenteredModal setFormState={setFormState} setSingleQuery={setSingleQuery} options={options} setOptions={setOptions} setStartValue={setStartValue} setEndValue={setEndValue} setSkipValue={setSkipValue} />

        </AddButtonContainer>


        <SurveyContainer>
          <div className="survey-name">
            <h1>{name} </h1>
            <p>{note}</p>
          </div>

          {
            questions.map((item, index) => {

              return (
                <div key={Math.random()} className="survey-box-container">

                  {
                    item.type === "textarea" && (
                      <>
                        <div className="survey-box-textarea">

                          <input
                            type="text"
                            className="textarea-input-question"
                            placeholder='Type your question'
                            value={item["question"]}
                            readOnly
                          />
                          <input type="text" className="textarea-input-answer" placeholder='Enter your answer here' disabled />
                        </div>

                        <div className="survey-box-options">
                          <i className='bx bx-trash' onClick={() => { handleSurveyDelete(index) }}></i>
                          <i className='bx bx-edit-alt' onClick={() => { handleSurveyEdit(index) }}  ></i>
                        </div>
                      </>
                    )
                  }
                  {
                    item.type === "mcq" && (
                      <>
                        <div className="survey-box-mcq">

                          <input type="text" className="mcq-input" value={item.question} readOnly />


                          <div className="mcq-options">
                            <FormControl
                              style={{
                                width: '50%',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                margin: "10px",
                              }}
                            >
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                row
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}

                              >
                                {


                                  (item.options).map((option, index) => {
                                    return (
                                      <FormControlLabel key={index} value={option} control={<Radio />} label={option} disabled />
                                    )
                                  })
                                }
                              </RadioGroup>
                            </FormControl>


                          </div>
                        </div>

                        <div className="survey-box-options">
                          <i className='bx bx-trash' onClick={() => { handleSurveyDelete(index) }}></i>
                          <i className='bx bx-edit-alt' onClick={() => { handleSurveyEdit(index) }}  ></i>

                        </div>
                      </>
                    )
                  }
                  {
                    item.type === "scale" && (
                      <>
                        <div className="survey-box-scale">

                          <input type="text" className="survey-box-scale-question" placeholder='Type your question' value={item.question} readOnly />

                          <div className="slider">
                            <input type="text" placeholder='Start value' value={item.start} readOnly />

                            <Slider
                              style={{ width: "250px" }}
                              aria-label="Temperature"
                              defaultValue={Number((item.start + item.end) / 2)}
                              valueLabelDisplay="auto"
                              step={Number(item.steps)}
                              marks
                              min={Number(item.start)}
                              max={Number(item.end)}
                              disabled
                            />

                            <input type="text" placeholder='End value' readOnly value={item.end} />
                          </div>
                        </div>

                        <div className="survey-box-options">
                          <i className='bx bx-trash' onClick={() => { handleSurveyDelete(index) }}></i>
                          <i className='bx bx-edit-alt' onClick={() => { handleSurveyEdit(index) }}  ></i>

                        </div>
                      </>
                    )
                  }
                  {
                    item.type === "star" && (
                      <>
                        <div className="survey-box-rating">

                          <input type="text" className="survey-box-rating-question" placeholder='Type your question' value={item.question} readOnly />

                          <div className="star-container">
                            <Rating
                              name="simple-controlled"
                              value={3}
                              disabled
                            />
                          </div>
                        </div>

                        <div className="survey-box-options">
                          <i className='bx bx-trash' onClick={() => { handleSurveyDelete(index) }}></i>
                          <i className='bx bx-edit-alt' onClick={() => { handleSurveyEdit(index) }}  ></i>

                        </div>
                      </>
                    )
                  }

                </div>
              )
            })
          }

        </SurveyContainer>


      </BuildContainer >
    </>

  )
}

export default CreateFrom_buid


const BuildContainer = styled.div`
  height: 100%;
  min-height: 84vh;
  /* background-color: #ececfc; */
  background-color: #F3F4F7;
  position: relative;
  display: block;
  

  .hide{
    display: none;
  }
`

const AddButtonContainer = styled.div`
  position: absolute;
  top: 70px;
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

const SurveyContainer = styled.div`

  width: 50%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto auto;
  background-color: #F3F4F7;
  margin-bottom : 10px;

  .survey-name{
    width: 90%;
    height: 30vh;
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    margin-top: 2rem;
    flex-direction: column;
    gap: 1rem;
  }

  .survey-box-container{
    width: 90%;
    min-height: 20vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 10px;
    border-left : 10px solid #4285F4;

    .survey-box-textarea{
      flex: 5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input{
        width: 90%;
        height: 40px;
        /* border-radius: 10px; */
        border: none;
        outline: none;
        border-bottom: 1px solid lightgray;
        background-color: white;
        padding : 10px;
        margin: 20px;

      }
      .textarea-input-question{
        border: none;
        /* border-bottom: 1px solid black; */
        border-radius: 0;
        font-weight: 
        bold;
      }

    }

    .survey-box-options{
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      padding-right: 20px;
    }


    .survey-box-mcq{
      width: 95%;
      min-height: 100%;
      display: flex;
      align-items: flex-start;
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
        padding: 10px;
      }

      .mcq-input{
        border-bottom : 1px solid gray;
      }

      .mcq-options{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content:  flex-start;
        
        .mcq-option{
          font-size: 1rem;

        }

      }
      p{
        cursor: pointer;
        margin-left: 10px;
        border: 1px solid black;
        padding: 5px;
        border-radius: 10px;
      }
    }

    .survey-box-rating{
      flex: 5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-direction: column;
      padding: 20px;

      input{
        width:95%;
        height: 40%;
        font-size: 1rem;
        outline: none;
        border: none;
        padding: 10px;
        border-bottom: 1px solid gray;
      }

     
    }


    .survey-box-scale{
      flex: 5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      input{
        width: 90%;
        height: 50px;
        border: none;
        outline: none;
        border-bottom: 1px solid black;
        padding : 10px;
        margin: 20px;

      }

      .slider{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        input{
          width: 10%;
          border: 1px solid gray;
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


const SwitchContainer = styled.div`
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







/*


 <div className="survey-box-container">

          
        <div className="survey-box-container">

          
          <i className='bx bx-trash'></i>
        </div>


        <div className="survey-box-container">

          <div className="survey-box-rating">

            <div className="survey-box-question">
              <input type="text" className="textarea-input" placeholder='Type your question' />
              <i className='bx bx-trash'></i>
            </div>



            <div className="starContainer">
              <form className="rating">
                <label>
                  <input type="radio" name="stars" value="1" />
                  <span className="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="2" />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="3" />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="4" />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="5" />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
              </form>
            </div>

          </div>
        </div>

*/