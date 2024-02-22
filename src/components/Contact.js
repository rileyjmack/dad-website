import React from "react";
import DadProfile from "../DadProfile.png";

function About() {
  return (
    <div className="contactPage">
      <div className="contact">
        My Manhattan office is on the corner of 30th St and 5th Avenue, near the
        B, D, F, M and N, Q, R, W subway lines. Call me at (917) 680-8023 or
        email me at LucyLehrerTherapy@gmail.com so we can start this process
        together.
      </div>
      <img src={DadProfile} className="dadProfile" height="300" width="225" />
    </div>
  );
}

export default About;
