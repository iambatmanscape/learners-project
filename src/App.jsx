import React,{useState,useEffect,createContext} from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import Profile from './Profile'
import call from './apiCall'
import CoursePage from './CoursePage';

export const DataContext = createContext(null);

import './App.css'
export default function App() {
  const [store,setStore] = useState([])
  
  async function fetchData() {
     const data = await call();
     setStore(data)
  }

  useEffect(()=>{
    fetchData()
  },[])




  return(<>
  <DataContext.Provider value={{store,setStore}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/course/:id' element={<CoursePage courses={store}/>}/>
    </Routes>
  </DataContext.Provider>
    
  </>)
}