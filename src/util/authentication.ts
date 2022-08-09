import jwtDecode from "jwt-decode";
import { createContext } from "react";

type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  userId: number;
  userName: string;
};

type UserRoles = "ROLE_MEMBER" | "ROLE_VISITOR";

type tokenInformation = {
  authorities: UserRoles[];
  exp: number;
  user_name: string;
};

export type AuthContextData = {
  authenticated: boolean;
  tokenInfo?: tokenInformation;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

export const setAuthInfo = (loginResponse: LoginResponse) =>
  localStorage.setItem("auth", JSON.stringify(loginResponse));
export const getAuthInfo = () =>
  JSON.parse(localStorage.getItem("auth") ?? "{}") as LoginResponse;
export const removeAuthInfo = () => localStorage.removeItem("auth");

export function getTokenInformation(): tokenInformation | undefined {
  try {
    return jwtDecode(getAuthInfo().access_token) as tokenInformation;
  } catch {
    return undefined;
  }
}

function tokenExpired(tokenExpiration: number): boolean {
  return tokenExpiration * 1000 > Date.now() ? false : true;
}

export function checkUserAuth(): boolean {
  const userTokenInformation = getTokenInformation();
  return userTokenInformation && !tokenExpired(userTokenInformation.exp)
    ? true
    : false;
}

export const AuthContext = createContext<AuthContextType>({
  authContextData: {
    authenticated: false,
  },
  setAuthContextData: () => null,
});

export const activeWithRole = (role : UserRoles) : boolean  =>{
  return checkUserAuth() &&
  getTokenInformation()?.authorities.includes(role) ? true : false;
}