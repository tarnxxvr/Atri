import React from "react";
import "../page-css/dish.css";
export default function Dish(props) {
  return (
    <>
      <div className="card dish" style={{ width: 275 }}>
        <img width={300} src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, error.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              className=" mx-2 btn btn-secondary btn-sm"
              href="#"
              role="button"
            >
              {props.price}
            </a>
            <a
              className="mx-2 btn btn-outline-success  btn-sm"
              href="#"
              role="button"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
