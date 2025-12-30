 
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
        // setLoading(false)
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
    
    // console.log(loading)
  },[])
  

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main>
            TODO:{/* <Outlet/> */}
          </main>
          <Footer/>
          
        </div>      
    </div>
  ):(
    <div><h1>Page not found</h1></div>
  )
  
  // return (
  //   <div>
  //     <h1>
  //       this is my new project
  //     </h1>
  //   </div>
  // )
}

export default App
