import {useContext, useEffect, useState } from "react";
import React from "react";
import styles from "./Search.module.css";
import NewsCard from "../../component/newsCard/NewsCard"
import { useLocation } from "react-router-dom";

const Search = () =>{
    const [news , setNews] = useState("");
    const {state} = useLocation();

    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=314da8c549644b389b76619b7a96f9e0`;

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setNews(data.articles))
        .catch((error)=> console.log(error));
    } , [url])

    console.log(news);


    return (
    <div className={styles.searchPage}>
        
        <h1>
             <span>{!state ? "Please search something!" :"News About:" + state.toUpperCase()}</span>
        </h1>
        <div className={styles.searchNews}>
            {!news && <h1>The searched word did not match</h1>}

            {news && news.map((item , index)=> <NewsCard key={index} {...item}/>)}
        </div>
    </div>
    );
}

export default Search;