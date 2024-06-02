import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import images from "../../assets/images";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footerContainer">
      <section className="footerTop">
        <div className="left">
          <div className="EmailIcon">
            <a>
              <MdEmail />
            </a>
          </div>
          <div className="iconIno">
            <h3>GET OUR NEWSLETTER</h3>
            <p>Sign up with your email to get fresh updates.</p>
          </div>
        </div>
        <div className="middle">
          <input type="email" placeholder="Email address" />
        </div>
        <div className="right">
          <div className="facebook">
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </div>
          <div className="twitter">
            <a href="https://x.com/?lang=en">
              <FaTwitter />
            </a>
          </div>
          <div className="youtube">
            <a href="https://www.youtube.com/">
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
      <section className="footerBottom">
        <div className="about">
          <h3>ABOUT US</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
          <div className="phonEmail">
            <p>
              Phone: <span> +33785433587</span>
            </p>
            <p>
              Email: <span> shawilayoul@gmail.com</span>
            </p>
          </div>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <p>Blogs</p>
          <p>Recipes</p>
          <p>Shops</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
        <div className="services">
          <h3>Services</h3>
          <p>Shipment</p>
          <p>Chef Talks</p>
          <p>Live support</p>
          <p>Privacy</p>
        </div>
        <div className="blog">
          <h3>From The Blog</h3>
          <div className="blog1">
            <img src={images.blog1} alt="" />

            <p>Snack Cake</p>
            <p>jan 01, 2016</p>
          </div>
          <div className="blog1">
            <img src={images.blog2} alt="" />

            <p>Snack Cake</p>
            <p>jan 01, 2016</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
