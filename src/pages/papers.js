import React from "react";
import { Helmet } from "react-helmet";

import PaperList from "../components/paperList";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <Helmet>
      <title>Tangible Media Group | Papers</title>
    </Helmet>
    <h2>Papers</h2>
    <PaperList />
  </Layout>
);