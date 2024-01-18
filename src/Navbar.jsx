import React from 'react';
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
   

   return (<nav>
   	<ul className='navigation'>
   		<li className='nav-title'>LearnersProject.exe</li>
   		<li className='home'><Link to='/' style={{textDecoration:'none',color:'grey'}}>Home</Link></li>
   		<li className='profile'><Link to='/profile' style={{textDecoration:'none',color:'grey'}}><CgProfile /></Link></li>
   	</ul>
   </nav>)	
}