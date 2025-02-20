import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function Root(){
    return(
        <>
        <Header/>
        <Navigation/>
        <Outlet/>
        <Footer/>
        </>
    )
}