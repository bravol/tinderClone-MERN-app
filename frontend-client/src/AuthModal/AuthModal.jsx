import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const [cookies, setCookie, removeCookie] = useCookies("user");

  let navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };
  //   const isSignUp = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords do not match.");
      } else {
        const response = await axios.post(
          `http://localhost:8001/${isSignUp ? "signup" : "login"}`,
          {
            email,
            password,
          }
        );
        console.log("stored", email, password);

        setCookie("UserId", response.data.userId);
        setCookie("AuthToken", response.data.token);

        const success = response.status === 201;

        if (success && isSignUp) navigate("/onboard");
        if (success && !isSignUp) navigate("/dashboard");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2> {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"} </h2>
      <p>
        By clicking Sign In, you agree to our terms and conditions. Learn how we
        process your data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p> {error} </p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
