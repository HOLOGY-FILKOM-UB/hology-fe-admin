import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const RolesContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
};

export function useRole() {
  return useContext(RolesContext);
}
