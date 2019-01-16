/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import CheckoutReducer from "./checkout";
import CartReducer from "./cart";
import NavigationReducer from "./navigation";
import ShopReducer from "./shop";
import PartnerReducer from "./partner";
import ViewProductReducer from "./viewProduct";
import DetailReducer from "./detail";
import GerminationReducer from "./germination";

const initialState = {
    visibleScreen: ["dogs"], // When [] show main screen
    strains: null,
    hoverId: null,
    geneHoverIndex: null,
    stepsCheckout: 0,
    showDifferentAddress: false,
    ageVerification: null,
    // checkoutScreen: "productsScreen",
    activeBannerSlide: 2,
    notification: null, //"Crop King Seeds will be at High Times Cannabis Cup Sept. 13-16 2019",
    bannerSlides: [
        {
            color: "blue",
            style: {
                // backgroundImage: "url(../static/img/banner3.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
        },
        {
            color: "yellow",
            style: {
                // backgroundImage: "url(../static/img/banner1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
        },
        {
            // color: "green-dark",
            style: {
                backgroundImage: "url(../static/img/banner1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
        }
    ],
    bannerSlidePositions: [
        { transform: " translateX(-100%)" },
        { transform: " translateX(0)", transition: "1s all ease-in-out" },
        { transform: " translateX(100%)", transition: "1s all ease-in-out" }
    ],
    mediaSize: "xl"
};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBLE_SCREEN:
            let _clearAll = action.clearAll;
            let screenIndex = state.visibleScreen.indexOf(action.input);
            let screens = state.visibleScreen;
            if (screenIndex > -1) {
                screens.splice(screenIndex, 1);
                return updateObject(state, {
                    visibleScreen: [...screens]
                });
            } else if (_clearAll) {
                return updateObject(state, { visibleScreen: [action.input] });
            } else {
                return updateObject(state, {
                    visibleScreen: [...state.visibleScreen, action.input]
                });
            }
        case actionTypes.SET_HOVER_ID:
            return updateObject(state, {
                hoverId: state.hoverId == action.id ? null : action.id
            });
        case actionTypes.SET_MEDIA_SIZE:
            return updateObject(state, {
                mediaSize: action.input
            });
        case actionTypes.TOGGLE_STEPS_CHECKOUT:
            return updateObject(state, {
                stepsCheckout: action.input
            });
        case actionTypes.SET_AGE_VERIFICATION:
            return updateObject(state, {
                ageVerification: action.input
            });
        case actionTypes.SHOW_DIFFERENT_ADDRESS:
            return updateObject(state, {
                showDifferentAddress: !state.showDifferentAddress
            });
        case actionTypes.SET_CONTEXT:
            return updateObject(state, {
                context: action.input
            });
        case actionTypes.SET_GENE_HOVER_INDEX:
            return updateObject(state, {
                geneHoverIndex: state.geneHoverIndex == action.index ? null : action.index
            });
        case actionTypes.NEXT_BANNER_SLIDE:
            let slideIndex = state.activeBannerSlide;
            let slidesLength = state.bannerSlidePositions.length - 1;
            if (slideIndex === slidesLength) {
                slideIndex = -1;
            }
            ++slideIndex;
            return updateObject(state, {
                activeBannerSlide: slideIndex
            });
        case actionTypes.SET_STRAINS:
            return updateObject(state, {
                strains: [...action.strains]
            });
        default:
            return state;
    }
};

export default combineReducers({
    misc: indexReducer,
    nav: NavigationReducer,
    cart: CartReducer,
    checkout: CheckoutReducer,
    shop: ShopReducer,
    partner: PartnerReducer,
    viewProduct: ViewProductReducer,
    detail: DetailReducer,
    germination: GerminationReducer
});
