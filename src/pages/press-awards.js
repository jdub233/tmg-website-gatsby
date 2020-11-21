import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import AwardList from "../components/awardList";

export default () => (
  <Layout>
    <Helmet>
      <title>Tangible Media Group | Press &amp; Awards</title>
    </Helmet>
    <h2>Press &amp; Awards</h2>
    <AwardList />
  </Layout>
); 