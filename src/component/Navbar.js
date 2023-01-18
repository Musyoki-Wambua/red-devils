import React from "react"


function Navbar () {

    return (
        <nav className= "navbar bg-dark" >
        <div className="container-fluid">
        <a className="navbar-brand text-light" href="#" > RED DEVILS</a>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="#" className="nav-link text-light"> SOURCES</a>
            </li>
        </ul>
        <form className="d-flex">
            <input type="search" className="form-control" placeholder="Search Here..." ></input>
            <button className="btn btn-secondary ms-1" type="submit">Search</button>
        </form>
        </nav>

    )
}export default Navbar;