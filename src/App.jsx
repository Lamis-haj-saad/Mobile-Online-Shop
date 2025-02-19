import './App.css'
//import logo from './assets/img/logo.png';
import { Router } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Product from './pages/ProductPage.jsx';
import Shop from './pages/Shop.jsx';
import Header from './components/header/Header.jsx';

//import './index.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import Footer from './components/footer/Footer.jsx';
import Navigation from './components/Navigation.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
    children: [
      { path: '', element: <Home /> }, 
      { path: 'home', element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'product', element: <Product /> },
      { path: 'shop', element: <Shop /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <Header/>
      <Navigation/>
      <Shop/>
      <Footer/>
      

    </>
  )
}