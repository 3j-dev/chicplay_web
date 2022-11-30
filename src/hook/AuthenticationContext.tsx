import React, { PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { refreshToken } from '@/api/user';
import { pushNotification } from '@/util/notification';
import { deleteToken, setAccessToken, setName, setPicture } from '@/util/TokenStorage';

interface LoginRequest {
  token: string;
  name?: string;
  picture?: string;
}

interface AuthenticationContextProps {
  isAuthenticating: boolean;
  setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: (payload: LoginRequest, navigate: NavigateFunction) => boolean;
  logout: (navigate: NavigateFunction) => void;
}

export const AuthenticationContext = React.createContext<AuthenticationContextProps>({
  isAuthenticating: false,
  isAuthenticated: false,
  setIsAuthenticating: () => {},
  setIsAuthenticated: () => {},
  login: () => false,
  logout: async () => {},
});

export const AuthenticationContextProvider: React.FC<PropsWithChildren> = React.memo(
  ({ children }: PropsWithChildren) => {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const initialize = useCallback(async () => {
      const { status, data } = await refreshToken();
      if (status === 200) {
        setIsAuthenticated(true);
        setAccessToken(data.accessToken);
      }
      setIsAuthenticating(false);
    }, [setIsAuthenticating, setIsAuthenticated]);

    const login = useCallback((payload: LoginRequest, navigate: NavigateFunction) => {
      if (payload.token) {
        setIsAuthenticated(true);
        setAccessToken(payload.token);
        payload.name && setName(payload.name);
        payload.picture && setPicture(payload.picture);
        navigate('/');
        return true;
      }

      return false;
    }, []);

    const logout = useCallback((navigate: NavigateFunction) => {
      deleteToken();
      setIsAuthenticated(false);
      pushNotification('로그아웃되었습니다', 'success');
      navigate('/');
    }, []);

    useEffect(() => {
      initialize();
    }, []);

    return (
      <AuthenticationContext.Provider
        value={{
          isAuthenticated,
          isAuthenticating,
          setIsAuthenticated,
          setIsAuthenticating,
          login,
          logout,
        }}
      >
        {children}
      </AuthenticationContext.Provider>
    );
  },
);

AuthenticationContextProvider.displayName = 'AuthenticationContextProvider';

export const useAuthenticationContext = () => useContext(AuthenticationContext);
