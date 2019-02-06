import ProductThumbnail from "../productGrid/productThumbnail";
import Router from "next/router";
import FeaturedStrainThumbnail from "./featuredStrainThumbnail";

const index = props => {
    let hoverId = props.misc.hoverId;
    let products = props.misc.featuredStrains;
    let route = Router.asPath.slice(0);
    let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(props.misc.mediaSize);
    let count = props.initialCount;
    if (props.misc.featureCount > count) {
        count = props.misc.featureCount;
    }
    let specificMax = props.specificMax,
        max = products.length;
    if (props.misc.mediaSize == "xl") {
        count = 3;
    }

    products = products.map((product, index) => {
        return (
            <div
                key={index}
                onMouseEnter={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, true);
                    let _index = 0;
                    while (product.price[_index] == -1) {
                        _index++;
                    }
                    props.quickAddToCartQty(_index);
                    props.modifyPotentialQuantity({
                        potentialQuantity: props.cart.potentialQuantity,
                        action: "SET",
                        quantity: 1
                    });
                }}
                onMouseLeave={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, false);
                }}
                onClick={e => {
                    if (isSmallMediumOrLargeDevice) {
                        Router.push(
                            "/product/" +
                                product.name
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")
                        );
                    }
                }}
                className={
                    hoverId == product._id
                        ? " relative bg-white mx-4 my-2 w-64 h-350 rounded-lg overflow-hidden shadow-md slowishish"
                        : " relative bg-white mx-4 my-2 w-64 h-350 rounded-lg overflow-hidden shadow-md slowishish"
                }>
                <FeaturedStrainThumbnail
                    isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
                    hoverId={hoverId}
                    index={index}
                    product={product}
                    {...props}
                />
            </div>
        );
    });
    return (
        <div className="flex flex-wrap w-full py-6 pb-12 sm:justify-center md:justify-center lg:justify-center xl:justify-start xxl:justify-around sm:overflow-hidden">
            {products.slice(0, count)}
            {count < specificMax && props.page == "shop" ? (
                <p
                    onClick={() => props.showMoreFeatures({ max: max, count: props.misc.featureCount + 2 })}
                    className="text-red-dark text-center w-full my-4 cursor-pointer">
                    more
                </p>
            ) : null}
        </div>
    );
};

export default index;
