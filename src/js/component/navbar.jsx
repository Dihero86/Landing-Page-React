import React from "react";

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark text-white" >
            <div className="container">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end  text-white" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
                    <a className="nav-link  text-white" href="#">Features</a>
                    <a className="nav-link  text-white" href="#">Pricing</a>
                    <a className="nav-link  text-white disabled">Disabled</a>
                </div>
            </div>
            </div>
        </nav>
    )}

export default NavBar;