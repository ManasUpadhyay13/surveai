import './App.css';
import SurveyAdminPannel from './components/SurveyAdminPannel';
import { Navbar } from './pages/Navbar';
import { Routes, Route } from 'react-router-dom'
import CreateFrom_buid from './pages/CreateFrom_buid';
import CreateForm_settings from './pages/CreateForm_settings';
import CreateForm_Publish from './pages/CreateForm_Publish';
import { SurveyContextProvider } from './Context/SurveyContextProvider';
import { useState } from 'react';


function App() {

  const [surveyId, setSurveyId] = useState("")
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [surveyQuestions, setSurveyQestions] = useState([])
  const [collaborators, setCollaborators] = useState([])
  const [invitee, setInvitee] = useState([])
  const [surveyStatus, setSurveyStatus] = useState()
  const [disableAfter, setDisableAfter] = useState()
  const [multipleResponses, setMultipleResponses] = useState()

  return (
    <>

      <Navbar />

      <SurveyContextProvider.Provider value={{
        surveyId,
        setSurveyId,
        name,
        setName,
        note,
        setNote,
        surveyQuestions,
        setSurveyQestions,
        collaborators,
        setCollaborators,
        invitee,
        setInvitee,
        surveyStatus,
        setSurveyStatus,
        disableAfter,
        setDisableAfter,
        multipleResponses,
        setMultipleResponses
      }}>

        <Routes>

          <Route path='/' element={<SurveyAdminPannel />} />

          <Route path='/createForm' >
            <Route path='build' element={<CreateFrom_buid />} />
            <Route path='settings' element={<CreateForm_settings />} />
            <Route path='publish' element={<CreateForm_Publish />} />

          </Route>



        </Routes>
      </SurveyContextProvider.Provider>

    </>
  );
}

export default App;
