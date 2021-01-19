import React from "react";

import aboutSection from "../constants/about";
import infoSections from "../constants/info-sections";
import contactSection from "../constants/contact";
import { SEO, Layout, Info, About, Services, Contact } from "../components";

export default () => (
  <Layout>
    <SEO title="Vektr" description="A new car sharing experience!" />
    <div name="home">
      {infoSections.map((section, index) => (
        <Info {...section} key={index} />
      ))}
    </div>
    <About {...aboutSection} />
    <Services />
    <Contact {...contactSection} />
  </Layout>
);
