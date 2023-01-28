import React from 'react'
import styled from 'styled-components'

const SurveyRoutes = () => {
    return (
        <SurveyRoutesContianer>
            <ul>
                <li className='active'><a href="">Build</a></li>
                <li><a href="">Settings</a></li>
                <li><a href="">Publish</a></li>
            </ul>
        </SurveyRoutesContianer>
    )
}

export default SurveyRoutes


const SurveyRoutesContianer = styled.div`
    width: 100%;
    height: 6vh;
    background : #2487CE;

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        @media (max-width: 940px) {
            gap: 3rem;
        }
    }
    
    li{
        list-style: none;
        cursor: pointer;
        height: 100%;
        width: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        @media (max-width: 940px) {
            width: 11%;
        }
        @media (max-width: 700px) {
            width: 15%;
        }
        @media (max-width: 500px) {
            width: 20%;
        }
    }

    a{
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        @media (max-width: 940px) {
            gap: 1rem;
        }
    }

    .active{
        background-color: #234a7e;
    }
    
    li:hover{
        background-color: #234a7e;
    }

`