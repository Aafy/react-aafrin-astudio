import axios from "axios";
import { useEffect } from "react";

function Products() {
  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((productsResponse) => {
        console.log(productsResponse);
      })
      .catch(console.log);
  });
  return <>I am rendering Products!!</>;
}

export default Products;
