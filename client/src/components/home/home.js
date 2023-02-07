import React, { useState }  from 'react'; 
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getSong} from "../../actions/index";
import Nav from '../header/header';
import Card from "../card/card";
import style from "./home.module.css";

export function Home() {

    const [query, setQuery] = useState("");

    const dataSong = useSelector(state => state.song);
    console.log(dataSong, "dataSong")

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setQuery((query) => (query = e.target.value));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(dispatch(getSong(query)), 1000);
        setQuery((query) => (query = ""));
      };
 
    return(
        <div >
            <Nav/>
            <div>
            <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search Songs"
          value={query}
          onChange={handleChange}
        />
        <button className = {style.boton} type="submit">
          Search
        </button>
      </form>
                <h2> SEARCH RESULTS FOR : ... </h2>
            </div>
            <div className={style.cardPodcast}>
                { dataSong?.length > 0 ? (
                    dataSong.map((e) => {
                        return (
                            <Card 
                                key={e.trackId}
                                artworkUrl100={e.artworkUrl100}
                                trackName={e.trackName}
                                artistName={e.artistName}
                                collectionName={e.collectionName}
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