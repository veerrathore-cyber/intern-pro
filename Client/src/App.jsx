import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './Layout/AppLayout'
import Studentscreen from './Screen/Studentscreen'
import Dashboardscreen from './screen/Dashboardscreen'
import Staffscreen from './Screen/Staffscreen'
import Teacherscreen from './Screen/Teacherscreen'

function App() {
  return (
    <>
    <BrowserRouter>

          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboardscreen />}/>
              <Route path="student" element={<Studentscreen />}/>
              <Route path="teacher" element={<Teacherscreen />}/>
              <Route path="staff" element={<Staffscreen />}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </>

)


}
export default App