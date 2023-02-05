import { useState } from "react";
import "../Components/css/AddProduct.css";
import { Outlet, useNavigate } from "react-router-dom";
import URLproduct from "./MainUrl";

function AddProduct() {
  let [title, setprodtitle] = useState(""),
    [description, setproddes] = useState(""),
    [price, setprodPrice] = useState(0),
    navigate = useNavigate();
  // useNavigate ديه بقدر اديها اليو ار ال اللي انا عايزه يروحلها

  let FormSubmit = (e) => {
    e.preventDefault();
    fetch(URLproduct, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // الهيدرز ده عبارة عن اوبشن للركويست اتعامل علي الريكوست بتاعي علي اساس انه جيسون
      //
      body: JSON.stringify({
        title,
        description,
        price,
        // لو الكيه شبه الفاليو تقدر تخليها كدة بدل ما تكتب title:title;
        /*
المشكلة الي ظهرتلك هي بسبب انك مش مباصي ال type لل information الي بدك تبعتها لل server،
 ف هو تلقائي في ال REST Api بشكل عام ال id بيت generate حتى تaccess ال objects الي في الserver عن طريق انك تحط ال id في ال url.

ف لازم تعطي headers ، لأنه بدون ال headers مش حتقدر تشير ال data بين ال server وال client
headers: {
‘Content-Type’: ‘application/json’
}
يعطيك العافية 🌹 */
      }),
    })
      .then((res) => res.json)
      .then((data) => navigate("/products"));
  };
  return (
    <>
      <div>
        <form className="add">
          <label htmlFor="productname">Product Name</label>
          <input
            id="productname"
            type="text"
            onChange={(e) => {
              setprodtitle(e.target.value);
            }}
          ></input>
          <label htmlFor="productdes">Product Category</label>
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
            placeholder="Submit"
            onClick={(e) => {
              e.preventDefault();
              if (title.length && description.length && price.length !== 0) {
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
export default AddProduct;
