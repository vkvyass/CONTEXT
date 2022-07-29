
import React from "react";
import { authContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuth, handleLogout, handleLogin } = React.useContext(authContext);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <>
      <div>
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <input
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
            />
            <br />
            <input
              placeholder="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                handleLogin(email, pass);
                setEmail("");
                setPass("");
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { Navbar };