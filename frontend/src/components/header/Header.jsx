import { GrCart } from "react-icons/gr";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { CakeContext } from "../../contexts/CakeContexts";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./header.scss";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const { items, deleteFromCart, getTotalCost ,addOneToCart,removerOneFromCart} = useContext(CakeContext);

  //get the total qaunitity
  const totalQauntitiy = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handelsign = async (data) => {
    try {
      if (!showSign) {
        await axios.post("http://localhost:8000/api/auth/login", data);
        navigate(`/productsLayOut`);
      } else {
        await axios.post("http://localhost:8000/api/auth/register", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const menu = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "Blog",
      link: "blog",
    },
    {
      id: 3,
      name: "Recipes",
      link: "recipes",
    },
    {
      id: 4,
      name: "shop",
      link: "cart/shop",
    },
    {
      id: 5,
      name: "about",
      link: "About",
    },
    {
      id: 6,
      name: "contact",
      link: "Contact",
    },
  ];
  return (
    <nav className="headerContainer">
      <div className="appbar">
        {showBar ? (
          <IoClose onClick={() => setShowBar(!showBar)} />
        ) : (
          <IoMenu onClick={() => setShowBar(!showBar)} />
        )}

        <div className="mobilBar">
          {showBar && (
            <div className="menuLeft">
              <ul>
                {menu.map(({ id, name, link }) => (
                  <li key={id} onClick={() => setShowBar(!showBar)}>
                    <Link to={link} className="text-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="logo">
        <h2 onClick={() => navigate("/")}>
          Cake<span>Art</span>
        </h2>
      </div>
      <div className="menu">
        <div className="menuLeft">
          <ul>
            {menu.map(({ id, name, link }) => (
              <li onClick={() => setShowBar(!showBar)} key={id}>
                <Link to={link} className="text-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menuRight">
          <div className="searchBar">
            <FaSearch onClick={() => setSearchBar(!searchBar)} />
            {searchBar && (
              <div className="searchModel">
                <input type="text" placeholder="search for a recipe" />
              </div>
            )}
          </div>
          <div className="cart" onClick={() => setShowCart(!showCart)}>
            <GrCart />
            <span>{totalQauntitiy}</span>
          </div>
          <div className="cart" onClick={() => setShowModel(!showModel)}>
            <FaUser />
          </div>
        </div>
      </div>
      {showModel && (
        <div className="signUp">
          <div>{showSign ? <h2>SignUp</h2> : <h2>SignIn</h2>}</div>

          <form onSubmit={handleSubmit(handelsign)}>
            <div>
              {showSign && (
                <input
                  type="text"
                  placeholder="Enter Your full  name please"
                  {...register("userName", { required: true })}
                />
              )}
              {errors.userName?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  userName is required
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Your email please"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  E-mail is required
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Your password please"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  password is required
                </p>
              )}
            </div>
            <p onClick={() => setShowSign(!showSign)}>
              {showSign ? (
                <p> Already have an account signIn</p>
              ) : (
                <p>Do not have an account ,create one</p>
              )}
            </p>
            <div>
              {showSign ? <button>SignUp</button> : <button>SignIn</button>}
            </div>
          </form>
        </div>
      )}
      {showCart && (
        <div className="cartModel">
          {totalQauntitiy > 0 ? (
            <div className="cartItem">
              {items.map(({ id, quantity, image, title, price }) => {
                return (
                  <div key={id} className="item">
                    <img
                      src={`http://localhost:8000/${image}`}
                      alt=""
                      style={{ width: "100px", height: "40px" }}
                    />
                    <p>{title}</p>
                    <p>${price}</p>
                    <div className="qauntity">
                      <button onClick={(e)=>addOneToCart(e,id)}> +</button>
                      <p>{quantity}</p>
                      <button onClick={()=>removerOneFromCart(id)}>-</button>
                    </div>
                    <button onClick={() => deleteFromCart(id)}>
                      remove from Cart
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>There is no items in the cart</p>
          )}

          <p>Total:$ {getTotalCost()}</p>
          <button>Purches Now</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
