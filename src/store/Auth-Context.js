import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [commentMsg, setCommentMsg] = useState("");
  return (
    <UserContext.Provider
      value={{
        commentMsg,
        setCommentMsg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
