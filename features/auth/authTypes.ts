export interface RegisterProps {
  username: string;
  email: string;
  password: string;
}
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}
