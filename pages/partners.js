/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Partners from "../components/sections/partners";

class Index extends Component {

  render() {

    return (
      <Layout>
           <Partners {...this.props} />
           <div className="w-container mx-auto mt-8 text-center pb-12">
               <h3>Interested in joining the list?</h3>
               <h3>Singup using our application below.</h3>

               <div className="p-3 bg-red text-white mt-8 mx-auto text-center cursor-pointer h-12 pt-3 w-64 text-2xl font-extrabold scale-item">
                    Join Us!
               </div>     
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