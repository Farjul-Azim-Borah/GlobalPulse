import React , {useState , useEffect}from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../component/newsCard/NewsCard"
import axios from "axios"


const Categories = () =>{
    const [news , setNews] = useState([]);
    const [loading , setLoading] = useState(false);
    const [filter , setFilter] = useState("");
    const {state} = useLocation();

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${state.category}&apiKey=314da8c549644b389b76619b7a96f9e0`;

    const filterurl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${state.category}&apiKey=314da8c549644b389b76619b7a96f9e0`;


    const hanleSubmit=(e)=>{
        e.preventDefault();
        getNews(filterurl);
        setFilter("");
    }

    const getNews= async(url)=>{

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
        getNews(url);
    } , [url]);


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <form onSubmit={hanleSubmit} className={styles.form}>
                    <input type="text" placeholder="ex:jp,in,us..."
                    value={filter} onChange={(e)=>setFilter(e.target.value)}/>
                    <button type = "submit">Filter Country</button>
                </form>
            </div>

            <div className={styles.right}>
                {loading && <spinner/>}
                {news.map((item,index)=><NewsCard key={index} {...item}/>)}
            </div>
        </div>
    );
}

export default Categories;