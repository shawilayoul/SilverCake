import "./homeSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getMenu } from "../../srevices/apiMenu";
const HomeSlide = () => {
  const navigate = useNavigate();
   // Queries
   const query = useQuery({ queryKey: ['menus'], queryFn: getMenu })

   // Mutations
   useMutation({
     mutationFn: getMenu,
     onSuccess: () => {
       // Invalidate and refetch
       QueryClient.invalidateQueries({ queryKey: ['menus'] })
     },
   })

  return (
    <div className="container">
      <div className="slide-container">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={300}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          {query.data?.map(({ _id:id, image, title, description }) => {
            return (
              <SwiperSlide key={id}>
                <div className="slideItems">
                  <div className="silder">
                    <div className="left">
                      <img src={`http://localhost:8000/${image}`} alt="" />
                    </div>
                    <div className="midile">
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <button onClick={() => navigate("recipes")}>
                        See The Recipes
                      </button>
                    </div>
                    <div className="right">
                      <img src={`http://localhost:8000/${image}`} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="ourSections">
        <div className="items">
          <div className="left">
            <img src={images.iconbox1} alt="" />
          </div>
          <div className="right">
            <h2>Products</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.iconbox2} alt="" />
          </div>
          <div className="right">
            <h2>Cake Class</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <img src={images.iconbox3} alt="" />
          </div>
          <div className="right">
            <h2>Ricepes</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
