import React from "react";
import logo from "./bestmexlogo.png";

function HomepageText({ src }) {
  return (
    <>
      <h2>
        Welcome to <img src={logo} alt="logo" />
      </h2>
      <p>
        Your number one place to find and review San Diego's best taco shops.
        <br />
        Locally sourced reviews from San Diego's best neighborhoods! <br />
        Don't see your shop on our list? Feel free to Submit a shop to our
        website <a href="/submitshop">here.</a>
      </p>
      <hr />
    </>
  );
}
export default HomepageText;
