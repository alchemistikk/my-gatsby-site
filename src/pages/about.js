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
          <h2>ASQ Certified Quality Process Analyst |
	  ASQ Certified Six Sigma Green Belt |
	  Hon. BBA</h2>
          <p>
	  Right now I split my time between developing applications,
	  writing essays, and looking for full-time work. Until recently,
	  I helped people better use their money. Years ago I worked in retail
	  management and manufacturing.
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
