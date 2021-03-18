import { createContext } from "react";

export const DEFAULT_CONTEXT = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const UserContext = createContext(DEFAULT_CONTEXT);

export default UserContext;
