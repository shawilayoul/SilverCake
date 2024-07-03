import axios from "axios";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import "./products.scss";
import { getProduct } from "../../services/products";
const Products = () => {
  const [count, setCount] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [chef, setChef] = useState("");
  const [ctategory, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);

  //handle counter
  const displayCount = () => {
    setCount(count + 1);
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  //Access the client
  const queryClient = useQueryClient();
  //queries
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  // mutation
 useMutation({
    mutationFn: getProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("chef", chef);
    formData.append("category", ctategory);
    formData.append("allCategory", allCategory);
    formData.append("cuisine", cuisine);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("count",count)
    try {
      await axios.post("http://localhost:8000/upload", formData);
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDescription("");
    setPrice("");
    setChef("");
    setCategory("");
    setAllCategory("");
    setTime("");
    setCuisine("");
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
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={ctategory}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <input
              type="text"
              name="allCategory"
              placeholder="Enter AllCategory"
              value={allCategory}
              onChange={(e) => {
                setAllCategory(e.target.value);
              }}
            />
            <input
              type="text"
              name="chef"
              placeholder="Enter chef name"
              value={chef}
              onChange={(e) => {
                setChef(e.target.value);
              }}
            />
            <input
              type="text"
              name="cuisine"
              placeholder="Enter type of the cuisine"
              value={cuisine}
              onChange={(e) => {
                setCuisine(e.target.value);
              }}
            />
            <input
              type="number"
              min={0}
              name="time"
              value={time}
              placeholder="Enter time of the perparations"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <input type="file" onChange={(e) => handleFileChange(e)} />

            <button type="submit" onClick={displayCount}>
              Add Product
            </button>
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
            <th>price</th>
            <th>category</th>
            <th>chef</th>
            <th>cuisine</th>
            <th>Time</th>
            <th>created at</th>
            <th>in stock</th>
            <th>action</th>
            <hr />
          </tr>

          { query.data?.map(
            ({
              _id: id,
              image,
              title,
              description,
              price,
              category,
              chef,
              cuisine,
              time,
              createdAt,
            }) => {
              return (
                <tr key={id}>
                  <td>{count}</td>
                  <td>
                    <img
                      src={`http://localhost:8000/${image}`}
                      alt={title}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>${price}</td>
                  <td>{category}</td>
                  <td>{chef}</td>
                  <td>{cuisine}</td>
                  <td>{time}</td>
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
