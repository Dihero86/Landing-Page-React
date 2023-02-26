import React from "react";

const MyCard=(props)=>{
    return (
        <div className="card mb-3 px-0" style={{width: "18rem"}}> 
          <img src={props.foto} className="object-fit-contain"  alt="Card image cap" style={{height: "200px"}} /> 
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    )}

export default MyCard;