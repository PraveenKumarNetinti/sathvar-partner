import CryptoJS from "crypto-js";
import { format } from "date-fns";
import { jwtDecode as JWTDecode, JwtPayload } from "jwt-decode";
import JWTEncode from "jwt-encode";

import storage from "./storage";

const DEFAULT_AES_KEY = import.meta.env.VITE_AES_SECRET_KEY;
const DEFAULT_JWT_KEY = import.meta.env.VITE_JWT_SECRET_KEY;

export function generateRandomString(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

function buildSubSecretKey(isOrg: boolean): string {
  const userAgent = navigator.userAgent;
  const token = storage.getItem("auth-token") as string;
  const organization = storage.getItem("organization") as {
    organisation_id: string;
    organisation_name: string;
  };

  const payload: any[] = [userAgent];

  if (token) {
    const { iat, exp, id } = JWTDecode<JwtPayload & { id: any }>(token);

    payload.push(iat, id, exp);

    if (isOrg && organization) {
      payload.push(
        organization?.organisation_id?.toUpperCase(),
        organization?.organisation_name?.toLowerCase(),
      );
    }
  }

  const reversed = payload.join("").split("").reverse().join("");
  return CryptoJS.SHA256(reversed).toString(CryptoJS.enc.Hex);
}

function deriveKey(secret: string, isOrg: boolean = true) {
  const currentDate = format(new Date(), "MMyyyydd");
  const subSecretKey = buildSubSecretKey(isOrg);
  const message = [currentDate, secret, subSecretKey].join("");
  return CryptoJS.SHA256(message);
}

type EncryptOptions = {
  aesKey?: string;
  jwtKey?: string;
  isOrg?: boolean;
};

type EncryptPayload = string | Record<string, any>;

function encrypt(message: EncryptPayload, options?: EncryptOptions) {
  const input = typeof message === "string" ? message : JSON.stringify(message);
  const iv = CryptoJS.enc.Utf8.parse(generateRandomString(16));

  const AES_SECRET_KEY =
    options?.aesKey ?? deriveKey(DEFAULT_AES_KEY, options?.isOrg);
  const JWT_SECRET_KEY =
    options?.jwtKey ?? deriveKey(DEFAULT_JWT_KEY, options?.isOrg);

  const encrypted = CryptoJS.AES.encrypt(input, AES_SECRET_KEY, {
    iv,
    mode: CryptoJS.mode.CBC,
  });

  const payload = `${encrypted.toString()}.${iv.toString(CryptoJS.enc.Base64)}`;
  const jwt = JWTEncode({ payload }, JWT_SECRET_KEY as string);

  return btoa(jwt);
}

type DecryptOptions = {
  aesKey?: string;
  isOrg?: boolean;
};
function decrypt(encoded: string, options?: DecryptOptions) {
  try {
    const decodedJwt = atob(encoded);
    const { payload } = JWTDecode<{ payload: string }>(decodedJwt);

    const [cipherText, iv] = payload.split(".");
    if (!cipherText || !iv) throw new Error("Invalid payload format");

    const AES_SECRET_KEY =
      options?.aesKey ?? deriveKey(DEFAULT_AES_KEY, options?.isOrg);

    const decrypted = CryptoJS.AES.decrypt(cipherText, AES_SECRET_KEY, {
      iv: CryptoJS.enc.Base64.parse(iv),
      mode: CryptoJS.mode.CBC,
    });

    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedText);
  } catch (error) {
    console.error("[Decryption error]:", error);
  }
}

export const crypto = { encrypt, decrypt };
