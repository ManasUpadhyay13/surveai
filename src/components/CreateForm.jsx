import React from 'react'
import CreateForm_settings from '../pages/CreateForm_settings'
import CreateFrom_buid from '../pages/CreateFrom_buid'
import { Navbar } from '../pages/Navbar'
import SurveyRoutes from '../pages/SurveyRoutes'

const CreateForm = () => {
  return (
    <div>
        <Navbar/>
        <SurveyRoutes/>
        <CreateFrom_buid/>
        <CreateForm_settings/>
    </div>
  )
}

export default CreateForm