import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { TimelineLite } from "gsap";
import ProductThumbnail from "./productThumbnail";

class Index extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
  }

  componentDidMount() {
    this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: -30 }, 0.1);
    this.myTween.restart();
  }

  // quickAddSelection = val => {
  //   this.props.quickAddToCartQty(val);
  // }

  render() {
    let hoverId = this.props.misc.hoverId;
    let products = this.props.misc.strains;

    products = products
      .filter(a => {
        let _filter = this.props.shop.activeFilters;
        if (Object.keys(_filter).length == 0) return true;
        let _pass = true;
        if (_filter.type != null && _filter.type != a.type) _pass = false;
        if (_filter.genetic != null && _filter.genetic != a.genetic)
          _pass = false;
        if (_filter.cbd != null && _filter.cbd != a.cbd) _pass = false;
        if (_filter.thc != null && _filter.thc != a.thc) _pass = false;
        return _pass;
      })
      .map((product, index) => {
        return (
          <div
            key={index}
            ref={div => (this.myElements[index] = div)}
            onMouseEnter={() => {
              this.props.setHoverId(product._id);
            }}
            onMouseLeave={() => this.props.setHoverId(product._id)}
            className={
              hoverId == product._id
                ? "w-64 h-64 text-white relative z-50 slowish"
                : "w-64 h-64 text-white relative z-0 slowish"
            }
          >
            <ProductThumbnail
              hoverId={hoverId}
              product={product}
              {...this.props}
            />
          </div>
        );
      });

    return (
      <div className="w-3/4 min-h-500 text-white">
        <div
          className={
            this.props.shop.viewProductExpanded != null
              ? "flex flex-wrap justify-start"
              : "flex flex-wrap justify-start pt-16"
          }
        >
          {products}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHoverId: id => dispatch(actions.setHoverId(id)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    expandProduct: id => dispatch(actions.expandProduct(id)),
    modifyCart: input => dispatch(actions.modifyCart(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
