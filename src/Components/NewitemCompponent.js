import React, { Component } from "react";

const NewitemCompponent = (props) => {
  // render() {
  return (
    <div>
      <div className="card" style={{ width: "18rem", backgroundColor: "red" }}>
        <div className="card-body">
          <img src={props.imgurl} alt="" style={{ width: "16rem" }} />
          <h5 className="card-title">{props.title}....</h5>
          <p className="card-text">{props.description}...</p>
          <a
            href={props.url}
            target="_blank"
            className="btn btn-primary btn-sm"
          >
            Read More
          </a>
          <br />
          <h6>Author : {props.author} </h6>
          <br />
          <h6>Published Date/Time : {props.publish}</h6>
        </div>
      </div>
    </div>
  );
};
export default NewitemCompponent;
