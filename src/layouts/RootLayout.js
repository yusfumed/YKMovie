import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import FormComp from "../components/FormComp";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="bg-black text-white p-4">
          <img src="logo.png" alt="" className="logo inline-block" />
          <h1 className="">
            <span className="text-red-500 font-bold ">yk</span>Movie
          </h1>

          <div className="navitem">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
            <NavLink to="/movies" className="navLink">
              Movies
            </NavLink>
            <NavLink to="/tvshows" className="navLink">
              Tv Shows
            </NavLink>
            <NavLink to="/topimdb" className="navLink">
              Top IMDB
            </NavLink>
            <FormComp />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
