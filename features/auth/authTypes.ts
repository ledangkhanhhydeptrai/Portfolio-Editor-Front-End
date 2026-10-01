export interface RegisterProps {
  username: string;
  email: string;
  password: string;
}
export interface LoginProps {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  username: string;
  email: string;
}
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}
