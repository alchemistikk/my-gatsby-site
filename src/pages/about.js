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
        <div className={aboutSection}>
          <h2>Front-End Web Developer — React, Gatsby, Ruby on Rails</h2>
          <p>
            Hi, I'm Mike. I develop web applications using React, Gatsby, and
            Ruby on Rails. I have two Six Sigma certifications. I used to work
            in retail and finance.
          </p>
          <p>
            Check out my <a href="./posts">posts</a> page for some of my
            thoughts on things or the <a href="./projects">projects</a> page for
            some of my web development work.
          </p>
        </div>
        <img
          src={pic}
          className={profilePicture}
          alt="Mike smiles for the camera."
          width="200"
          height="200"
        />
      </div>
    </Layout>
  );
};

export default AboutPage;
