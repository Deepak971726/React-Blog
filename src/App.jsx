 
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
// import {Header, Footer} from './components/index'
import { Header, Footer, SignupComponent } from './components'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Signup from './pages/Signup'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // const status = useSelector((state)=>state.auth.status)
  
  useEffect(()=>{
    // if(status){
      
    
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
        // setLoading(false)
        console.log("console bol rha hu +",userData)
      }
      else{
        dispatch(logout())
        console.log("console bol rha hu false wala hu",userData)
      }
    })
    .finally(()=> setLoading(false))
    }
    
    // const userData = await authService.getCurrentUser();
    // console.log(userData)
    // if(userData){
    //   dispatch(login({userData}))
    // }
    // else{
    //   dispatch(logout());
    // }
    
    // console.log(loading)
  ,[])
  

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main>
            TODO:<Outlet/>
          </main>
          <Footer/>
          {/* <Signup/> */}
          {/* <SignupComponent/> */}
          
        </div>      
    </div>
  ):null
  
  // return (
  //   <div>
  //     <h1>
  //       this is my new project
  //     </h1>
  //   </div>
  // )
}

export default App
