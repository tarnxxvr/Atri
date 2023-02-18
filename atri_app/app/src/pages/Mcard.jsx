import React from "react";

export default function Mcard(props) {
  return (
    <>
      <div className="card" style={{ width: 250 }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="mx-5 text-center btn btn-sm btn-outline-warning"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </>
  );
}
