import React from "react";
import { useState, useEffect } from "react";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import axios from "axios";
import ServiceHeadBackImg from "./Assets/service-head-back-img.png";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={ServiceHeadBackImg} heading="Services" />
      </section>

      <section className="services__sec">
        <div className="container">
          <div className="services__container">
            {services.slice(0, 7).map((service) => (
              <Link to={`/service-detail/${service.id}`} key={service.id}>
                <ServicesAndProjectsItem data={service} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
