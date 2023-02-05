import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Products from "./MainPages/Products";
import "./index.css";
import AddProduct from "./MainPages/AddProduct";
import ProductDetails from "./MainPages/ProductDetails";
import Edit from "./MainPages/Edit";
import NotFound from "./MainPages/NotFound";
import About from "./MainPages/About";
// import LayOut from "./MainPages/LayOut";
// <Route path="/" element={<Products />}>
//   {/* <Route index element={<Products />} /> */}
//   <Route path="add" element={<AddProduct />} />
//   <Route path=":productID/edit" element={<Edit />} />
//   <Route path=":productID" element={<ProductDetails />} />
//   <Route path="*" element={<NotFound />} />
// </Route>;
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-12 product">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/aboutcrud" element={<About />} />
            <Route index element={<Products />} />

            <Route path="/products">
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID/edit" element={<Edit />} />
              <Route path=":productID" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
/*
Search params
*/
export default App;
