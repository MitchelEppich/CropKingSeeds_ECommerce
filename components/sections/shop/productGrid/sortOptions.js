const sortOptions = props => {
  let showSortOptions = props.sortOptions.map((val, index) => {
    let sort = props.shop.sort;
    return (
      <div
        key={index}
        className={`px-2 w-150 p-1 border-b border-grey-lightest text-left font-bold cursor-pointer hover:text-grey ${
          props.shop.sort == val[0] ? "bg-smoke-grey" : "bg-white"
        }`}
        onClick={() => {
          props.setSort({ value: sort == val[0] ? undefined : val[0] });
        }}
      >
        {val[1]}
      </div>
    );
  });

  return (
    <div
      style={{
        height: props.misc.visibleScreen.includes("showSortBy")
          ? "262px"
          : "0px",
        transition: "all 0.2s ease-in-out",
        background: "white",
        borderRadius: "6px",
        width: "150px",
        position: "absolute",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}
      className="overflow-hidden mt-10 relative sm:mt-10"
    >
      <div className="absolute">
        <div className="p-2 rounded border border-grey-lightest w-150">
          {showSortOptions}
        </div>
      </div>
    </div>
  );
};

export default sortOptions;
