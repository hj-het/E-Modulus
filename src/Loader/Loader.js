import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "0 auto",
    borderColor: "red",
    // height: "100vh", 
  };
  

function Loader({ loading = true, color = "black" }) {
  return (
    <div className="sweet-loading" aria-live="polite">
      <TailSpin
        color={color}
        loading={loading}
        cssOverride={override}
        height={150}
        width={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",}}
      />
    </div>
  );
}

export default Loader;
