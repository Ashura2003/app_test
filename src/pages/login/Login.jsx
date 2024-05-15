import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";

// Creating Login UI
const Login = () => {
  // Making useState for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Making Error State
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please Enter Password");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Make a json object

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data).then((res) => {
      if (res.data.sucess === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        // success-bool, message-text, token-text, user data
        // Setting token and user data in local storage
        localStorage.setItem("token", res.data.token);

        // Setting user data
        const convertedData = JSON.stringify(res.data.userData);

        // Local Storage set
        localStorage.setItem("user", convertedData);
      }
    });

    // Make an API request
  };

  return (
    <div className="container">
      <h1>Login to Hamro Market</h1>
      <form className="w-50">
        <label>Email Address: {email}</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter your email"
        ></input>

        {emailError && <p className="text-danger">{emailError}</p>}

        <label className="mt-2">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter your password"
        ></input>

        {passwordError && <p className="text-danger">{passwordError}</p>}

        <button onClick={handleLogin} className="btn btn-danger w-100 mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
