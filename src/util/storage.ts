type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  userId: number;
  userName: string;
};


export const setAuthInfo= (loginResponse: LoginResponse) => localStorage.setItem('auth', JSON.stringify(loginResponse));
export const getAuthInfo = () => JSON.parse(localStorage.getItem('authInfo') ?? '{}') as LoginResponse;
export const removeAuthInfo = () => localStorage.removeItem('auth');

