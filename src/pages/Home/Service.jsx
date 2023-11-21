import React from "react";
import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

export const Service = ({ data }) => {
  return (
    <div>
      <nav>
        <ul>
          <Link path="/">
            {" "}
            <li>
              {" "}
              <img src={logo} alt="logo" width="140" />
            </li>
          </Link>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="about" className="about">
        <article>
          <div className="title">
            <h1>DRAW WITH US !</h1>
            <div className="title details">
              <h3>Free drawing event for children the 20 of June and the 12 of july</h3>
            </div>
          </div>
        </article>
      </section>
      {/* We need to export the data from the data component, for that we use .map and we give it a value. We give it a key to make sure every childrens as is own key. */}
      {data.map((value, index) => {
        return (
          <section className="service service-css sticky" key={value.id}>
            <article>
              <figure>
                <img src={value.img} width="600" />
              </figure>
              <div className="text">
                <h2>{value.title}</h2>
                <p> {value.description}</p>
                <h3>{value.date}</h3>
                <h4>Location: {value.location}</h4>
              </div>
            </article>
          </section>
        );
      })}
      ;
      <section id="contact" className="contact full-screen">
        <a href="mailto:draw-with-us@mail.com">draw-with-us@mail.com</a>
      </section>
    </div>
  );
};

export default Service;
