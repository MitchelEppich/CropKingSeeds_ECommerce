/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../components/partials/header";
import BannerCarousel from "../components/sections/bannerCarousel";
import GenePreview from "../components/sections/genePreview";
import Post from "../components/sections/post";
import Footer from "../components/partials/footer";
import ProductPreview from "../components/sections/checkout/productPreview";
import Coupon from "../components/sections/checkout/coupon";
import Shipping from "../components/sections/checkout/shipping";
import ShippingMethod from "../components/sections/checkout/shipping/shippingMethod";
import BillingAddress from "../components/sections/checkout/billing/";
import Payment from "../components/sections/checkout/payment";
import Checkout from "../components/sections/checkout";
import Confirmation from "../components/sections/checkout/confirmation";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Index extends Component {
  componentDidMount() {
    this.props.toggleStepsCheckout(0);
    let _orderDetails = this.props.checkout.orderDetails;
    this.props.modifyOrderDetails({
      orderDetails: _orderDetails,
      requestUpdateOfGroup: { group: "payment", value: true }
    });
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <div className="text-center w-full pt-12 bg-white relative">
          <h1 className="text-4xl font-bold text-black">Checkout Preview</h1>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            // this.props.toggleStepsCheckout(1);
            if (this.props.misc.stepsCheckout == 3) {
              getCustomerIP(ip => {
                if (ip == null) {
                  console.log("Failed to fetch IP");
                  return;
                }
                this.props
                  .processOrder({
                    orderDetails: {
                      ...this.props.checkout.orderDetails,
                      CardHolderIp: ip
                    }
                  })
                  .then(res => {
                    console.log(res);
                    this.props.toggleStepsCheckout(
                      this.props.misc.stepsCheckout + 1
                    );
                  });
              });
            } else {
              this.props.misc.stepsCheckout < 4
                ? this.props.toggleStepsCheckout(
                    this.props.misc.stepsCheckout + 1
                  )
                : null;
            }
          }}
        >
          <div className="w-container mx-auto pt-12 bg-white">
            <Checkout {...this.props} />
            {this.props.misc.stepsCheckout == 0 ? (
              <div>
                <ProductPreview {...this.props} />
                <hr
                  style={{ border: "1px solid rgb(228, 228, 228)" }}
                  className="my-6"
                />
                <Coupon {...this.props} />
              </div>
            ) : null}

            {this.props.misc.stepsCheckout == 1 ? (
              <div>
                <Shipping {...this.props} />
                <hr
                  style={{ border: "1px solid rgb(228, 228, 228)" }}
                  className="my-6"
                />
                <ShippingMethod {...this.props} />
              </div>
            ) : null}

            {this.props.misc.stepsCheckout == 2 ? (
              <BillingAddress {...this.props} />
            ) : null}

            {this.props.misc.stepsCheckout == 3 ? (
              <Payment {...this.props} />
            ) : null}

            {this.props.misc.stepsCheckout == 4 ? (
              <Confirmation {...this.props} />
            ) : null}
          </div>

          <div className="w-container mx-auto">
            <hr
              style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
              className=""
            />

            <div className="w-full inline-flex justify-between">
              <div
                onClick={() => {
                  this.props.misc.stepsCheckout > 0
                    ? this.props.toggleStepsCheckout(
                        this.props.misc.stepsCheckout - 1
                      )
                    : null;
                }}
                className="w-200 p-2 text-left cursor-pointer flex items-center hover:text-red"
              >
                {this.props.misc.stepsCheckout != 0 ? (
                  <span className="flex items-center font-extrabold text-grey-light hover:text-red-dark text-2xl uppercase">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="fa-2x mr-4"
                    />
                    Back
                  </span>
                ) : null}
              </div>

              <span
                style={{ height: "40px", borderLeft: "2px solid #ececec" }}
              />

              <div
                className={`w-200 p-2 text-right justify-end cursor-pointer flex items-center hover:text-red ${
                  Object.keys(this.props.cart.items).length == 0 ||
                  (this.props.misc.stepsCheckout == 3 &&
                    this.props.checkout.orderDetails.payment != null &&
                    this.props.checkout.orderDetails.payment.method == null) ||
                  (this.props.checkout.orderDetails.shipping != null &&
                    this.props.misc.stepsCheckout == 1 &&
                    this.props.checkout.orderDetails.shipping.shippingCost ==
                      null)
                    ? "opacity-50 unselectable pointer-events-none"
                    : ""
                }`}
              >
                {this.props.misc.stepsCheckout != 4 ? (
                  <button
                    className="flex items-center font-extrabold text-grey-light hover:text-red-dark text-2xl uppercase"
                    type="submit"
                  >
                    Next
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="fa-2x ml-4"
                    />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setContext: input => dispatch(actions.setContext(input)),
    toggleStepsCheckout: input => dispatch(actions.toggleStepsCheckout(input)),
    modifyOrderDetails: input => dispatch(actions.modifyOrderDetails(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setOrderDetails: input => dispatch(actions.setOrderDetails(input)),
    getBitcoinData: input => dispatch(actions.getBitcoinData(input)),
    toggleShowDifferentAddress: input =>
      dispatch(actions.toggleShowDifferentAddress(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    processOrder: input => dispatch(actions.processOrder(input)),
    clearCart: () => dispatch(actions.clearCart())
  }; // setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input)),
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));

let getCustomerIP = callback => {
  var ip_dups = {};

  //compatibility for firefox and chrome
  var RTCPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection;
  var useWebKit = !!window.webkitRTCPeerConnection;

  //bypass naive webrtc blocking using an iframe
  if (!RTCPeerConnection) {
    //NOTE: you need to have an iframe in the page right above the script tag
    //
    //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
    //<script>...getIPs called in here...
    //
    var win = iframe.contentWindow;
    RTCPeerConnection =
      win.RTCPeerConnection ||
      win.mozRTCPeerConnection ||
      win.webkitRTCPeerConnection;
    useWebKit = !!win.webkitRTCPeerConnection;
  }

  //minimal requirements for data connection
  var mediaConstraints = {
    optional: [{ RtpDataChannels: true }]
  };

  var servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };

  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);

  function handleCandidate(candidate) {
    //match just the IP address
    var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
    var ip_addr = ip_regex.exec(candidate)[1];

    //remove duplicates
    if (ip_dups[ip_addr] === undefined) callback(ip_addr);

    ip_dups[ip_addr] = true;
  }

  //listen for candidate events
  pc.onicecandidate = function(ice) {
    //skip non-candidate events
    if (ice.candidate) handleCandidate(ice.candidate.candidate);
  };

  //create a bogus data channel
  pc.createDataChannel("");

  //create an offer sdp
  pc.createOffer(
    function(result) {
      //trigger the stun server request
      pc.setLocalDescription(result, function() {}, function() {});
    },
    function() {}
  );

  //wait for a while to let everything done
  setTimeout(function() {
    //read candidate info from local description
    var lines = pc.localDescription.sdp.split("\n");

    lines.forEach(function(line) {
      if (line.indexOf("a=candidate:") === 0) handleCandidate(line);
    });
  }, 1000);
};
