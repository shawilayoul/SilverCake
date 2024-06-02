import "./blog.scss";
import images from "../../assets/images";
import { blogData } from "../../constants/data";
const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Blog</h2>
        </div>
      </div>
      {blogData.map(({ id, image, title, subTitle, description }) => {
        return (
          <div className="blogBottom">
            <div className="blogImg" key={id}>
              <img src={image} alt="blog" />
            </div>
            <div className="blogInfo">
              <h3>{title}</h3>
              <h4>{subTitle}</h4>
              <p>
                {description}
              </p>
            </div>
          </div>
        )
      })}


    </div>
  );
};

export default Blog;
