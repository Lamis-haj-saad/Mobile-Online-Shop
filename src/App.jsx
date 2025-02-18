
import './App.css'
//import logo from '../styles/img/logo.png';
import { Router } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Product from './pages/Product.jsx';
import Shop from './pages/Shop.jsx';
import Header from './components/Header.jsx';
import { RouterProvider } from 'react-router-dom';
import Comp from './components/Comp.jsx';
const router = createBrowserRouter([
  {path : '/', element: <Home/>},
  {path : '/home', element: <Home/>},
  {path : '/cart', element: <Cart/>},
  {path : '/checkout', element: <Checkout/>},
  {path : '/product', element: <Product/>},
  {path : '/shop', element: <Shop/>},
]);

export default function App() {


  return (
    <>
      {/*<Header/>
     

      <RouterProvider router={router}/>;
      <Home/>
*/}
      <Comp/>
    </>
  )
}