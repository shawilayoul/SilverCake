import { useForm } from "react-hook-form";
import axios from "axios"
const Products = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const formData = new FormData()
    formData.append("imgURL", data.imgURL[0])
    console.log(formData)
    try {
      const response = await axios.post("http://localhost:8000/api/menu/create", data);
      console.log(response)
    } catch (error) {
       console.log(error)
    }
    reset()
  };
  return (
    <div className="product-container">
      <section className="add-product">
        <h2>Products</h2>
        <button>Add new product</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="file" {...register("imgURL", { required: true })} />
          <input {...register("name", { required: true })} />
          <input {...register("description", { required: true })} />
          <input type="number" {...register("price", { required: true })} />
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};

export default Products;
