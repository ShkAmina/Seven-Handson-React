import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Table from './Table'
import Edit from './Edit'
import store from './store'
import Home from './Home'
import Contact from './Contact'
import Addnew from './Addnew'
import "./navbar"
const App=() =>{
  

  return (
    <>
    <div className='background'>
     <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Table/>}/>
        <Route path="/addnew" element={<Addnew />}/>
        {/* <Link to='/contact'className='text'>Contact</Link> */}
        <Route path='/editStudent' element={<Edit/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
        <Route/>
      </Routes>
      </BrowserRouter>
     </Provider>
     </div>
    </>
  )
}

export default App
