// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Heading from "../components/sections/contactUs/heading";
import EmailSent from "../components/sections/contactUs/emailSent";
import ContactDetails from "../components/sections/contactUs/contactDetails";
import {
  Name,
  Email,
  Subject,
  Message,
  Sponsorship,
  Advertisement
} from "../components/sections/contactUs/form";
class Index extends Component {
  constructor(props) {
    super(props);
    advertisementDate: new Date();
  }
  static async getInitialProps({ req }) {
    let styleLogoKing = {
      WebkitFilter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)",
      filter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)"
    };
    return { styleLogoKing };
  }
  render() {
    return (
      <Layout {...this.props}>
        <div className="pt-1">
          <div className="w-full p-2 pb-12">
            <Heading {...this.props} />
            <div className="w-full p-2 mt-10">
              <div
                style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.18)" }}
                className="w-700 sm:w-full sm:px-2 lg:w-600 md:w-full lg:px-2 md:px-2 md:pt-0 min-h-600 sm:h-full md:h-full md:px-2 xxl:mx-auto xl:mx-auto px-8 relative rounded-lg p-2"
              >
                <div className="w-full p-2">
                  <h2
                    // onClick={this.getResponse}
                    className="font-extrabold text-3xl md:text-2xl sm:text-2xl p-2 mt-4"
                  >
                    Send us a message
                  </h2>
                  <p className="text-sm p-1 px-2">
                    <span className="text-red">*</span> Indicates required field
                  </p>
                </div>
                <div className="p-2 w-full">
                  {!this.props.misc.emailSent ? (
                    <form
                      onSubmit={e => {
                        this.submitForm(e);
                      }}
                    >
                      <div className="w-500 lg:w-400 md:w-full sm:w-full">
                        <Subject {...this.props} />
                        <Name {...this.props} />
                        <Email {...this.props} />
                        {this.props.misc.contactSubject === "Advertisement" ? (
                          <Advertisement {...this.props} />
                        ) : null}

                        {this.props.misc.contactSubject ===
                        "Event Sponsorship" ? (
                          <Sponsorship {...this.props} />
                        ) : null}

                        <Message {...this.props} />
                        <div className="mx-auto text-left flex justify-left my-2 mb-4 p-1">
                          <ReCAPTCHA
                            sitekey="6LdVgJIUAAAAADf3mm-422DqVktwJJuPs5TB2578"
                            ref="recaptchaRef"
                            size={
                              ["sm", "md", "lg"].includes(
                                this.props.misc.mediaSize
                              )
                                ? "compact"
                                : "normal"
                            }
                          />
                        </div>
                        <div className="w-main sm:w-full md:w-full flex justify-center">
                          <div className="w-full sm:w-full md:w-full md:justify-center flex justify-center">
                            <button
                              type="submit"
<<<<<<< HEAD
                              className="p-2 sm:p-3 md:p-3 px-4 w-150 sm:w-full md:w-full text-lg text-white rounded bg-red-dark hover:bg-red-light font-bold"
=======
                              className="p-2 sm:p-3 md:p-3 px-4 w-full sm:w-full md:w-full text-lg text-white rounded bg-red-dark hover:bg-red-light font-bold"
>>>>>>> 37c7df00052b3bcc76008f3cd4910bacc011de5c
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <EmailSent {...this.props} />
                  )}
<<<<<<< HEAD
                  <ContactDetails {...this.props} />
=======
                  <div className="absolute sm:w-full sm:relative md:w-full md:relative overflow-hidden sm:pin md:pin my-auto pin-r pin-y w-350 h-500 sm:h-full sm:border sm:border-grey-lightest md:border md:border-grey-lightest md:mt-8 md:pt-0 sm:pt-0 sm:mt-8 sm:pb-4 xxl:shadow-lg xl:shadow-lg lg:shadow-lg bg-white -mr-20 md:rounded-lg sm:rounded-lg">
                    <div className="bg-red-dark text-center text-white py-2 p-1">
                      <h2 className="p-3 py-0 text-3xl font-extrabold">
                        Contact us
                      </h2>
                      <p className="text-white font-bold">
                        24 hour customer service
                      </p>
                    </div>
                    <div className="bg-white p-2 px-6 md:px-3 sm:px-2">
                      <div className="inline-flex mt-4 items-center w-full flex">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="fa-lg sm:p-1 mr-2 text-grey opacity-25"
                        />
                        <p className="p-2 text-2xl font-black">Phone</p>
                      </div>
                      <div className="ml-8 pl-1">
                        <p className="p-1 pb-2">
                          <span className="font-extrabold">Canada:</span> (604)
                          563-0291
                        </p>
                        <p className="p-1 pb-2">
                          <span className="font-extrabold">USA:</span> +1 (844)
                          276-7546
                        </p>
                        <p className="p-1 pb-2">
                          <span className="font-extrabold">Worldwide:</span> +1
                          (604) 563-0291
                        </p>
                      </div>
                      <div className="inline-flex mt-4 items-center w-full flex">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="fa-lg mr-2 sm:p-1 text-grey opacity-25"
                        />
                        <p className="p-2 text-2xl font-black">Email</p>
                      </div>
                      <div className="ml-8 pl-1">
                        <p className="p-1 pb-2">
                          <a
                            className="text-grey hover:text-red"
                            href="mailto:info@cropkingseeds.com"
                          >
                            info@cropkingseeds.com
                          </a>
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          document.getElementById("tawkto").click();
                          this.props.refreshEmailForm();
                        }}
                        className="w-full text-center mt-10 relative scale-item cursor-pointer sm:my-4 md:my-4"
                      >
                        <div className="w-full relative">
                          <img
                            style={styleLogoKing}
                            src={
                              this.props.misc.CFURL +
                              "/logos/cks-logo-header.png"
                            }
                            className="w-32"
                          />
                        </div>
                        <div className="absolute -mb-2 pin-b w-full mx-auto">
                          <h3 className="bg-red-dark w-main rounded px-4 text-sm mx-auto shadow-md text-white uppercase p-2 hover:bg-red-light">
                            Chat with the king
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
>>>>>>> 37c7df00052b3bcc76008f3cd4910bacc011de5c
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  changeDate(date) {
    this.setState({
      advertisementDate: date
    });
  }

  submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new window.FormData(form);
    if (this.refs.recaptchaRef.getValue() != null) {
      this.props.sendEmail({
        type: "contact",
        name: formData.get("name"),
        body: formData.get("body"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        response: this.refs.recaptchaRef.getValue(),
        date: formData.get("date") !== null ? formData.get("date") : "",
        company:
          formData.get("company") !== null ? formData.get("company") : "",
        cost:
          formData.get("cost") !== null ? parseFloat(formData.get("cost")) : "",
        mediaKit:
          formData.get("mediaKit") !== null ? formData.get("mediaKit") : "",
        phone: formData.get("phone") !== null ? formData.get("phone") : "",
        location:
          formData.get("location") !== null ? formData.get("location") : "",
        website:
          formData.get("website") !== null ? formData.get("website") : "",
        eventName:
          formData.get("eventName") !== null ? formData.get("eventName") : ""
      });
      form.reset();
    } else {
      console.log("captcha null");
    }
  };
}

const mapDispatchToprops = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setSubject: subject => dispatch(actions.setSubject(subject)),
    sendEmail: input => dispatch(actions.sendEmail(input)),
    refreshEmailForm: () => dispatch(actions.refreshEmailForm()),
    setRecaptcha: response => dispatch(actions.setRecaptcha(response)),
    pickDate: date => dispatch(actions.pickDate(date))
  };
};

export default connect(
  state => state,
  mapDispatchToprops
)(withData(Index));
