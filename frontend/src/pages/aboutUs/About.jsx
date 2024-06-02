import images from "../../assets/images";
import "./about.scss";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>About us</h2>
        </div>
      </div>
      <div className="aboutHistory">
        <div className="left">
          <img src={images.person1} alt="" />
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint
            odit vero animi exercitationem, aut id iure unde porro rem
            necessitatibus, ratione quasi architecto quam beatae quibusdam, quos
            voluptate repellendus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore cumque laudantium corporis beatae minus
            dolorem unde culpa nobis illum voluptate! Soluta autem voluptatum
            nesciunt, temporibus sequi ullam corrupti aut illo!
          </p>
        </div>
      </div>
      <div className="ourChiffre">
        <div className="chiffreItems">
          <p>10</p>
          <p>class</p>
        </div>
        <div className="chiffreItems">
          <p>50</p>
          <p>Staffs</p>
        </div>
        <div className="chiffreItems">
          <p>4</p>
          <p>Master</p>
        </div>
        <div className="chiffreItems">
          <p>5</p>
          <p>Kitchens </p>
        </div>
      </div>
      <div className="staffs">
        <div className="top">
          <h3>OUR STAFFS</h3>
          <p>Main core of our company is our staffs</p>
        </div>
        <div className="bottom">
          <div className="staffImag">
            <img src={images.person4} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
          <div className="staffImag">
            <img src={images.person5} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
          <div className="staffImag">
            <img src={images.person1} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
          <div className="staffImag">
            <img src={images.person2} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
          <div className="staffImag">
            <img src={images.person3} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
          <div className="staffImag">
            <img src={images.person1} alt="" />
            <p>Linda Sara</p>
            <p>Art Derector</p>
          </div>
        </div>
      </div>
      <div className="galary">
        <h3>Galary</h3>
      </div>
    </div>
  );
};

export default About;
