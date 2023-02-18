import React from "react";
import "../page-css/maincard.css";
export default function Maincard() {
  return (
    <>
      <div className="container">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 id="title" className="display-4 fw-bold lh-1">
              The best place to{" "}
              <span style={{ color: "orangered" }}>eat burgers in LA.</span>
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum eget non vivamus volutpat odio
              cras vestibulum purus aliquam.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                className=" mx-2 btn btn-secondary btn-lg"
                href="/import"
                role="button"
              >
                Reservate
              </a>
              <a className="mx-2 btn echo btn-lg" href="/export" role="button">
                Order Online
              </a>
            </div>
          </div>
          <div className="mainc col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img
              className=""
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
              alt=""
              width="350"
            />
          </div>
        </div>
        ;
      </div>

      <div className="container my-5">
        <div className="top">
          <h2 className="text-center">Order from your favorite app today!</h2>
        </div>
        <div className="down client my-2">
          <div className="logo">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
              alt=""
            />
          </div>
          <div className="logo">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
              alt=""
            />
          </div>
          <div className="logo">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
              alt=""
            />
          </div>
          <div className="logo">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
