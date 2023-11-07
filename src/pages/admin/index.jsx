import React from 'react'
import axios from '../../libs/axios'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import { Outlet } from 'react-router-dom'

export default function Admin() {

    async function loadData(){
        try {
            const res = await axios.get('/role')
            const data = await res.data

            console.log(data)

        } catch (error) {
            
        }
    }
  return (
    <div>

      <Navbar />
      <Sidebar />
      <div className='content-wrapper'>
      <Outlet />
      </div>
    </div>
  )
}
