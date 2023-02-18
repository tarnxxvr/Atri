import React from "react";
import "../page-css/menu.css";
import Mcard from "./Mcard";

export default function Menucard() {
  return (
    <>
      <div className="container menumain">
        <div className="top">
          <h3>Browse our menu</h3>
        </div>
        <div className="middle">
          <Mcard
            title="Breakfast"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg"
          />
          <Mcard
            title="Main Dishes"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg"
          />
          <Mcard
            title="Drinks"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg"
          />
          <Mcard
            title="Desserts"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg"
          />
        </div>
        <div className="down">
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              className=" mx-2 btn btn-secondary "
              href="/import"
              role="button"
            >
              Book a table
            </a>
            <a className="mx-2 btn echo " href="/export" role="button">
              Order Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
