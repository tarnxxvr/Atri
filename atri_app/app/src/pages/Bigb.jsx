import React from "react";

export default function Bigb() {
  return (
    <>
      <div className="bigb">
        <div className="left1">
          <h1 className="my-3">
            Taste the most delicious burger in Los Angeles, CA
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod
            eum velit eligendi ad eaque?
          </p>
          <div className="my-4 d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a className=" mx-3 btn btn-secondary " href="#" role="button">
              Book a table
            </a>
            <a className="mx-3 btn echo " href="#" role="button">
              Order Online
            </a>
          </div>
        </div>
        <div className="right1">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
