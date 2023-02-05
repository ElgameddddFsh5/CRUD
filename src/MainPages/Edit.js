import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "../Components/css/Edit.css";
import URLproduct from "./MainUrl";
function Edit() {
  let [titleEdit, setprodtitle] = useState(""),
    [descriptionEdit, setproddes] = useState(""),
    [priceEdit, setprodPrice] = useState(0),
    { productID } = useParams(),
    navigate = useNavigate();
  //   // useNavigate ديه بقدر اديها اليو ار ال اللي انا عايزه يروحلها

  let FormSubmit = (e) => {
    e.preventDefault();
    fetch(`${URLproduct}/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleEdit,
        description: descriptionEdit,
        price: priceEdit,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        navigate("/products");
      });
  };

  return (
    <>
      <div>
        <form className="Edit">
          <label htmlFor="productname">Product Name</label>
          <input
            id="productname"
            type="text"
            onChange={(e) => {
              setprodtitle(e.target.value);
            }}
          ></input>
          <label htmlFor="productdes">Product Description</label>
          <input
            id="productdes"
            type="text"
            onChange={(e) => {
              setproddes(e.target.value);
            }}
          ></input>
          <label htmlFor="productprice">Product Price</label>
          <input
            id="productprice"
            type="text"
            onChange={(e) => {
              setprodPrice(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="Add-product-submit"
            type="submit"
            placeholder="Edit"
            onClick={(e) => {
              e.preventDefault();
              if (
                titleEdit.length &&
                descriptionEdit.length &&
                priceEdit.length !== 0
              ) {
                FormSubmit(e);
              }
            }}
          ></input>
        </form>
      </div>
      <Outlet />
    </>
  );
}
export default Edit;
