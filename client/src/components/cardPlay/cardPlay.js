import React from 'react'; 
import style from "./cardPlay.module.css";

export function CardPlay({trackName, artistName, artworkUrl100, trackId, previewUrl}) {
 
    return(
      <div className={style.all}>
        <img className={style.img} src={artworkUrl100} alt="img not found" />
        <div className={style.text}>
          <h2 className={style.title}>{trackName}</h2>
          <h2 className={style.title2}>{artistName}</h2>
        </div>
        <h2>{trackId}</h2>
        <h2>{previewUrl}</h2>
    </div>
    )
};

export default CardPlay;