import React from 'react'
import { Link } from 'react-router-dom'
import {Dashboard} from './Dashboard'
import {Home} from './Home'
export const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-blue-300 p-10 text-2xl'>
            <div className=''>Logo</div>
            <ul className='d flex gap-20'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/dashboard">DASHBOARD</Link></li>
            </ul>
    </div>
    </>
  )
}
