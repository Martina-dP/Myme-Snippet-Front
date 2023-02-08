import React, { useState }  from 'react'; 
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getSong, getSongByID} from "../../actions/index";
import { Link } from "react-router-dom";
import fotoP from "../../media/logo.jpg"
import fotoS from "../../media/Vector.png"
import fotoU from "../../media/uPerfil.jpg"
import Card from "../card/card";
import style from "./home.module.css";
import Player from '../player/player';

export function Home() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");

    const dispatch = useDispatch();

    useEffect(() =>{ 
        dispatch(getSong());
    },[dispatch])
    
    const dataSong = useSelector(state => state.song);
    console.log(dataSong, "dataSong") 

    const handleChange = (e) => {
        setQuery((query) => (query = e.target.value));
        setResult(e.target.value)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(dispatch(getSong(query)));
        setQuery((query) => (query = ""));
      };
 
    return(
        <div >
            <div className={style.all}>
                <img className={style.img} src={fotoP} alt="img not found" />
                <form onSubmit={handleSubmit} >
                    <input
                    className={style.search}
                    type="text"
                    placeholder="Search Song"
                    value={query}
                    onChange={handleChange}
                    />
                    <button className = {style.btnSearch} type="submit"> 
                        <img className = {style.btnS} src={fotoS} alt='not found'/>
                     </button>
                </form>
                <div className={style.links}>
                    <h2 className={style.text}> Home </h2>
                    <h2 className={style.text}> Discover </h2>
                    <h2 className={style.text}> Recents </h2>
                    <h2 className={style.text}> Library </h2>
                    <img className={style.imgP} src={fotoU} alt="img not found" />
                </div>
            </div>    
            <h2 className={style.result}> Search result for : {result} </h2>
            <div className={style.cardSongs}>
                { dataSong?.length > 0 ? (
                    dataSong.map((e) => {
                        return (
                            <Card 
                                key={e.trackId}
                                artworkUrl100={e.artworkUrl100}
                                trackName={e.trackName}
                                artistName={e.artistName}
                                collectionName={e.collectionName}
                                trackId={e.trackId}
                            />
                        );
                    }) 
                ) : (
                    <div>
                        <p>No se encontraron canciones</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Home;