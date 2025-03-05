import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";
import { IProduct, IProductsResponse } from "../models/IProducts";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts } from "../state/ProductSlice";

function Products() {
  const getProductsDataStore = useSelector(
    (state: any) => state.productStore?.products
  );
  const dispatch = useDispatch();

  const [productCount, setProductCount] = useState<number>(0);
  const [filteredProductData, setFilteredProductData] = useState<IProduct[]>(
    []
  );

  const [selectedPageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [skipCount, setSkipCount] = useState<number>(0);

  const headers = [
    { key: "title", label: "TITLE" },
    { key: "thumbnail", label: "THUMBNAIL" },
    { key: "category", label: "CATEGORY" },
    { key: "price", label: "PRICE" },
    { key: "rating", label: "RATING" },
    { key: "shippingInformation", label: "SHIPPING" },
    { key: "discountPercentage", label: "DISCOUNT(%)" },
    { key: "brand", label: "BRAND" },
    { key: "availabilityStatus", label: "AVAILABILITY" },
    { key: "warrantyInformation", label: "WARRANTY" },
    { key: "returnPolicy", label: "RETURN POLICY" },
    { key: "minimumOrderQuantity", label: "MIN_QUANTITY" },
  ];

  const keys = [
    "title",
    "thumbnail",
    "category",
    "price",
    "rating",
    "shippingInformation",
    "discountPercentage",
    "brand",
    "availabilityStatus",
    "warrantyInformation",
    "returnPolicy",
    "minimumOrderQuantity",
  ];

  const [searchProdKey, setSearchProdKey] = useState("");

  const handleProductSearch = (searchTerm: string) => {
    setSearchProdKey(searchTerm);
  };
  const handleProductPageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
    setCurrentPage(1);
    setSkipCount(0);
  };

  const handlePaginationClick = (selectedPageNumber: number) => {
    setCurrentPage(selectedPageNumber);
    const skipCalcValue = selectedPageSize * (selectedPageNumber - 1);
    setSkipCount(skipCalcValue);
  };

  useEffect(() => {
    const searchStr = searchProdKey.toString().toLowerCase();

    const filteredResults = getProductsDataStore.filter(
      (product: IProduct) =>
        product.price.toString().includes(searchStr) ||
        product.rating.toString().includes(searchStr) ||
        product.minimumOrderQuantity.toString().includes(searchStr) ||
        product.discountPercentage.toString().includes(searchStr) ||
        product.shippingInformation.toString().includes(searchStr) ||
        product.brand?.toLowerCase().includes(searchStr) ||
        product.availabilityStatus.toLowerCase().includes(searchStr) ||
        product.warrantyInformation.toLowerCase().includes(searchStr) ||
        product.returnPolicy.toLowerCase().includes(searchStr) ||
        product.title.toLowerCase().includes(searchStr) ||
        product.category.toLowerCase().includes(searchStr)
    );
    setFilteredProductData(filteredResults);
  }, [searchProdKey]);

  useEffect(() => {
    axios(
      `https://dummyjson.com/products?limit=${selectedPageSize}&skip=${skipCount}`
    )
      .then((productsResponse) => {
        const productsResponseData = productsResponse.data as IProductsResponse;
        setProductCount(productsResponseData.total);
        dispatch(loadAllProducts(productsResponseData.products));
        setFilteredProductData(productsResponseData.products);
      })
      .catch(console.log);
  }, [selectedPageSize, currentPage]);
  return (
    <div>
      <Table
        headers={headers}
        rowData={filteredProductData}
        keyMapper={keys}
        isPageNumbersClicked={currentPage}
        onSearchChange={handleProductSearch}
        onPageSizeChange={handleProductPageSizeChange}
      />

      <Pagination
        usersPerPage={selectedPageSize}
        totalUsers={productCount}
        paginate={handlePaginationClick}
        forcePageNumber={currentPage - 1}
      />
    </div>
  );
}

export default Products;
