const LoaderCheckout = props => {
  //   var times = [];
  //   var fps;
  //   var fpsArr = [];
  //   if (props.isClient && props.misc.lowGPUMode == null) {
  //     calcFps(times, fps, fpsArr, props);
  //   }
  return (
    <div className="loader h-100 mx-auto text-center">
      <div className="lds-mini-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      {/* <img
        alt="cks-logo"
        src={props.misc.CFURL + "/logos/cks-logo-header.png"}
        className="cks-logo-loader z-999 p-0 w-100 scale-item cursor-pointer"
      /> */}
    </div>
  );
};

export default LoaderCheckout;
