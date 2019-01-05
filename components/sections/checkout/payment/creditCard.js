import React from "react";
import { faAngleDown, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StringMask from "string-mask";

const CreditCard = props => {
  let pageGroup = "payment";

  let ccNumberFormat = new StringMask("0000-0000-0000-0000");

  if (props.checkout.orderDetails[pageGroup] == null) {
    let _orderDetails = props.checkout.orderDetails;

    _orderDetails[pageGroup] = {
      oridSuffix: "-KMH-7"
      // amount: 0, // Cost of cart -input
      // ccno: -1, // Card Number -input
      // cvvno: -1, // Card CVV Number -input
      // cctype: "", // Card Type -input
      // ccexpire: "", // Card Expiry -input
      // ccname: "", // Card Holder Name -input
    };

    props.setOrderDetails();
  }

  return (
    <div className="w-full mb-6">
      <div
        onClick={() => {
          props.setVisibleScreen({ input: "creditCard", clearAll: true });
        }}
        style={{
          border: "2px solid #e4e4e4",
          background: "#ffffff",
          color: "#191919"
        }}
        className="h-10 inline-flex w-full cursor-pointer"
      >
        <div className="w-4/5 p-2 flex items-center">
          <p>Pay with Credit Card</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen.includes("creditCard") ? (
        <div className="w-600 mx-auto p-2">
          <div className="w-full mt-2 text-center opacity-75">
            <p className="text-sm p-2">Cards Accepted:</p>
            <img src="../static/img/cards.png" width="100px" />
          </div>
          <div className="w-full mt-6">
            <input
              type="text"
              id="cardHolder"
              value={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].cardHolder || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = "ccname";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
              placeholder="Name on Card..."
              className="p-2 w-full"
            />
          </div>
          <div className="w-full mt-2 text-center relative inline-flex">
            <div className="w-full">
              <input
                type="text"
                id="cardNumber"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? ccNumberFormat.apply(
                        props.checkout.orderDetails[pageGroup].cardNumber
                      ) || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value.replace(new RegExp("-", "g"), "");
                  let _tag = "ccno";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });

                  _key = "type";
                  _value = getCardType(_value);
                  _tag = "cctype";
                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Credit Card Number..."
                className="p-2 w-full"
              />
            </div>
            <div className="absolute pin-r text-grey-light opacity-75">
              <img
                src={`../static/img/cc${(() => {
                  let _type = props.checkout.orderDetails[pageGroup].type;
                  switch (_type) {
                    case "Mastercard":
                      return "Mastercard";
                    case "Visa":
                      return "Visa";
                    default:
                      return "Default";
                  }
                })()}.png`}
                width="40px"
                className="mr-1"
                style={{
                  paddingTop: "5px"
                }}
              />
            </div>
          </div>
          <div className="w-full inline-flex mt-2">
            <div className="w-1/3 mr-1 inline-flex">
              <select
                placeholder=""
                className="p-2 w-full"
                id="month"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].month || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "ccexpire";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
              >
                <option value="" disabled selected>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="w-1/3 ml-1 inline-flex">
              <select
                placeholder=""
                className="p-2 w-full"
                id="year"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].year || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "ccexpire";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
              >
                <option value="" disabled selected>
                  Year
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="w-1/3 inline-flex relative">
              <div className="ml-2 w-full">
                <input
                  type="text"
                  placeholder="Security Code"
                  id="ccv"
                  value={
                    props.checkout.orderDetails[pageGroup] != null
                      ? props.checkout.orderDetails[pageGroup].ccv || ""
                      : undefined
                  }
                  onChange={e => {
                    let _orderDetails = props.checkout.orderDetails;
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.value;
                    let _tag = "ccvno";

                    props.modifyOrderDetails({
                      orderDetails: _orderDetails,
                      group: pageGroup,
                      key: _key,
                      value: _value,
                      tag: _tag
                    });
                  }}
                  size="3"
                  maxLength="3"
                  className="p-2 w-full mt-0 "
                />
              </div>
              <div className="mt-0 ml-2 absolute pin-r">
                <img
                  src="../static/img/securitycode.png"
                  width="40px"
                  className="opacity-50 pt-1 mr-1"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

let getCardType = number => {
  let ccType;
  if (number.match(new RegExp("^4")) != null) {
    ccType = "Visa";
  } else if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      number
    ) ||
    number.match(new RegExp("^5")) != null
  ) {
    ccType = "Mastercard";
  }
  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  // if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)){
  //     ccType = "Mastercard";
  // }
  // AMEX
  // re = new RegExp("^3[47]");
  // if (number.match(re) != null){
  //   ccType = "AMEX";
  // }
  return ccType;
};

export default CreditCard;