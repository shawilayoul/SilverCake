import axios from "axios";
import { useEffect, useState } from "react";
import "./products.scss";
const Products = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
 
  
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const getMenu = async () => {
      const res = await axios.get(" http://localhost:8000/images");
      setData(res.data);
    };
    getMenu();
  }, []);

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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="product-container">
      <section className="add-product">
        <h2>Products</h2>
        <button>Add new product</button>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input type="file" onChange={(e) => handleFileChange(e)} />

          <button type="submit">submit</button>
        </form>
      </section>
      <section>
        {data.map(({ image, title, description, price }) => {
          return (
            <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
              <img
              src={`http://localhost:8000/${image}`}
                alt={title}
                style={{ width: "300px" }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
