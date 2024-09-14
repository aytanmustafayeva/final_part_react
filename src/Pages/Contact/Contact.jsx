import React from "react";
import "./Contact.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import TeamMember from "./Assets/team-member.png";
import { Link } from "react-router-dom";
import ContactHeadBackImg from "./Assets/contact_head_back_img.jfif"

const Contact = () => {
  return (
    <div>
      <section className="each__page__head">
        <EachPageHead
          backgroundImage={ContactHeadBackImg}
          heading="Contact Us"
        />
      </section>
      <section>
        <GetInTouch />
      </section>
      <section className="team__sec">
        <div className="container">
          <h2>
            MEET OUR <span>BEST TEAM</span>
          </h2>
          <div className="teams">
            <div className="team__members">
              <img src={TeamMember} alt="" />
              <h6>Mick Donkin</h6>
              <Link className="link__mail" to="/parashard641@gmail.com">
                parashard641@gmail.com
              </Link>
            </div>
            <div className="team__members">
              <img src={TeamMember} alt="" />
              <h6>Mick Donkin</h6>
              <Link className="link__mail" to="/parashard641@gmail.com">
                parashard641@gmail.com
              </Link>
            </div>
            <div className="team__members">
              <img src={TeamMember} alt="" />
              <h6>Mick Donkin</h6>
              <Link className="link__mail" to="/parashard641@gmail.com">
                parashard641@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
