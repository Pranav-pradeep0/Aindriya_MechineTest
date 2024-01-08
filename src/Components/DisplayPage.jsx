import React, { Fragment } from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'
import Categories from './Home Components/Categories'
import { Route, Routes } from 'react-router-dom'
import SubCategories from './Home Components/SubCategories'
import Assemblies from './Home Components/Assemblies'
import JobDetails from './Home Components/JobDetails'

const DisplayPage = () => {
  return (
    <Fragment>
      <div className=''>
        <Navbar></Navbar>
      </div>
      <div className='content_parent d-flex'>
        <SideMenu></SideMenu>
        <div className='main_parent'>
          <div className='categories_parent'>
            <Routes>
              <Route path='/' element={<Categories></Categories>}></Route>
              <Route path='/subcategories' element={<SubCategories></SubCategories>}></Route>
              <Route path='/assemblies' element={<Assemblies></Assemblies>}></Route>
            </Routes>
          </div>
          <div className='home_divider'></div>
          <div className='job_area_parent'>
            <JobDetails></JobDetails>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default DisplayPage