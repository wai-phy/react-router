import React from "react";

const User = ({ userId }) => {
  let userName;

  switch (userId) {
    case 1:
      userName = "Aye Aye";
      break;
    case 2:
      userName = "Kyaw Kyaw";
      break;
    case 3:
      userName = "Aung Aung";
      break;
    case 4:
      userName = "Mg Mg";
      break;
    case 5:
      userName = "Zaw Zaw";
      break;
    default:
      userName = "Wai Gyi";
  }
  return <p className="post">Posted By <span className="userName">{userName}</span></p>;
};

export default User;
