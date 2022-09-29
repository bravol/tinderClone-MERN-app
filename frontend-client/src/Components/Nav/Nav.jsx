import React from "react";
// import Person2Icon from "@mui/icons-material/Person2";
import whiteLogo from "../../images/tinder_logo_white.png";
import colorLogo from "../../images/color-logo-tinder.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          onClick={handleClick}
          className="nav-button"
          disabled={showModal}
        >
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Nav;
