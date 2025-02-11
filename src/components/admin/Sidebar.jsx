//rfce

import { LayoutDashboard, User } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import { SidebarLink } from '../../utils/links';

function Sidebar() {
  return (
    <div className='bg-pink-300 w-48 text-white'>
        {/* Profile */}
        <div className='flex flex-col items-center my-12 gap-2'>
            <User size={48} />
            <p>Profile</p>
        </div>
        {/* Profile */}

        {/* Navlinks */}
        {
        SidebarLink.map((item) => {
                return (
                <div key={item.label}>
            <Link 
            className='flex py-2 px-4 gap-2 
            hover:bg-pink-200 hover:duration-300'
            to={item.link} 
            >
                {item.icon}
                <p>{item.label}</p>         
                
            </Link>
        </div>
                )
            })
        }
        
        {/* Navlinks */}
        
            
        
    </div>
  )
}

export default Sidebar;