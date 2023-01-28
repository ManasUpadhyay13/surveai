import React,{useState} from 'react'
import styled from 'styled-components'

const CreateForm_settings = () => {
    const [toggleState , setToggleState] = useState(1)

 
    return (
        <SettingContainer>

            <div className="toggleOptions">

                <div className= {toggleState === 1 ? "singleToggleOption active" : "singleToggleOption"}
                onClick={() => {setToggleState(1)}}
                >
                    <div className="icon">
                        <i className='bx bx-cog'></i>
                    </div>
                    <div className="name">
                        <p>Form Status</p>
                    </div>
                </div>

                <div className= {toggleState === 2 ? "singleToggleOption active" : "singleToggleOption"}
                onClick={() => {setToggleState(2)}}
                >
                    <div className="icon">
                        <i className='bx bx-envelope' ></i>
                    </div>
                    <div className="name">
                        <p>Email Notification</p>
                    </div>
                </div>

                <div className= {toggleState === 3 ? "singleToggleOption active" : "singleToggleOption"}
                onClick={() => {setToggleState(3)}}
                >
                    <div className="icon">
                        <i className='bx bx-message-rounded-add'></i>
                    </div>
                    <div className="name">
                        <p>Add Collaborators</p>
                    </div>
                </div>
                <div className= {toggleState === 4 ? "singleToggleOption active" : "singleToggleOption"}
                onClick={() => {setToggleState(4)}}
                >
                    <div className="icon">
                        <i className='bx bx-select-multiple' ></i>
                    </div>
                    <div className="name">
                        <p>Multiple Response</p>
                    </div>
                </div>
                <div className= {toggleState === 5 ? "singleToggleOption active" : "singleToggleOption"}
                onClick={() => {setToggleState(5)}}
                >
                    <div className="icon">
                        <i className='bx bx-save' ></i>
                    </div>
                    <div className="name">
                        <p>Save and Publish</p>
                    </div>
                </div>
            </div>

            <div className="toggleContainer">
                <div className= {toggleState ===1 ? "singleToggleContainer toggleActive" : "singleToggleContainer"}>
                    {/* form status */}


                    <div className="fs-container">
                        <h3>Form Status</h3>
                        <p>You can disable the form right now, or you can disable on a particular date.</p>
                        <div className="fs-input">
                            <select name="" id="">
                                <option value="">Enable</option>
                                <option value="">Disable</option>
                            </select>

                        </div>
                        <button>Save</button>
                    </div>
                </div>
                <div className= {toggleState ===2 ? "singleToggleContainer toggleActive" : "singleToggleContainer"}>email</div>
                <div className= {toggleState ===3 ? "singleToggleContainer toggleActive" : "singleToggleContainer"}>add</div>
                <div className= {toggleState ===4 ? "singleToggleContainer toggleActive" : "singleToggleContainer"}>multiple</div>
                <div className= {toggleState ===5 ? "singleToggleContainer toggleActive" : "singleToggleContainer"}>save</div>
            </div>

        </SettingContainer>
    )
}

export default CreateForm_settings


const SettingContainer = styled.div`
    width: 100%;
    min-height: 84vh;
    display: flex;

    .toggleOptions{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        

        .singleToggleOption{
            width: 100%;
            height: 12vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #3F4652;
            color: white;
            font-weight: normal;
            cursor: pointer;


            &:hover{
            background-color: #ececfc;
            color: black;
        }


            .icon{
                flex: 1;
                height: 100%;
                display: flex;
                align-items  : center;
                justify-content: flex-end;
                font-size: 1.5rem;

                .bx{
                    font-weight: normal;
                }
            }
            
            .name{
                flex: 3;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: 20px;
                font-size: 1.4rem;
            }
        }

        .active{
            background-color: #ececfc;
            color: black;
        }
    }

    .toggleContainer{
        flex: 3;
        background-color: #F3F4F7;
        display: flex;
        align-items: center;
        justify-content: center;

        .singleToggleContainer{
            display: none;
            height: 50%;
            width: 70%;

            .fs-container{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                gap: 2rem;
                flex-direction: column;
                padding: 30px;
                background-color: white;

                .fs-input{
                    width: 90%;

                    select{
                        width: 100%;
                        font-size: 1rem;
                    }

                    option{
                        border: none;
                        border-radius: 0;
                    }
                }
            }
        }

        .toggleActive{
            display: block;
        }
    }
`