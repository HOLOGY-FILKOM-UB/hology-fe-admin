import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router";
// import {invalidateSession} from "./SessionHelper";

// eslint-disable-next-line react/prop-types
const CheckSession = () =>{
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924sss");
  const history = useHistory()
    if (parsedJsonData) {
      history.push("/")
    }else{
      history.push("/login")
    }
}

export default CheckSession