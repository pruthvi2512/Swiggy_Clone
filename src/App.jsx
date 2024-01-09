import Header from './header'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Body from './body'
import Footer from './footer'
import { useState ,useEffect } from 'react'
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'
import About from './about'
import Restmenu from './restmenu'
import { Provider } from 'react-redux'
import Store from './assets/store'
import Cart from './Cart'
// import data from './assets/data'


function App() {
 
 
  return (
    <><Provider store={Store}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider> 
    </>
  )
}
const approuter=createBrowserRouter([
 
 {
   path:"/",
   element:<App/>,
   children:[
    { 
      path:"/about",
       element:<About/>
      
      },
      {
        path:"/contact",
        element:<Element/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurents/:id",
        element:<Restmenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }

   ]
 }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>,
);



