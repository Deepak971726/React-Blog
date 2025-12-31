import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import AuthLayout from './components/AuthLayout.jsx'
import { AuthLayout, LoginComponent } from './components/index.js'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import AllPost from './pages/AllPost.jsx'
import Post from './pages/Post.jsx'
// import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login/>
                // <AuthLayout authentication={false}>
                  
                // </AuthLayout>
            ,
        },
        {
            path: "/signup",
            element: <Signup/>
                // <AuthLayout authentication={false}>
                //     <Signup />
                // </AuthLayout>
            ,
        },
        {
            path: "/all-posts",
            element: <AllPost/>
                // <AuthLayout authentication>
                //     {" "}
                //     <AllPost />
                // </AuthLayout>
            ,
        },
        {
            path: "/add-post",
            element: <AddPost/>
                // <AuthLayout authentication>
                    // {" "}
                //     <AddPost />
                // </AuthLayout>
            ,
        },
        {
            path: "/edit-post/:slug",
            element: <EditPost/>
                // <AuthLayout authentication>
                //     {" "}
                //     <EditPost />
                // </AuthLayout>
            
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
