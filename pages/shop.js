/*******************************************/
/*Shop Page, renders shop products*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/sections/shop/filters";
import ProductGrid from "../components/sections/shop/productGrid";
import FeaturedStrainThumbnails from "../components/sections/shop/featuredStrainThumbnails";

class Index extends Component {
    // componentDidMount() {
    //     this.props.showMoreFeatures({
    //         max: this.props.misc.featuredStrains.length,
    //         count: 1
    //     });
    // }
    printStrains() {
        for (let i = 0; i < this.props.misc.strains.length; i++) {
            // console.log(
            //     this.props.misc.strains[i].name
            //         .toLowerCase()
            //         .split(" ")
            //         .join("-")
            // );
        }
    }
    render() {
        let mobile = ["sm", "md"].includes(this.props.misc.mediaSize);
        return (
            <Layout>
                {this.props.misc.strains != null &&
                this.props.misc.featuredStrains != null &&
                this.props.misc.strains.length > 0 ? (
                    <React.Fragment>
                        {/* {this.printStrains()} */}
                        <div
                            className={
                                this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                    ? "fixed"
                                    : "relative"
                            }>
                            <h3
                                className={
                                    this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                        ? "hidden"
                                        : "mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center"
                                }>
                                Shop Cannabis Seeds
                            </h3>
                            <div
                                className={
                                    this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                        ? " flex flex-wrap"
                                        : "flex flex-wrap relative"
                                }>
                                <div
                                    className={
                                        this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                            ? "hidden"
                                            : "sm:w-full md:w-full lg:w-2/5 xl:w-1/3 xxl:w-1/4 slow relative mt-8 mb-12 sm:mb-6 md:mb-6"
                                    }>
                                    <div>
                                        <Filters {...this.props} />
                                    </div>
                                    {!mobile ? (
                                        <div className="border border-grey-lightest mt-8 sm:mt-10 md:mt-20 md:mb-0">
                                            <div className="shadow-md">
                                                <h3 className="text-left pl-4 font-bold mx-auto bg-white text-grey p-2 text-xl w-full ">
                                                    Featured Strains
                                                </h3>
                                            </div>

                                            <FeaturedStrainThumbnails
                                                page={"shop"}
                                                specificMax={8}
                                                initialCount={1}
                                                {...this.props}
                                            />
                                        </div>
                                    ) : null}
                                </div>

                                <ProductGrid {...this.props} />
                                {mobile ? (
                                    <div className="border border-grey-lightest mt-8 sm:mt-10 md:mt-20 md:mb-0">
                                        <div className="shadow-md">
                                            <h3 className="text-left pl-4 font-bold mx-auto bg-white text-grey p-2 text-xl w-full ">
                                                Featured Strains
                                            </h3>
                                        </div>

                                        <FeaturedStrainThumbnails
                                            page={"shop"}
                                            specificMax={8}
                                            initialCount={1}
                                            {...this.props}
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <p>Loading...</p>
                )}
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
        getStrains: () => dispatch(actions.getStrains()),
        toggleFilter: input => dispatch(actions.toggleFilter(input)),
        toggleShowFilters: input => dispatch(actions.toggleShowFilters(input)),
        clearFilters: () => dispatch(actions.clearFilters()),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        clearCart: () => dispatch(actions.clearCart()),
        setSort: input => dispatch(actions.setSort(input)),
        expandProduct: id => dispatch(actions.expandProduct(id)),
        setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
        toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
        setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
        showMoreFeatures: input => dispatch(actions.showMoreFeatures(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
