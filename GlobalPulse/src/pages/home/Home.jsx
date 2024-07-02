import React, {useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Slider from "../../component/slider/Slider"
import Spinner from "../../component/spinner/Spinner"
import NewsCard from "../../component/newsCard/NewsCard"
import axios from "axios"
import {themeContext} from "../../context/ThemeContext"
import ChangeTheme from "../../component/theme/ChangeTheme";

const Home = () =>{
    const [news , setNews] = useState([]);
    const [loading , setLoading] = useState(false);

    const theme = useContext(themeContext);

    const darkMode = theme.state.darkMode;

    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=314da8c549644b389b76619b7a96f9e0`;

    const getNews= async()=>{

        setLoading(true);
        try{
            const {data} = await axios(url);
            setNews(data.articles);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        getNews();
    } , []);

    const sliderNews = news?.splice(0,3);

    return (
        <div className={styles.container} style={{backgroundColor: darkMode? "black" : "white"}}>
            {/* <ChangeTheme/> */}
            <div className={styles.slider}>
                <Slider sliderNews = {sliderNews}/>
            </div>
            <div className={styles.news}>
                {loading && <Spinner/>}
                {news?.map((item,index)=>(
                    <NewsCard key ={index} {...item}/>))}
            </div>
        </div>
    );
}

export default Home;