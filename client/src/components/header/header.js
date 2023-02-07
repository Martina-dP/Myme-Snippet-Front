import React from "react";
import fotoP from "../../media/logo.jpg"
import fotoU from "../../media/uPerfil.jpg"
import Search from "../search/search"
import style from "./header.module.css"

const Nav = () => {

  return (
    <div className={style.all}>
        <img className={style.img} src={fotoP} alt="img not found" />
        <Search/>
        <div className={style.links}>
            <h2 className={style.text}> Home </h2>
            <h2 className={style.text}> Discover </h2>
            <h2 className={style.text}> Recents </h2>
            <h2 className={style.text}> Library </h2>
            <img className={style.imgP} src={fotoU} alt="img not found" />
        </div>
    </div>
  );
};
export default Nav;