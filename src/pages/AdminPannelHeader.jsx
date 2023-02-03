import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPannelHeader = () => {

   

    return (
        <Container>
            <div className="header">
                <div className="arrange">
                    <DropdownButton id="dropdown-basic-button" title="Arrange Surveys">
                        <Dropdown.Item href="#/action-1">Title [a-z]</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Title [z-a]</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Creation Date</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="search">
                    <i className='bx bx-search-alt'></i>
                    <input className="navbar-input" type="text" placeholder="seach my surveys" />
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
                background-color: #58a0d3;
            }

        }
        
        .search{
            border: 1px solid gray;
            border-radius: 10px;
            width: 16%;
            height: 60%;
            padding: 5px;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .bx{
                font-size: 1rem;
            }

            input{
                border : none;
                outline : none;
                background-color: #F3F4F7;
                margin-left: 10px;
            }
        }
    }
`