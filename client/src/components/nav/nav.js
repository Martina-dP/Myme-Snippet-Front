import React from "react";
import { Link } from "react-router-dom";
import fotoP from "../../media/logo.jpg"
import style from "./nav.module.css"

const Nav = () => {

  return (
    <div className={style.all}>
        <Link to="/"> 
            <img className={style.img} src={fotoP} alt="img not found" />
        </Link>
    </div>
  );
};
export default Nav;