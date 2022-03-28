import jwt_decode from "jwt-decode";

const getPayloadData = (token) => {
  if (token) {
    localStorage.setItem("user_id", jwt_decode(token)["subject"]);
    localStorage.setItem("username", jwt_decode(token)["username"]);
  }
};

export default getPayloadData;
