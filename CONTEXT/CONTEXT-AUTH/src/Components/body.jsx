import React from "react";
import { authContext } from "../Context/AuthContext";

const Body = () => {
  const { token } = React.useContext(authContext);
  return <h1>{token}</h1>;
};

export { Body };