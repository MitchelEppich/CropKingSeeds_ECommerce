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
import Cms from "./cms";

import { inferStrainData } from "../utilities/strain";

const uri = "http://192.168.0.22:3000/graphql";
// const uri = "http://159.203.5.200:3000/graphql";

const imports = {
    ...Cart(uri),
    ...Checkout(uri),
    ...Navigation(uri),
    ...Shop(uri),
    ...ViewProduct(uri),
    ...Germination(uri),
    ...About(uri),
    ...Faq(uri),
    ...Cms(uri)
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
    SEND_EMAIL: "SEND_EMAIL",
    REFRESH_EMAIL_FORM: "REFRESH_EMAIL_FORM",
    GET_FEATURED_LIST: "GET_FEATURED_LIST",
    RECALL_AGE_VERIFICATION: "RECALL_AGE_VERIFICATION",
    SET_SEARCH: "SET_SEARCH",
    ADD_TALK_TO_LISTENER: "ADD_TALK_TO_LISTENER",
    SET_CURRENT_EVENT: "SET_CURRENT_EVENT",
    GET_ALL_NEWS: "GET_ALL_NEWS",
    GET_FEATURED_NEWS: "GET_FEATURED_NEWS",
    SHOW_MORE_FEATURES: "SHOW_MORE_FEATURES"
};

const actions = {
    setVisibleScreen: input => {
        return {
            type: actionTypes.SET_VISIBLE_SCREEN,
            input: input.input,
            group: input.group,
            clearAll: input.clearAll
        };
    },
    setCurrentEvent: input => {
        let total = input.events.length;
        let index = Math.max(0, Math.min(input.index, total)) % total || 0;

        return {
            type: actionTypes.SET_CURRENT_EVENT,
            index: index
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
        if (_group == "country") _ageVerification.state = null;

        sessionStorage.setItem("ageVerify", JSON.stringify(_ageVerification));

        return { type: actionTypes.SET_AGE_VERIFICATION, input: _ageVerification };
    },
    recallAgeVerification: () => {
        return dispatch => {
            return new Promise((resolve, reject) => {
                let recall = sessionStorage.getItem("ageVerify");
                let _obj = {};
                if (recall != null) {
                    _obj = JSON.parse(recall);
                }

                resolve(_obj);

                dispatch({
                    type: actionTypes.RECALL_AGE_VERIFICATION,
                    input: _obj
                });
            });
        };
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
        };
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
    },
    refreshEmailForm: () => {
        return { type: actionTypes.REFRESH_EMAIL_FORM };
    },
    getFeaturedList: () => {
        return async dispatch => {
            const link = new HttpLink({ uri, fetch: fetch });
            const operation = { query: query.getFeaturedStrains };

            return await makePromise(execute(link, operation))
                .then(data => {
                    let _strains = data.data.getFeaturedList;
                    let _new = [];
                    for (let strain of _strains) {
                        let $strain = inferStrainData(strain);
                        $strain = { ...$strain, _id: $strain._id + "f" };
                        _new.push($strain);
                    }
                    dispatch({
                        type: actionTypes.GET_FEATURED_LIST,
                        input: _new
                    });
                    return Promise.resolve(_new);
                })
                .catch(error => console.log(error));
        };
    },
    setSearch: value => {
        return {
            type: actionTypes.SET_SEARCH,
            value: value
        };
    },
    addTalkToListener: bool => {
        return {
            type: actionTypes.ADD_TALK_TO_LISTENER,
            bool: bool
        };
    },
    getAllNews: () => {
        return dispatch => {
            const link = new HttpLink({ uri, fetch: fetch });
            const operation = {
                query: query.getAllNews
            };

            makePromise(execute(link, operation))
                .then(data => {
                    let categoryNews = {};
                    let news = data.data.allNews;

                    for (let _news of news) {
                        if (categoryNews[_news.category] == null) categoryNews[_news.category] = [];
                        categoryNews[_news.category].push(_news);
                    }

                    dispatch({
                        type: actionTypes.GET_ALL_NEWS,
                        input: categoryNews
                    });
                })
                .catch(error => console.log(error));
        };
    },
    getFeaturedNews: () => {
        return dispatch => {
            const link = new HttpLink({ uri, fetch: fetch });
            const operation = {
                query: query.getFeaturedNews
            };

            makePromise(execute(link, operation))
                .then(data => {
                    let news = data.data.allFeaturedNews;

                    dispatch({
                        type: actionTypes.GET_FEATURED_NEWS,
                        input: news
                    });
                })
                .catch(error => console.log(error));
        };
    },
    showMoreFeatures: input => {
        let max = input.max;
        let count = Math.max(0, Math.min(input.count, max)) % max || 1;
        return {
            type: actionTypes.SHOW_MORE_FEATURES,
            count: count
        };
    }
};

const query = {
    getAllNews: gql`
        query {
            allNews {
                _id
                title
                body
                date
                url
                imageUrl
                location
                locationUrl
                sponsored
                category
            }
        }
    `,
    getFeaturedNews: gql`
        query {
            allFeaturedNews {
                _id
                title
                body
                date
                url
                imageUrl
                location
                locationUrl
                sponsored
                category
            }
        }
    `,
    getFeaturedStrains: gql`
        {
            getFeaturedList {
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
                featured
            }
        }
    `,
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
                featured
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
        mutation($email: String, $body: String, $name: String, $subject: String) {
            sendEmail(input: { email: $email, body: $body, name: $name, subject: $subject })
        }
    `
};

export default {
    // TYPES
    ...actionTypes,
    // IMPORTS
    ...imports,
    // ACTIONS
    ...actions
};
