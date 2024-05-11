import React, { useState } from "react";

// Creating Register UI
const Register = () => {
  // Logic Section

  // Make a useState for 5 Fields

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Use State for error message

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Making function to change the value for each
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Validation for the textFields
  var validate = () => {
    var isValid = true;

    //validating firstname
    if (firstName.trim() === "") {
      setFirstNameError("Firstname is Required");
      isValid = false;
    }

    //validating lastname
    if (lastName.trim() === "") {
      setLastNameError("Lastname is Required");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is Required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is Required");
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Please conform password");
      isValid = false;
    }

    if (confirmPassword.trim() !== password.trim) {
      setConfirmPasswordError(
        "Password and Confirm Password do not match each other"
      );
    }

    return isValid;
  };

  //Function for Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    var isValidated = validate();

    if (!isValidated) {
      return;
    }

    console.log(firstName, lastName, email, password, confirmPassword);
  };

  //Making the design of the Page
  return (
    <div className="container mt-2">
      <h1> Create an Account!</h1>

      <form className="w-50">
        <label>Firstname : {firstName}</label>
        <input
          onChange={handleFirstName}
          type="text"
          className="form-control"
          placeholder="Enter your firstname"
        />

        {firstNameError && <p className="text-danger">{firstNameError}</p>}

        <label className="mt-2">Lastname : {lastName}</label>
        <input
          onChange={handleLastName}
          type="text"
          className="form-control"
          placeholder="Enter your lastname"
        />

        {lastNameError && <p className="text-danger">{lastNameError}</p>}

        <label className="mt-2">E-mail : {email}</label>
        <input
          onChange={handleEmail}
          type="text"
          className="form-control"
          placeholder="Enter your E-mail"
        />

        {emailError && <p className="text-danger">{emailError}</p>}

        <label className="mt-2">Password :</label>
        <input
          onChange={handlePassword}
          type="text"
          className="form-control"
          placeholder="Enter your password"
        />

        {passwordError && <p className="text-danger">{passwordError}</p>}

        <label className="mt-2">Confirm Password :</label>
        <input
          onChange={handleConfirmPassword}
          type="text"
          className="form-control"
          placeholder="Confirm your password"
        />

        {confirmPasswordError && (
          <p className="text-danger">{confirmPasswordError}</p>
        )}

        <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Register;

// Step 1: Make a complete UI of Register Page (Fields, Button, etc)
// Step 2: Input (Type) - Make a state
// Step 3: onChanged - Change state
