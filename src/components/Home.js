import React from "react";
import Sunset from "../image-asset.png";

function Home() {
  return (
    <div>
      <div className="subjects">
        Welcome. I'm glad you stopped by. I am an experienced psychotherapist in
        Manhattan, providing a warm and safe environment where you will be
        allowed to be vulnerable without feeling judged. Maybe you're depressed,
        anxious, or feeling stuck. Or maybe you want to improve your
        relationships, manage daily stress, change negative thought patterns, or
        heal from trauma, emotional wounds, or loss. Therapy can help. I offer
        both brief and long term treatment for individuals and couples ages 18
        and older.
      </div>
      <img
        src={Sunset}
        alt="sunset"
        className="sunset"
        width="100"
        height="300"
      />
    </div>
  );
}

export default Home;
