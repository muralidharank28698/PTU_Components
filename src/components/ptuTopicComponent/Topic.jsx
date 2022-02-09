import React from "react";
import "./Topic.css";

function Topic() {
  return (
    <div>
      <div className="image_gallery">
        <div className="image_gallery_text">
          <h6 className="header drop-in">Welcome to</h6>
        </div>

        <div className="overflow-hidden">
          <h1 className="drop-in-2">
            PUDUCHERRY
            <br />
            TECHNOLOGICAL
            <br />
            UNIVERSITY
          </h1>
        </div>
      </div>

      {/* <div class="overflow-hidden">
        <h1 class="header drop-in">Animation on load</h1>
      </div>
      <div class="overflow-hidden"> */}
      {/* <p class="drop-in-2">
          Animating text on page load using css animation api without any
          javascipt. Refresh to check the animation one more time.
        </p> */}
      {/* </div> */}
    </div>
  );
}

export default Topic;
