import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return (
    <div className="bg-pink-300 text-black text-3xl p-4 ">User : {userId}</div>
  );
}

export default User;
