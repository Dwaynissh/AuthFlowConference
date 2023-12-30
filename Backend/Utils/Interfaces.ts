import { HTTP } from "./Enums";

export interface iError {
  name: string;
  message: string;
  status: HTTP;
  success: boolean;
}

export interface iEmail {
  email: string;
  token: string;
}

export interface iUser {
  email: string;
  name: string;
  password: string;
  token: string;
  phone: number;
  AdminCode: string;
  status: string;
  verify: boolean;
  allpassword: any[];
}

export interface iEmailData extends iEmail, Document {}

export interface iUserData extends iUser, Document {}
export interface iPassword {
  password: string;
}
export interface iPasswordData extends iPassword, Document {}