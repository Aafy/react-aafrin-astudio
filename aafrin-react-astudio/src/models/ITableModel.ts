import { ILabelKeyPair } from "./ILabelKeyPair";
import { IUser } from "./IUsers";

export interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (page: number) => void;
  forcePageNumber: number;
}

export interface TableProps {
  headers: ILabelKeyPair[];
  rowData: IUser[];
  keyMapper: string[];
  onSearchChange: (searchValue: string) => void;
  onPageSizeChange: (pageSize: number) => void;
}
