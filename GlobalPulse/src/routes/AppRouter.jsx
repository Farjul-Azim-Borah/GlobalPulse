import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "../component/header/Header";
import Navbar from "../component/navbar/Navbar";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Catgories from "../pages/categories/Categories";


const AppRouter =() => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element = {<Home/>}></Route>
                    <Route path="/search" element = {<Search/>}></Route>
                    <Route path="/Categories" element = {<Catgories/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;