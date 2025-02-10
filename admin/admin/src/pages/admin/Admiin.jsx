import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Listproduct from '../../components/listproduct/Listproduct.jsx'
import Addproduct from '../../components/addproduct/Addproduct.jsx'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path="/listproduct" element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
