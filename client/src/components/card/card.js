import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"

function Card({trackName, artistName, previewUrl, artworkUrl100, trackId, collectionName}){

    return(
        <div className={style.all}>
            <Link to={`/song/${trackId}`}>
                <img className={style.img} src={artworkUrl100} alt="img not found" />
            </Link>
            <h2 className={style.title}>{trackName}</h2>
            <h2 className={style.title2}> By : {artistName}</h2>
            <h2 className={style.title2}>{previewUrl}</h2>
            <h2 className={style.title2}>{trackId}</h2>
            <h2 className={style.title2}>{collectionName}</h2>
        </div>
    )} 

export default Card;