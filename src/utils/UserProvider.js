import React, { useEffect, useState } from "react";

import UserContext, { DEFAULT_CONTEXT } from "./UserContext";
import { getAuthState } from "./authenticate";

function UserProvider(props) {
  const [userAuthentication, setUserAuthentication] = useState(DEFAULT_CONTEXT);

  useEffect(() => {
    const onAuthStateChanged = getAuthState(setUserAuthentication);
    return () => {
      onAuthStateChanged();
    };
  }, []);

  return (
    <UserContext.Provider value={userAuthentication}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
