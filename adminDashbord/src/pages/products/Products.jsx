import axios from "axios";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import {useQueryClient ,useMutation, useQuery} from "@tanstack/react-query"
import "./products.scss";
import { getProduct } from "../../services/products";
const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
//Access the client 
const queryClient = useQueryClient()
//queries 
const query = useQuery({
  queryKey:['products'], queryFn: getProduct
})

// mutation
const mutation = useMutation({
  mutationFn: getProduct,
  onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:['products']})
  }
})

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:8000/upload",
        formData
      );
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  /***delete prodcut */
  const handelDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/products/delete/${id}`);
  };
  return (
    <div className="product-container">
      <section className="add-product">
        <div className="top">
          <h2>Products</h2>
          <button onClick={() => setShowForm(!showForm)}>
            Add new product
          </button>
        </div>
        {showForm && (
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Enter Product name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="number"
              min={0}
              name="price"
              value={price}
              placeholder="Enter price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input type="file" onChange={(e) => handleFileChange(e)} />

            <button type="submit">Add Product</button>
          </form>
        )}
      </section>
      {/**porduct table */}
      <section className="product-table">
        <table>
          <tr>
            <th>iD</th>
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th>color</th>
            <th>price</th>
            <th>created at</th>
            <th>in stock</th>
            <th>action</th>
            <hr />
          </tr>

          {query.data?.map(
            ({ _id: id, image, title, description, price, createdAt }) => {
              return (
                <tr>
                  <td>5</td>
                  <td>
                    <img
                      src={`http://localhost:8000/${image}`}
                      alt={title}
                      style={{ width: "80px" ,height:"80px"}}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>color</td>
                  <td>${price}</td>
                  <td>{createdAt}</td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                  <td>
                    <MdDelete
                      className="delete"
                      onClick={() => handelDelete(id)}
                    />{" "}
                    <MdEdit className="update" />
                  </td>
                </tr>
              );
            }
          )}
        </table>
      </section>
    </div>
  );
};

export default Products;
