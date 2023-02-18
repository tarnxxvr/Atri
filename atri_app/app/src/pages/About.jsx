import React from "react";
import "../page-css/about.css";
export default function About() {
  return (
    <>
      <div className="container about">
        <div className="aleft">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080.jpeg"
            alt=""
          />
        </div>
        <div className="add">
          <div class="p-Home Flex29 bpt">
            <div class="p-Home TextBox36 bpt">
              <h3>Come and visit us</h3>
            </div>
            <div class="p-Home Flex30 bpt">
              <div class="p-Home TextBox38 bpt">
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </div>
            </div>
            <div class="p-Home Flex35 bpt">
              <div class="p-Home TextBox43 bpt">(414) 857 - 0107</div>
            </div>
            <div class="p-Home Flex32 bpt">
              <div class="p-Home TextBox40 bpt">
                losangeles@restaurantex.com
              </div>
            </div>
          </div>
        </div>
        <div className="aright">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            expedita hic aperiam at quas quaerat mollitia impedit similique
            fugit? Vel voluptatem sapiente numquam repellat, modi laudantium
            omnis, inventore tenetur dolorum aperiam maiores cum, facilis odio
            quam. Hic voluptatem sit iusto. Sed voluptatibus laboriosam quidem?
            Hic quibusdam illum dolores, reprehenderit alias repudiandae
            voluptate accusamus enim harum atque iure dolor provident tempora
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="mx-4 btn btn-secondary px-4 me-md-2"
            >
              About Us
            </button>
            <button type="button" className="mx-4 btn echo px-4">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
