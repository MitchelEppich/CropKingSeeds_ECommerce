/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

import AddToCart from "../components/sections/productPage/addToCart";
import ImageCarousel from "../components/sections/productPage/imageCarousel";
import OtherProducts from "../components/sections/productPage/otherProducts";
import MoreInfo from "../components/sections/productPage/moreInfo";
import Reviews from "../components/sections/productPage/reviews";
import Details from "../components/sections/productPage/details";
import Data from "../components/sections/productPage/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import Share from "../components/sections/productPage/share";
import Description from "../components/sections/productPage/description";
import Genetics from "../components/sections/productPage/genetics";
import Breadcrumb from "../components/sections/productPage/breadcrumb";
import AnchorLink from "react-anchor-link-smooth-scroll";

let rating;
let totalReviews;

class Index extends Component {
  componentDidMount() {
    let product = this.props.viewProduct.currentProduct;
    let _index = 0;
    while (product.price[_index] == -1) {
      _index++;
    }
    this.props.quickAddToCartQty(_index);
  }

  showRating() {
    rating = this.props.viewProduct.currentProduct.rating || 0;
    totalReviews = this.props.viewProduct.currentProduct.reviews.length;

    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <img src="../../static/img/CrownIcon_Inv.svg" className="w-8 h-8" />
      );
    }

    return arr;
  }

  render() {
    return (
      <Layout>
        <div className="p-8 lg:px-4 lg:py-8 md:px-4 md:py-8 sm:px-2 sm:py-8">
          <Breadcrumb {...this.props} />
          <div className="flex flex-wrap justify-start pt-2 relative">
            <div className="w-full xxl:inline-flex xl:inline-flex px-8 xxl:px-20 relative block">
              <div className="w-1/2 flex flex-wrap justify-center xl:w-1/2 lg:w-full md:w-full sm:w-full">
                <ImageCarousel {...this.props} />
              </div>
              <div className="flex flex-wrap content-start w-1/2 pl-4 md:pl-0 sm:pl-0 xl:w-1/2 lg:w-full md:w-full sm:w-full md:pt-6 md:mt-6 sm:pt-6 sm:mt-6 sm:border-t-2 sm:border-grey-lightest md:border-t-2 md:border-grey-lightest">
                <div className="w-full">
                  <h1 className="pl-10 ml-1 font-black lg:pl-12 sm:pl-0 md:pl-0">
                    {this.props.viewProduct.currentProduct.name}
                  </h1>
                </div>

                <div className="mt-1 relative cursor-pointer ml-1 pl-10 sm:pl-0 lg:pl-12 md:pl-0 w-full sm:mb-8 md:mb-8">
                  <div
                    className="inline-flex bg-red-light"
                    style={{
                      width: `${150 * (rating / 5)}px`,
                      height: "17px",
                      marginTop: "7px"
                    }}
                  />
                  <div
                    className="inline-flex bg-grey-lightest"
                    style={{
                      width: `${150 * ((5 - rating) / 5)}px`,
                      height: "17px",
                      marginTop: "7px"
                    }}
                  />
                  <div
                    style={{ opacity: "50%" }}
                    className="absolute pl-10 sm:pl-0 md:pl-0 lg:pl-12 pin-l inline-flex md:flex-col sm:flex-col"
                  >
                    <div className="">{this.showRating()} </div>
                    <AnchorLink className="items-center flex" href="#reviews">
                      <div className="ml-2 font-bold text-sm hover:text-grey-light items-center flex sm:w-full">
                        {rating.toFixed(1)}{" "}
                        <span className="sm:hidden md:hidden mx-1 ">
                          Crowns
                        </span>{" "}
                        ({totalReviews} reviews)
                      </div>
                    </AnchorLink>
                  </div>
                </div>

                <div className="w-full h-350 inline-flex mb-6 xl:block xl:h-300 lg:block lg:h-300 md:block md:h-300 sm:block sm:h-300 relative">
                  <div className="w-full mt-2 relative xl:w-full lg:w-full md:w-full sm:w-full xl:h-300 lg:h-300 md:h-300 sm:h-300">
                    <div className="absolute pin-b xl:pin lg:w-full md:w-full sm:w-full">
                      <Genetics {...this.props} />
                      <AddToCart {...this.props} />
                      <Share
                        copyToClipboard={this.copyToClipboard}
                        {...this.props}
                      />
                    </div>
                  </div>
                  {/* <img
                    src="../../static/img/topseller.png"
                    style={{ transform: "rotateZ(8deg)" }}
                    className="absolute pin-t pin-r w-24 mr-32 pt-12 opacity-50"
                  /> */}
                </div>
              </div>
            </div>
            <div className="xxl:w-full xxl:px-20 mt-4 block w-full px-8 xl:absolute-center">
              <Description {...this.props} />
              <Data {...this.props} />
            </div>

            <div className="w-full mt-12">
              <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
                Frequently Bought Together
              </h3>
              <div className="px-8 w-full mt-2">
                <OtherProducts {...this.props} />
              </div>
            </div>
            <div>
              <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
                Information on {this.props.viewProduct.currentProduct.name}
              </h3>
              <MoreInfo {...this.props} />
            </div>
            <div>
              <Reviews {...this.props} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setHoverId: id => dispatch(actions.setHoverId(id)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
    toggleFullDescription: () => dispatch(actions.toggleFullDescription()),
    setNewRating: index => dispatch(actions.setNewRating(index)),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    updateStrain: input => dispatch(actions.updateStrain(input)),
    setReviewCursor: input => dispatch(actions.setReviewCursor(input)),
    setReviewRateFilter: input => dispatch(actions.setReviewRateFilter(input)),
    modifyReview: input => dispatch(actions.modifyReview(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
