import * as React from "react";
import Layout from "../components/layout";
import pic from "../images/pic.png";
import {
  aboutPage,
  aboutSection,
  profilePicture,
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={aboutPage}>
        <img
          src={pic}
          className={profilePicture}
          alt="Mike smiles for the camera."
          width="200"
          height="200"
        />
        <div className={aboutSection}>
          <h2>Current</h2>
          <p>React Developer 🔗</p>
          <p>ASQ Certified Six Sigma Green Belt 🥋</p>
          <p>ASQ Certified Quality Process Analyst ⏱️</p>
          <p>Financial Services Consultant 🪙</p>
          <p>Poker Player ♠️</p>
        </div>
        <div className={aboutSection}>
          <h2>Former</h2>
          <p>Business student 💼</p>
          <p>Personal Tutor 📋</p>
          <p>Retail Manager 🛍️</p>
          <p>Production Supervisor 🚗</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
