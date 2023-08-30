import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { ModalPage, HomePage, SearchPage, ErrorPage, StatsPage } from './Pages/index.js'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path='/Search' element={<SearchPage />} />
        <Route path='/pokemon/:id' element={<ModalPage />} />
        <Route path='/Stats' element={<StatsPage />} />
      </Route>

      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
