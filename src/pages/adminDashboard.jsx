import React from 'react'
import '../dashboard.css'
import logo from '../assets/images/logo.png'
import TopMenuOverview from '../components/topMenuOverview';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  
  return (
    <div className='dashboard'>
      <div className="side-menu-bar">
        
        <div className="logo-dash">
          <img src={logo} alt="" />
          <h4>Dashboard</h4>
        </div>
        <hr/>
        <div className="links">
          <Link>Products</Link>
          <Link>Orders</Link>
          <Link>Sales</Link>
          <Link>Reports</Link>
        </div>
      </div>
      <TopMenuOverview/>
      <div className="outlet-container">

      </div>
    </div>
  )
}

export default AdminDashboard