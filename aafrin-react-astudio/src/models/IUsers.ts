import { IResponsePaginationProps } from "./ITableModel";

export interface IUser {
  firstName: string;
  lastName: string;
  id: number;
  maidenName: string;
  email: string;
  eyeColor: string;
  username: string;
  gender: string;
  bloodGroup: string;
  phone: string;
  age: string;
  birthDate: string;
  height: string;
}

export interface IUsersResponse extends IResponsePaginationProps {
  users: IUser[];
}
