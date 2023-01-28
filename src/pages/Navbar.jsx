import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <Container>
      <h1 className="logo">Surveai</h1>
      {/* <div className="navbar-search">
        <input className="navbar-input" type="text" placeholder="seach my surveys" />
        <button className="survey-header-button">
          <i className='bx bx-search-alt'></i>
        </button>
      </div> */}
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 10vh;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
.logo {
    font-weight: normal;
    font-size: 2rem;
}

.navbar-search {
    width: 20%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.navbar-search input {
    background-color: #f3f3fe;
    border: none;
    outline: none;
    height: 60%;
    padding: 20px;
    border-radius: 10px;
}

.survey-header-button {
    width: 100%;
    height: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #C8CEED;
    border-radius: 10px;
    outline: none;
    border: none;
    border: 1px solid gray;
    }


`
