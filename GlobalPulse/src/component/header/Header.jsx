import React , {useState} from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";


const Header = () =>{
    const [search , setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/search" , {state : search});
        setSearch("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.top}>
                    
                        <h1> Global-Pulse</h1>
                    
                    {/* <div className={styles.fori}> */}
                        <form onSubmit={handleSubmit}>
                        <input className={styles.search} type="text" placeholder="Search for a news" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="submit">SEARCH</button>
                        </form>
                    {/* </div> */}
                    
                </div>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header;