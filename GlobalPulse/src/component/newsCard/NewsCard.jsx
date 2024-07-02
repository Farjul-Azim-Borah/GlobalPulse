import React from "react";
import styles from "./NewsCard.module.css";
import random1 from "../../assets/img/random1.png"



const NewsCard = ({title , url , urlToImage , content}) =>{
    return (
        <div className={styles.card}>
            <img src={urlToImage ? urlToImage : random1} alt="news"/>
            <div className={styles.cardDetails}>
                <h4>{title}</h4>
                {/* <p>{content}</p> */}
                <div className={styles.a}>
                    <a href={url} rel="noreferrer" target="_blank" className={styles.link}>Details</a>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;