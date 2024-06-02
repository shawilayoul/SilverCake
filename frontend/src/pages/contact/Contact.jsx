import images from "../../assets/images";
import { FaMapMarkerAlt, FaRegClock ,FaShoppingBasket} from "react-icons/fa";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="formContainer">
        <div className="left">
          <h3>Get in touch</h3>
          <div className="contactInfo">
            <div className="icon"><FaShoppingBasket /></div>
            <p>
              {" "}
              We are also active in social media. <br /> You can find us on
              below adresses..
            </p>
          </div>
          <div className="contactInfo">
            <div className="icon">
              <FaMapMarkerAlt />{" "}
            </div>
            <p>
              329 Queensberry Street, <br /> North Melbourne VIC 3051,
              Australia.
            </p>
          </div>
          <div className="contactInfo">
            <div className="icon">
              <FaRegClock />
            </div>
            <p>Opening Hour 8:00 AM – 10:00 PM</p> <p>Monday – Sunday</p>
          </div>
          <div className="contactInfo">
            <p>
              Call: <span style={{ color: "orangered" }}> +33 82 37 11 77</span>{" "}
            </p>
            <p>
              E-mail:{" "}
              <span style={{ color: "orangered" }}>aocholayoul9@gmail.com</span>{" "}
            </p>
          </div>
        </div>
        <div className="right">
          <h3>Send a Message</h3>
          <p>Do you have anything in your mind to tell us?</p>
          <p>
            Please don’t hesitate to get in touch to us via our contact form.
          </p>
          <div className="formContact">
            <div className="inputfield">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="inputfield">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="inputfield">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="inputfield">
              <textarea
                name=""
                rows="5"
                cols="40"
                placeholder="Your message"
                id=""
              ></textarea>
            </div>
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
      <div className="map">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(cake%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
