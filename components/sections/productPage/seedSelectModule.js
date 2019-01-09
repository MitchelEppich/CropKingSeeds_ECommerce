import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

const seedSelectModule = props => {
  let showSeedAmounts = () => {
    let _product = props.product || props.viewProduct.currentProduct;
    let _arr = _product.price;
    return _arr.map((price, index) => {
      return (
        <button
          key={_product.sotiId + index}
          onClick={() => props.quickAddToCartQty(index)}
          className={`${
            props.shop.quickAddToCartQty === index
              ? "bg-red-dark text-white w-18 h-6 flex flex-wrap text-center justify-center leading-normal uppercase font-bold"
              : "bg-white text-black w-18 h-6 flex flex-wrap text-center justify-center leading-normal uppercase font-bold"
          } ${
            price == -1 ? "opacity-50 pointer-events-none unselectable" : ""
          }`}
        >
          {[5, 10, 25][index]}
          <span
            className={
              props.shop.quickAddToCartQty === index
                ? "text-white text-xs h-6 pt-1"
                : "text-red-dark text-xs h-6 pt-1"
            }
          >
            seeds
          </span>
        </button>
      );
    });
  };

  return (
    <div className="w-54 h-12 flex flex-wrap content-center">
      {showSeedAmounts()}
      <div
        style={{
          boxShadow:
            "0 1px 2px 0 rgba(0,0,0,0.08), 0 -2px 2px 0 rgba(0,0,0,0.08)"
        }}
        className="w-54 h-6 flex justify-between"
      >
        <button
          onClick={() =>
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "MODIFY",
              quantity: -1
            })
          }
          className="w-6 bg-grey-light text-sm text-white"
        >
          <FontAwesomeIcon
            icon={faMinus}
            className="fa-sm text-white cursor-pointer"
          />
        </button>
        <input
          onBlur={e => {
            let _value = e.target.value;
            if (_value == null || _value == "" || parseInt(_value) < 1) {
              props.modifyPotentialQuantity({
                potentialQuantity: props.cart.potentialQuantity,
                action: "SET",
                quantity: 1
              });
            }
          }}
          onChange={e => {
            let _value = e.target.value;
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "SET",
              quantity: parseInt(_value)
            });
          }}
          value={props.cart.potentialQuantity || ""}
          className="text-lg text-center w-48 border-0 font-bold pt-1 leading-none"
          type="number"
        />
        <button
          onClick={() =>
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "MODIFY",
              quantity: 1
            })
          }
          className="w-6 bg-grey-light text-sm text-white"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="fa-sm text-white cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default seedSelectModule;
