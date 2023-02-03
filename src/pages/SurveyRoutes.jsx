import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SurveyRoutes = () => {

    const [activeRoute, setActiveRoute] = useState(0)

    return (
        <SurveyRoutesContianer>
            <ul>
                <li
                    className={activeRoute === 1 ? "active" : ""}
                    onClick={() => { setActiveRoute(1) }}
                >
                    <Link to="/createForm/build"
                    >
                        Build
                    </Link>
                </li>

                <li
                    className={activeRoute === 2 ? "active" : ""}
                    onClick={() => { setActiveRoute(2) }}
                >
                    <Link
                        to='/createForm/settings'>Settings</Link></li>

                <li
                    className={activeRoute === 3 ? "active" : ""}
                    onClick={() => { setActiveRoute(3) }}
                ><Link to='/createForm/publish'>Publish</Link></li>
            </ul>
        </SurveyRoutesContianer>
    )
}

export default SurveyRoutes


const SurveyRoutesContianer = styled.div`
    width: 100%;
    height: 6vh;
    /* background : #2487CE; */
    border: 1px solid gray;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

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
        color: black;
        text-decoration: none;
        font-size: 1.2rem;
        @media (max-width: 940px) {
            gap: 1rem;
        }
    }

    .active{
        background : #2487CE;
        a{
            
            color: white;
        }
    }
    
    li:hover{
        background : #2487CE;
        a{
            
            color: white;
        }
    }

`