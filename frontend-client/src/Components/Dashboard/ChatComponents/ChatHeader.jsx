import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout";
import "../Dashboard.css";

const ChatHeader = ({ user }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={`${user.first_name}'s Profile Pic`} />
        </div>
        <h3> {user.first_name} </h3>
        <i className="log-out-icon" onClick={logout}>
          ⇦
        </i>
      </div>
    </div>
  );
};

export default ChatHeader;
