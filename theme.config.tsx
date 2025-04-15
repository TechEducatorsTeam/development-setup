import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  logo: <img src="techEdLogo.png"></img>,
  project: {
    link: "https://techeducators.co.uk/",
  },
  chat: {
    link: "https://discord.gg/zEeTnhfzdt",
  },
  docsRepositoryBase: "https://github.com/TechEducatorsTeam/development-setup",
  footer: {
    text: "TechEducators_",
  },
};

export default config;
