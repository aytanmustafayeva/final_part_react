import React from "react";
import "./About.css";
import AboutImg from "./Assets/90cbb105777de2f4dab98747dd3aa1a7.jfif";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ValueImg from "./Assets/about-brand-values-img.png";

const About = () => {
  return (
    <div>
      <section className="each__page__head">
        <EachPageHead
          backgroundImage="./Assets/About-Head-img.jfif"
          heading="About Us"
        />
      </section>
      <div className="container">
        <section className="about__middle">
          <div className="about__img">
            <img src={AboutImg} alt="AboutImg" />
          </div>
          <div className="about__text">
            <h6>About Us</h6>
            <h3>About EMS Contracting</h3>
            <p>
              Founded by Mick Donkin and Kris Armstrong in 2013We incorporate 3
              divisions: Smart-metering, Renewables and Recycling all from our
              head office in Sunderland.We employ a team of highly skilled
              engineers delivering multi-disciplinary projects which operate
              across the UK, offering a 24/7 service including emergency call
              out.We have a commitment to quality and a strong safety culture,
              ensuring that every job we do is completed correctly and safely.{" "}
              <br />
              <br />
              We pride oursleves on fostering a working culture that is based on
              our core values. This ensures the people that make EMS what it is
              can enjoy the best, most engaging and safe environment possible.
              It's the people and our values that we believe set us apart in the
              industry.
            </p>
          </div>
        </section>

        <section className="about__values">
          <h4>The EMS Brand Values</h4>

          <div className="about__values__container">
          <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>
            <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>
            <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>    <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>
            <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>
            <div className="about__value1">
              <div className="about__values__head">
                <h6>INTEGRITY</h6>
                <img src={ValueImg} alt="" />
              </div>

              <p>
                Acting with strong ethics is a priority for everyone
                representing the organization as well as the company’s behaviour
                as a whole.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
