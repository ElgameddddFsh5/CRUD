import { Outlet, useParams } from "react-router-dom";
import "../Components/css/ProductDetails.css";
import { useEffect, useState } from "react";
import URLproduct from "./MainUrl";
function ProductDetails() {
  let { productID } = useParams(),
    [ProductDetails, setProductDetails] = useState([]);
  let GetProduct = (signal) => {
    fetch(`${URLproduct}/${productID}`, { signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductDetails(data);
        // if (!ProductCleanUp) {
        //           setProductDetails(data);

        // }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Cancelled");
        } else {
          //todo:handel error
        }
      });
  };
  useEffect(() => {
    // let ProductCleanUp = false;
    // GetProduct(ProductCleanUp);
    // return () => {
    //   ProductCleanUp = true;
    // };
    const controller = new AbortController();
    const signal = controller.signal;
    // let ProductCleanUp = false;
    GetProduct(signal);
    // GetProduct(ProductCleanUp);

    return () => {
      controller.abort();
      console.log("Cancelled");

      // ProductCleanUp = true;
    };
  }, []);
  return (
    <>
      {ProductDetails && (
        <div className="ProductDetails">
          {/* <h1>id: {ProductDetails.id}</h1> */}
          <h2>Title: {ProductDetails.title}</h2>
          <h3>Category: {ProductDetails.description}</h3>
          <h3>price: ${ProductDetails.price}</h3>
        </div>
      )}
      <Outlet />
    </>
  );
}
export default ProductDetails;
