import { createContext, useEffect, useState } from "react";

import { api } from "@services/api";
import {
  storageUserSave,
  storageUserLoad,
  storageUserClear,
} from "@storage/storageUser";
import {
  storageAuthTokenSave,
  storageAuthTokenLoad,
  storageAuthTokenClear,
} from "@storage/storageAuthToken";

import type { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate({
    token,
    userData,
  }: { userData: UserDTO; token: string }) {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
  }

  async function userAndTokenSaveStorage({
    token,
    userData,
  }: { userData: UserDTO; token: string }) {
    try {
      setIsLoadingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        await userAndTokenSaveStorage(data);
        await userAndTokenUpdate(data);
      }
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);

      setUser({} as UserDTO);
      await storageUserClear();
      await storageAuthTokenClear();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUser() {
    try {
      setIsLoadingUserStorageData(true);

      const userLogged = await storageUserLoad();
      const token = await storageAuthTokenLoad();

      if (token && userLogged) {
        await userAndTokenUpdate({ userData: userLogged, token });
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isLoadingUserStorageData,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
