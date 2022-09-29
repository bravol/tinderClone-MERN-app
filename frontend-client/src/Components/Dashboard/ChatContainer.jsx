import React, { useState } from "react";
import ChatHeader from "./ChatComponents/ChatHeader";
import ChatDisplay from "./ChatComponents/ChatDisplay";
import MatchDisplay from "./ChatComponents/MatchDisplay";
import "./Dashboard.css";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState();
  return (
    <div className="chat-container">
      <ChatHeader user={user} />
      <div>
        <button className="options" onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className="options" disabled={!clickedUser}>
          Chat
        </button>
      </div>
      {!clickedUser && (
        <MatchDisplay matches={user.matches} setClickedUser={setClickedUser} />
      )}
      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
