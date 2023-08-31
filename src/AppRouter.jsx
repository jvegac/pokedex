import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import {  HomePage, ErrorPage, StatsPage } from './Pages/index.js'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path='/Stats' element={<StatsPage />} />
      </Route>

      <Route path='Error' element={<ErrorPage />} />
    </Routes>
  )
}
