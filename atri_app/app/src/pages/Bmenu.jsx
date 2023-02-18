import React from "react";
import "../page-css/bmenu.css";
import Dish from "./Dish";
export default function Bmenu() {
  return (
    <>
      <div className="container my-5">
        <div className="one">
          <h2 className="text-center">Browse our menu</h2>
        </div>
        <div className="two my-3">
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, tempora aliquam expedita saepe quae non! Nesciunt
              consequuntur temporibus officia quo?
            </p>
          </div>
        </div>
        <div className="three">
          <Dish
            price="$ 10.99 USD"
            title="Classic Burger"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 6.99 USD"
            title="Choclate Milkshake"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 5.99 USD"
            title="Classic Fries"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 8.99 USD"
            title="Pancakes"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 3.99 USD"
            title="Ice Cream"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 9.99 USD"
            title="Chicken Burger"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 1.99 USD"
            title="Egg toast"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
          />
          <Dish
            price="$ 6.99 USD"
            title="Regular Soda"
            img="https://atri-apps.github.io/restaurant_website/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
          />
        </div>
        <div className="four">
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              className=" mx-2 btn btn-secondary "
              href="/import"
              role="button"
            >
              Book a table
            </a>
            <a className="mx-2 btn echo" href="/export" role="button">
              Order Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
