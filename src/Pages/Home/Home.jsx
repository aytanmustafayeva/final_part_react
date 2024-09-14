import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import ServiceImg from "./Assets/b5a586314e33996f0406889eea26a0d6.png";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {FaAngleRight} from "react-icons/fa";
// import { useLanguage, getTranslation } from "../../LangContext/LanguageContext";

const Home = () => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [partners, setPartners] = useState([]);
  // const { language, changeLanguage } = useLanguage();
  // const { title, buttonText, aboutUs, aboutText } = getTranslation(language);

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

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:5000/partners")
      .then((response) => {
        setPartners(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  return (
    <div className="Home__Page">
      <section className="section1">
        <div className="section1__left">
          <div className="container">
            <p>EMS Contracting</p>
            <h2>
              Delivering first-class commercial maintenance nation wide 24/7
            </h2>
            <button className="btn__enquiry">Make An Enquiry</button>
          </div>
        </div>
      </section>

      <section className="about__sec1 container">
        <div className="about__sec1__img">
          <img
            src="https://s3-alpha-sig.figma.com/img/e567/1821/ec71098de423976dacb7f436dd41ac98?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elgbXgDKK1ddr0zyGuSMvcZu0MvmRLISR9EYrnsS4mi9UoJHvkgWqMnLOoJRJ5e04gQpFtjrWaM8giEONFg7AZLnnnHlSgZgJf4pCKiJJ8gCWbs0S6pdJmLViD~oDzQf-Enwtyjh0ggYhWZFFxRXzHletAWautfakNDkrvsOg~Acra86qCgrCheG-Avm9RIvz6f7saPjVx~Cpp3X6di8ndSmVOdNZ1LiRuRsmFyTlWb2aEctVXBTrTapkwC9Rpii9aL~4YChIYl2AkNIKfZxViM4x20Ni-b5ngBi4tg5~-9wV6LwL4Vubi89irhGLzkq0PI7SL90lM2GlPA1iGARnw__"
            alt=""
          />
        </div>

        <div className="about__sec1__text">
          <h6>About Us</h6>
          <h3>Welcome to EMS Contracting</h3>
          <p>
            EMS Contracting, founded in 2013 by Mick Donkin and Kris Armstrong
            then later joined by key director Daryl Shepherd, incorporates 3
            divisions - Metering, Renewables and Recycling.
          </p>
          <div className="img4__icon">
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
          </div>
          <Link to="/about" className="link__btn">
            <button className="btn__see__more">
              See More <FaAngleRight/>
            </button>
          </Link>
        </div>
      </section>

      <section className="projects__sec3">
        <Link to="/projects" className="link__btn"><h2>Projects</h2> </Link>
        <div className="container">
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Link to={`/project-detail/${project.id}`}  className="link__btn">
                  <ServicesAndProjectsItem data={project} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="services__sec4">
      <Link to="/services" className="link__btn"><h2>Services</h2> </Link>
      <div className="container">
          <div className="home__services">
            <Swiper
              spaceBetween={16}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 24,
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <Link to={`/service-detail/${service.id}`} className="link__btn">
                    <ServicesAndProjectsItem data={service} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="service__blue">
        <div className="container">
          <img src={ServiceImg} alt="ServiceImg" />
          <p>
            You will be satisfy with our work contact us today & help is on the
            way
          </p>
          <Link className="link__btn"> 
            <button className="btn__schedule__service">
              Schedule a Service  <FaAngleRight/>
            </button>
          </Link>
        </div>
      </section>

      <section className="our__partner__sec6">
      <Link to="/contacts" className="link__btn"><h2>Our Partners</h2> </Link>
      <div className="partners">

        <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id} className="partners__list">
                <Link to="/" className="link__btn">
                <img src={partner.image} alt="partner-logo" className="partner__logo" />
                </Link> <br />
                <Link to="/" className="link__btn">
                <img src={partner.image} alt="partner-logo" className="partner__logo" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
      
        </div>
      </section>

      <section className="contact__sec5">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Home;
