import "./shop.scss";
import images from "../../assets/images";
import { FaRegStar } from "react-icons/fa";
import { shopData } from "../../constants/data";
import { topsale } from "../../constants/data";
import Button from "../../components/Button";
import { useContext } from "react";
import CakeContext from "../../contexts/CakeContexts";

const Shop = () => {
  const { updateCart } = useContext(CakeContext);
  return (
    <div className="shopContainer">
      <div className="shopImag">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Shop</h2>
        </div>
      </div>
      <div className="shopElements">
        <div className="sideBar">
          <div className="searchBar">
            <input type="text" placeholder="Search Product" />
          </div>
          <h2>Product Categories</h2>
          <div className="btnProduct">
            <Button title="Apple" btnValue={2} />
          </div>
          <div className="btnProduct">
            <Button title="Celebration" btnValue={14} />
          </div>
          <div className="btnProduct">
            <Button title="Chocolate" btnValue={15} />
          </div>
          <div className="btnProduct">
            <Button title="Cupcake" btnValue={17} />
          </div>
          <div className="btnProduct">
            <Button title="Desserts" btnValue={11} />
          </div>
          <div className="btnProduct">
            <Button title="Uncategorized" btnValue={2} />
          </div>
          <div className="filterPrice">
            <h3>Filter By Price</h3>
            <input type="range" className="intput-range" />
            <div className="price">
              <p>Price: $0-$20</p>
              <p>filter</p>
            </div>
          </div>
          <div className="topSale">
            <h3>Top Sale Products</h3>

            {topsale.map(({ id, image, title, price }) => {
              return (
                <div className="topSaleProduct" key={id}>
                  <img src={image} alt="" />
                  <div className="productInfo">
                    <p>{title}</p>
                    <p>
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </p>
                    <p>${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="shopMenuContainer">
          <div className="sortBar">
            <div className="left">
              <p>Showing 12 of 23 results</p>
            </div>
            <div className="right">
              <p>SortBy:</p>
              <select name="" id="">
                <option value="">Default</option>
                <option value="">Popularity</option>
                <option value="">Rating</option>
                <option value="">Newness</option>
                <option value="">Low to high</option>
                <option value="">High to low</option>
              </select>
            </div>
          </div>
          <div className="shopMenus">
            {shopData.map(({ id, title, image, price }) => {
              return (
                <div className="slideItems" key={id}>
                  <div className="slideImg">
                    <img src={image} alt="slideimag" />
                  </div>
                  <div className="slideInfo">
                    <h3>{title}</h3>
                    <p>$ {price}</p>
                    <button onClick={(e) => updateCart(e)}>Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
