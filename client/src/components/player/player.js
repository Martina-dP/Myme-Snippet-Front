import React from 'react'; 
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getSongByID} from "../../actions/index";
import CardPlay from "../cardPlay/cardPlay"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../css/customs.css"
import Nav from '../nav/nav';
import style from "./player.module.css";

export function Player() {

    const dispatch = useDispatch();
    const {trackId} = useParams();

    useEffect(() =>{ 
        dispatch(getSongByID(trackId));
    },[])

    const detailSong = useSelector(state => state.songDetail);
    console.log(detailSong, "detailSong")

    return(
        <div>
            <Nav/>
            <div className={style.all}>
                    { detailSong?.length > 0 ? (
                        detailSong.map((e) => {
                            return (
                                <CardPlay 
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
                            <p>-</p>
                        </div>
                    )}
                    <AudioPlayer
                        style={{ borderRadius: "1rem", width: "40rem", height: "80px", boxShadow: "none" }}
                        layout="stacked-reverse"
                        src={detailSong[0]?.previewUrl}
                        onPlay={e => console.log("onPlay")}
                        autoPlay={false}
                        customAdditionalControls={[]}
                        showSkipControls={false}
                        showJumpControls={false}
                        
                    />
            </div>
        </div>
    )
};

export default Player;