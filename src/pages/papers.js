import React from "react";

import PaperList from "../components/paperList";
import Layout from "../components/layout";

export default () => (
    <Layout>
      <div>
        <h2>Papers</h2>
        <PaperList />
      </div>
    </Layout>
);