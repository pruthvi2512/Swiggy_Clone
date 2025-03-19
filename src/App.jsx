import Header from './components/header'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Body from './components/body'
import Footer from './components/footer'
import { useState ,useEffect } from 'react'
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'
import About from './components/about'
import Restmenu from './components/restmenu'
import { Provider } from 'react-redux'
import Store from './assets/store'
import Cart from './components/Cart'
import Help from './components/help'
import Payment from './components/payment'
import Payapp from './components/payapp'
import Login from './components/login'
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
        path:"/login",
        element:<Login/>

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
        element:<Cart/>,
        
        
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/cart/payment",
        element:<Payment/>
      },
      {
        path:"/cart/payment/pay",
        element:<Payapp/>
      }



   ]
 }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>,
);



