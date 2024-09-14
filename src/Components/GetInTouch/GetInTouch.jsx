import React from "react";
import { Link } from "react-router-dom";
import "./GetInTouch.css";
import PhoneIcon from "./Assets/phone-call.png";
import FaxIcon from "./Assets/fax.png";
import EmailIcon from "./Assets/email.png";

const GetInTouch = () => {
  return (
    <div className="getintouch__backcolor">
      <div className="getintouch__map container">
        <div className="get__in__touch">
          <h4>
            Get in <span>Touch</span>
          </h4>
          <p>
            Services from us are trusted, reliable and professional. Please fill
            out the form completely, and we will get back to you as soon as
            possible
          </p>

          <form action="" className="form">
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number *" />
            <select>
              <option value="How did you find us?">How did you find us?</option>
              <option value="Social Media">Social Media</option>
              <option value="Social Media">Social Media</option>
              <option value="Social Media">Social Media</option>
            </select>
            <button className="btn__send">send</button>
          </form>
          <div className="tel__fax__email">
            <div className="phone">
              <img src={PhoneIcon} alt="" />
              <div className="contact__icon__text">
                <h6>PHONE</h6>
                <Link className="contact__link link__btn">03 5432 1234</Link>
              </div>
            </div>
            <div className="fax">
              <img src={FaxIcon} alt="" />
              <div className="contact__icon__text">
                <h6>FAX</h6> 
                <Link className="contact__link link__btn">03 5432 1234</Link>
              </div>
            </div>
            <div className="email">
              <img src={EmailIcon} alt="" />
              <div className="contact__icon__text">
                <h6>EMAIL</h6>
                <Link className="contact__link link__btn" to="/info@marcc.com.au">
                  info@marcc.com.au
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
