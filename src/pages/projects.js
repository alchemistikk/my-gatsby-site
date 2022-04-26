import * as React from "react";
import Layout from "../components/layout";
import soccerPowerIndexMatchFilter from "../images/soccerPowerIndexMatchFilter.png";
import mikemitchellca from "../images/mikemitchellca.png";
import {
  projectWrapper,
  codeAndLive,
  projectImage,
} from "../components/projects.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="Projects">
      <div className={projectWrapper}>
        <div>
          <a
            href="https://alchemistikk.github.io/spi-match-filter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={soccerPowerIndexMatchFilter}
              alt="A form for filtering upcoming soccer matches."
              className={projectImage}
            />
          </a>
        </div>

        <div className={codeAndLive}>
          <div>
            <a
              href="https://github.com/alchemistikk/spi-match-filter"
              target="_blank"
              rel="noopener noreferrer"
            >
              github code
            </a>
          </div>
          <div>
            <a
              href="https://alchemistikk.github.io/spi-match-filter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live app
            </a>
          </div>
        </div>
        <div>
          <p>
            Using Create React App and a few components, I built this
            application so that I could decide which upcoming soccer matches
            might be worth watching.
          </p>

          <p>
            Using a script, it fetches a csv from fivethirtyeight.com and then
            uses a command line tool to convert the data into json. From there
            it calculates some missing fields for each record, and then React
            does all the cool interactive stuff with the form controls and the
            table.
          </p>
        </div>
      </div>

      <div>
        <div>
          <a
            href="https://mikemitchell.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mikemitchellca}
              alt="The banner and links for this mikemitchell.ca."
              className={projectImage}
            />
          </a>
        </div>
        <div className={codeAndLive}>
          <div>
            <a
              href="https://github.com/alchemistikk/my-gatsby-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              github code
            </a>
          </div>
          <div>
            <a
              href="https://mikemitchell.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              live app
            </a>
          </div>
        </div>
        <div>
          <p>
            This website is built using Gatsby and runs with Gatsby Cloud. It
            uses a few GraphQL queries to automate things like the navigation
            links and the mdx transpilation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
