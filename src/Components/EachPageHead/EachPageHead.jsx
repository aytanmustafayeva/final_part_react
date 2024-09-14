import React from "react";
import "./EachPageHead.css";

const EachPageHead = ({ backgroundImage, heading }) => {
  return (
    <section
      className="each__page__head"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="each__page__head--title">
        <h2>{heading}</h2>
      </div>
    </section>
  );
};

export default EachPageHead;
