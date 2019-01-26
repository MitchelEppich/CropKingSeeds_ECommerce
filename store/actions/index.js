/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import Cart from "./cart";
import Checkout from "./checkout";
import Navigation from "./navigation";
import Shop from "./shop";
import About from "./about";
import ViewProduct from "./viewProduct";
import Germination from "./germination";
import Faq from "./faq";

import { inferStrainData } from "../utilities/strain";

const uri = "http://localhost:3000/graphql";
// const uri = "http://192.168.0.57:3000/graphql";

const imports = {
  ...Cart(uri),
  ...Checkout(uri),
  ...Navigation(uri),
  ...Shop(uri),
  ...ViewProduct(uri),
  ...Germination(uri),
  ...About(uri),
  ...Faq(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_ID: "SET_HOVER_ID",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  NEXT_BANNER_SLIDE: "NEXT_BANNER_SLIDE",
  SET_STRAINS: "SET_STRAINS",
  SET_CONTEXT: "SET_CONTEXT",
  TOGGLE_STEPS_CHECKOUT: "TOGGLE_STEPS_CHECKOUT",
  SHOW_DIFFERENT_ADDRESS: "SHOW_DIFFERENT_ADDRESS",
  SET_AGE_VERIFICATION: "SET_AGE_VERIFICATION",
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE",
  SUBSCRIBE_TO_NEWSLETTER: "SUBSCRIBE_TO_NEWSLETTER",
  SET_EMAIL: "SET_EMAIL",
  SEND_EMAIL: "SEND_EMAIL"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input.input,
      clearAll: input.clearAll
    };
  },
  setMediaSize: input => {
    return {
      type: actionTypes.SET_MEDIA_SIZE,
      input: input.mediaSize
    };
  },
  toggleStepsCheckout: input => {
    return {
      type: actionTypes.TOGGLE_STEPS_CHECKOUT,
      input: input
    };
  },
  setAgeVerification: input => {
    let _ageVerification = input.ageVerification;
    let _group = input.group;
    let _value = input.value;

    if (_ageVerification == null) _ageVerification = {};

    _ageVerification[_group] = _value;

    return { type: actionTypes.SET_AGE_VERIFICATION, input: _ageVerification };
  },
  toggleShowDifferentAddress: input => {
    return {
      type: actionTypes.SHOW_DIFFERENT_ADDRESS,
      input: input
    };
  },
  setContext: input => {
    return { type: actionTypes.SET_CONTEXT, input: input };
  },
  setHoverId: (id, turnOn) => {
    return {
      type: actionTypes.SET_HOVER_ID,
      id: id,
      turnOn: turnOn
    };
  },
  setGeneHoverIndex: index => {
    return {
      type: actionTypes.SET_GENE_HOVER_INDEX,
      index: index
    };
  },
  nextBannerSlide: () => {
    return {
      type: actionTypes.NEXT_BANNER_SLIDE
    };
  },
  getStrains: () => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = { query: query.allStrains };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _strains = data.data.allStrains;
          let _new = [];
          for (let strain of _strains) {
            _new.push(inferStrainData(strain));
          }
          dispatch(actions.setStrains(_new));
          return Promise.resolve(_new);
        })
        .catch(error => console.log(error));
    };
  },
  setEmail: input => {
    return {
      type: actionTypes.SET_EMAIL,
      input: input.email
    }
  },
  subscribeToNewsletter: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.subscribeToNewsletter,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SUBSCRIBE_TO_NEWSLETTER
          });
        })
        .catch(error => console.log(error));
    };
  },
  sendEmail: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.sendEmail,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SEND_EMAIL
          });
        })
        .catch(error => console.log(error));
    };
  },
  setStrains: strains => {
    return {
      type: actionTypes.SET_STRAINS,
      strains: strains
    };
  }
};

const query = {
  allStrains: gql`
    query {
      allStrains {
        _id
        name
        price
        strainImg
        packageImg
        description
        effect
        genetic
        yield
        flowerTime
        difficulty
        type
        og
        pthc
        pcbd
        pcbn
        country
        sotiId
        env
        sativa
        indica
        ruderalis
        rating
        reviews
        ratingQuantity
      }
    }
  `
};

const mutation = {
  subscribeToNewsletter: gql`
    mutation($email: String) {
      subscribeToNewsletter(email: $email)
    }
  `,
  sendEmail: gql`
  mutation($email:String, $body:String, $name:String, $subject:String) {
  sendEmail(input: {email: $email, body:$body, name:$name, subject:$subject})
}`
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
