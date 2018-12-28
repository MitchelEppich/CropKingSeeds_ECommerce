/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";
import {TimelineLite} from "gsap";

const initialState = {
  visibleScreen: ["dogs"], // When [] show main screen
  products: [
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plant_url" : "../static/img/cannabis-plant.png",
      "package_url" : "../static/img/cks-package.png",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
  ],
  hoverIndex: null,
  geneHoverIndex: null,
  viewCart: false
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let index = state.visibleScreen.indexOf(action.input);
      if (index > -1) {
        state.visibleScreen.splice(index, 1);
        return state;
      } else {
        return updateObject(state, {
          visibleScreen: [...state.visibleScreen, action.input]
        });
      }
    case actionTypes.SET_HOVER_INDEX:
      return updateObject(state, {
        hoverIndex: state.hoverIndex == action.index ? null : action.index
      });
    case actionTypes.SET_GENE_HOVER_INDEX:
      return updateObject(state, {
        geneHoverIndex:  state.geneHoverIndex == action.index ? null : action.index
      });
    default:
      return state;
  }
};

// export default indexReducer;
export default combineReducers({
  misc: indexReducer
});
