import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Shop from './pages/Shop.jsx';
import { setUserId } from './components/redux/CartSlice.js';

import "bootstrap/dist/css/bootstrap.min.css";

import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import Root from './pages/Root.jsx';
import ProductPage from './pages/ProductPage.jsx';
import TopNewPage from './pages/TopNew.jsx';
import TopSellerPage from './pages/TopSellerPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import RecentlyViewedPage from './pages/RecentlyViewedPage.jsx';
const router = createBrowserRouter([  
  {  
    path: '/',  
    element: <Root />,  
    children: [  
      { path: '', element: <Home /> },  
      { path: 'home', element: <Home /> },  
      { path: 'cart', element: <Cart/> },  
      { path: 'checkout', element: <Checkout /> },  
      { path: 'shop/:id', element: <Shop />}, 
      { path: 'productpage/:id', element: <ProductPage /> },
      { path: 'topnew', element: <TopNewPage /> },
      { path: 'topseller', element: <TopSellerPage /> },
      { path: 'searchpage', element: <SearchPage/> },
      { path: 'recentlyviewedpage', element: <RecentlyViewedPage/>}
    ]  
  }  
]);

export default function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        let userId = localStorage.getItem("userId");

        if (!userId) {
            userId = crypto.randomUUID(); // Generate unique user ID
            localStorage.setItem("userId", userId);
        }

        dispatch(setUserId(userId)); // Store userId in Redux
    }, [dispatch]);

  return (<RouterProvider router={router} />)
}