import React from "react";
import style from "./search.module.css"

export default function Search() {

  return (
    <div className = {style.todo}>
      <form >
        <input
          type="text"
          placeholder="Search Song"
        />
        <button className = {style.boton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}