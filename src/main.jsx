import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import {AddPost,AllPost,EditPost,Home,Post,SignUp} from './pages'
import AuthLayout from './components/AuthLayout.jsx';
import Login from './components/Login.jsx';
// import { AuthLayout,Login } from './components'
import { RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/SignUp",
        element: (
            <AuthLayout authentication={false}>
                <SignUp/>
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post/>,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
