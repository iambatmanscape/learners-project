import React,{useState,useRef,useContext} from 'react';
import Card from './Card'
import {Link} from 'react-router-dom'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import img1 from './assets/card-img-1.jpg'
import img2 from './assets/card-img-2.jpg'
import img3 from './assets/card-img-3.jpg'
import img4 from './assets/card-img-4.jpg'
import img5 from './assets/card-img-5.jpg'

import {DataContext} from './App';
export default function Home() {
	const {store,setStore,select,setSelect} = useContext(DataContext);
	const [showSearch,setShowSearch] = useState(false)

	function search() {
         setShowSearch(prev=>prev=!prev);
	}
	const imageArr=[img1,img2,img3,img4,img5]


	return (<div className='container'>
		<div className='home-bar'>
			<h2 className='home-header'>
				Available Courses
			</h2>
			<div className='search-input'>
			    <HiMiniMagnifyingGlass className='icon search-icon' onClick={search}/>
			    {showSearch &&
			    <input autoFocus type='search' className='search' name='q' placeholder='search...'/>
			}
			</div>
		</div>
		<hr style={{marginTop:'0.8rem'}}/>

		<div className='card-container-3'>
			 {(store.length>0) && store.map((entry,i)=><Link to={`/course/${i+1}`} style={{textDecoration:'none'}}key={i+1}><Card 
        title={entry.name}
        image={imageArr[i]}
        content={entry.description}
        author={entry.instructor}
        button={false}
      /></Link>)}
      
		</div>

	</div>)
}