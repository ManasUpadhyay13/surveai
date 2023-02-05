import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPannelHeader = () => {

   

    return (
        <Container>
            <div className="header">
               
                <div className="search">
                    <i className='bx bx-search-alt'></i>
                    <input className="navbar-input" type="text" placeholder="seach my surveys" />
                </div>
                <div className="arrange">
                    <DropdownButton id="dropdown-basic-button" title="Arrange Surveys">
                        <Dropdown.Item href="#/action-1">Title [a-z]</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Title [z-a]</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Creation Date</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

            
        </Container>
    )
}

export default AdminPannelHeader

const Container = styled.div`
    width: 100%;
    height: 10vh;
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        gap: 2rem;
        padding-right: 20px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

        .arrange{
            #dropdown-basic-button{
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
            #dropdown-basic-button:hover{
                   
                background-color: #0d6efd;
                color: white;
                border:none;
                
                font-size: 12px;
                padding: 5px 20px;
                border-radius: 5px;
               
                cursor: pointer;  
            }

        }
        
        .search{
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            border-radius: 3px;
            width: 70%;
            height: 60%;
            margin-left:10px;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: #ffffff;

            .bx{
                font-size: 1rem;
            }

            input{
                width: 100%;
                border : none;
                outline : none;
                background-color: #ffffff;
                margin-left: 10px;
            }
        }
    }
`