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

const uri = "http://localhost:3000/graphql";

const imports = {
  ...Cart(uri),
  ...Checkout(uri),
  ...Navigation(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_ID: "SET_HOVER_ID",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  NEXT_BANNER_SLIDE: "NEXT_BANNER_SLIDE",
  SET_STRAINS: "SET_STRAINS",
  SET_CONTEXT: "SET_CONTEXT",
  TOGGLE_FILTER: "TOGGLE_FILTER",
  CLEAR_FILTERS: "CLEAR_FILTERS",
  TOGGLE_STEPS_CHECKOUT: "TOGGLE_STEPS_CHECKOUT"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input
    };
  },
  toggleStepsCheckout: input => {
    return {
      type: actionTypes.TOGGLE_STEPS_CHECKOUT,
      input: input
    };
  },
  setContext: input => {
    return { type: actionTypes.SET_CONTEXT, input: input };
  },
  setHoverId: id => {
    return {
      type: actionTypes.SET_HOVER_ID,
      id: id
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

      await makePromise(execute(link, operation))
        .then(data => {
          Promise.resolve(dispatch(actions.setStrains(data.data.allStrains)));
        })
        .catch(error => console.log(error));
    };
  },
  setStrains: strains => {
    return {
      type: actionTypes.SET_STRAINS,
      strains: strains
    };
  },
  toggleFilter: filter => {
    return {
      type: actionTypes.TOGGLE_FILTER,
      filter: filter
    };
  },
  clearFilters: () => {
    return {
      type: actionTypes.CLEAR_FILTERS
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
      }
    }
  `
};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
