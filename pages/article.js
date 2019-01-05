/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticlePage from "../components/sections/articlePage";

class Index extends Component {

  render() {

    return (
      <Layout>
        <div className="pt-12">
          <ArticlePage />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));