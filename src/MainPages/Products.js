import { Link } from "react-router-dom";
import "../Components/css/table-prod.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import URLproduct from "./MainUrl";

function Products() {
  let GetProduct = (signal) => {
    fetch(URLproduct, { signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // if (!ProductCleanUp) {
        //   console.log(data);
        //   setProudcts(data);
        // }
        setProudcts(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Cancelled");
        } else {
          //todo:handel error
        }
      });
  };
  const [products, setProudcts] = useState([]);

  let DeleteProduct = (product) => {
    Swal.fire({
      title: `You are Going To Delete Product ${product.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${URLproduct}/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            GetProduct();
          });
      }
    });
  };

  useEffect(() => {
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
  console.log(products);
  return (
    <>
      <div className="Product-Page">
        <Link className="navbar-brand" style={{ fontSize: "22px" }} to="/aboutcrud">
          What Is Crud
        </Link>
        <div className="addprod">
          <h1>CRUD</h1>
          <Link className=" btn btn-warning addprod-btn" to="/products/add">
            Add Product
          </Link>
        </div>

        <div className="table-prod">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.title}</td>
                    <td>{product.description.slice(0, 70)}</td>
                    <td>${product.price}</td>
                    <td className="Allbtns">
                      <button
                        className="ProductsBtns btn btn-danger btn-sm"
                        onClick={() => {
                          DeleteProduct(product);
                        }}
                      >
                        Delete
                      </button>

                      <Link
                        to={`/products/${product.id}`}
                        className="ProductsBtns btn btn-info btn-sm"
                      >
                        View
                      </Link>
                      <Link
                        className="ProductsBtns btn btn-warning btn-sm"
                        to={`/products/${product.id}/edit`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
