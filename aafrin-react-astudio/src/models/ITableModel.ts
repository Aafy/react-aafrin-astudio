import { ILabelKeyPair } from "./ILabelKeyPair";
import { IProduct } from "./IProducts";
import { IUser } from "./IUsers";

export interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (page: number) => void;
  forcePageNumber: number;
}

export interface TableProps {
  headers: ILabelKeyPair[];
  rowData: IUser[] | IProduct[];
  keyMapper: string[];
  isPageNumbersClicked: number;
  onSearchChange: (searchValue: string) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export interface IResponsePaginationProps {
  limit: number;
  skip: number;
  total: number;
}
