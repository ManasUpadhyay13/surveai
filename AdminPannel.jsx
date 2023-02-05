import React, { useState } from 'react'
import styled from 'styled-components'
import AdminPannelHeader from './AdminPannelHeader'
import image from '../images/no survyes to display.jpg'
import Table from 'react-bootstrap/Table';
import SurveyNameAndNote from './InputModals/SurveyNameAndNote';

const AdminPannel = () => {

    const [toggleModal , setToggleModal] = useState(false)

    const [survey, setSurvey] = useState([
       
    ])


    return (
        <AdminPannelContainer>

            {
                toggleModal && (
                    <SurveyNameAndNote toggleModal={toggleModal}    setToggleModal={setToggleModal} />
                )
            }

            <AdminPannelHeader />


            <div className="admin">

                {
                    survey.length === 0 ? (
                        <div className='noSurvey'>
                            <img src={image} alt="" />
                            <h2>No surveys to display</h2>
                            <p>All your surveys will be displayed here.</p>
                            <button onClick={()=>{setToggleModal(true)}}>Create a new survey</button>
                        </div>

                    )
                        :
                        (

                            <div className="allSurveys">
                                <div className="createNewSurvey">
                                    <button >
                                        <i className='bx bx-food-menu'></i>
                                        Create a new survey</button>
                                </div>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Survey Name</th>
                                            <th>Created At</th>
                                            <th>Notes</th>
                                            <th className='actions-heading'>Actions</th>
                                        </tr>
                                    </thead>
                                    {
                                        survey.map((item, index) => {
                                            return (
                                                <tbody key={index} className="singleSurvey">
                                                    <tr>
                                                        <td>
                                                            {index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>this is demo note</td>
                                                        <td className='actions'>
                                                            <i class='bx bx-bookmark' style={
                                                                { marginRight: "15px" }
                                                            }></i>
                                                            <i className='bx bx-edit-alt'  style={
                                                                { marginRight: "15px" }
                                                            }></i>
                                                            <i className='bx bx-trash' ></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </Table>
                            </div>
                        )
                }

            </div>

        </AdminPannelContainer>
    )
}

export default AdminPannel


const AdminPannelContainer = styled.div`

font-family: 'Lexend', sans-serif;
    height: 90vh;
    width: 100%;
    background-color: #F3F4F7;

    .admin{
        width: 100%;
        min-height: 80vh;


        .noSurvey{
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            flex-direction: column;

            img{
                width: 250px;
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

        .allSurveys{
            width: 100%;
            min-height: 80vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            
            .createNewSurvey{
                flex: 1;
                height: 80vh;
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 40px;
                background-color: white;


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


            Table{
                width: 100%;
                height: 100%;
                flex: 5;
                background-color: white;
                padding: 20px;
                border-left: 1px solid gray;
                border-bottom: 1px solid gray;
                box-shadow: 1px 1px 5px rgba(0,0,0,0.2);

                th{
                    color : #4E7699;
                }

                .singleSurvey{

                    .actions{
                        
                    }
                    .bx{
                        cursor: pointer;
                        font-size: 1.3rem;
                    }
                }

            }
        }
               
    }
`