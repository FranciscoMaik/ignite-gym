import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
}

export async function storageAuthTokenLoad(): Promise<string | null> {
  const storage = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

  return storage;
}

export async function storageAuthTokenClear() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}
