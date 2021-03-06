import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../Utility/API";
import Footer from "../components/Footer";
import Axios from "axios";
import Background from "../../dist/36fe5e77c79ffbf8a1fcefee58fc87df.jpg";

const Login = ({ setLoggedIn, setUserSince, setName, setId, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = e => setUsername(e.target.value);
  const handlePwChange = e => setPassword(e.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (username && password) {
      API.login(
        {
          username,
          password
        },
        setLoggedIn,
        setUserSince,
        setName,
        setId,
        history.push
      );
    } else {
      alert("Please input required fields");
    }
  };

  useEffect(() => {
    var elem = document.querySelector(".parallax");
    var instance = M.Parallax.init(elem);
    Axios.post("/api/articles").then(feedback => console.log(feedback));
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div className="row center section teal white-text">
          <h1 className="">ZigZag</h1>
        </div>
        <div className="container section">
          <div className="row s6 valign-wrapper offset-s3">
            <form
              onSubmit={handleSubmit}
              className="col center s6 offset-s3 card-panel "
            >
              <h3>Sign In</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    value={username}
                    onChange={handleUserChange}
                    id="userName"
                    type="text"
                    className="validate"
                  />
                  <label for="userName">Username</label>
                </div>
                <div className="input-field col s12">
                  <input
                    value={password}
                    onChange={handlePwChange}
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label for="password">Password</label>
                </div>
                <a>
                  <Link to="./SignUp">Or Create A New Acount</Link>
                </a>
                <a>
                  <Link to="/profile">Profile</Link>
                </a>
              </div>
              <input
                href="/create/user"
                className="input-field waves-effect waves-light btn"
                type="submit"
                value="Enter"
              />
            </form>
          </div>
        </div>
        <div className="parallax">
          <img src={Background} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;