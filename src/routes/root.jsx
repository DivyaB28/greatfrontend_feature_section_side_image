import React from "react";
import { left_align_data, right_align_data } from "../data";
import "./root.css";

function root({ side }) {
  const {
    subheader,
    header,
    description,
    features = [],
    img,
  } = side === "left" ? left_align_data : right_align_data;
  return (
    <main>
      <section className={`header_container ${side}_header`}>
        <p className="subheader">{subheader}</p>
        <h1>{header}</h1>
        <p className={`description ${side}_description`}>{description}</p>
      </section>
      <div className={`feature_container ${side}`}>
        <img src={img} aria-label="feature_abstract" />

        <section>
          <ul className={`${side}_ul`}>
            {features.map(({ icon, topic, desription }) => (
              <div className="list_container" key={topic}>
                <div className="icon_wrapper">
                  <i className={`${icon} ri-xl`}></i>
                </div>
                <li className={`${side}-li`}>
                  <p className="topic_header">{topic}</p>
                  <p className="topic_desc">{desription}</p>
                </li>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default root;
