import { IResponsePaginationProps } from "./ITableModel";

export interface IProduct {
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  rating: number;
  shippingInformation: string;
  discountPercentage: number;
  brand: string;
  availabilityStatus: string;
  warrantyInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
}

export interface IProductsResponse extends IResponsePaginationProps {
  products: IProduct[];
}
