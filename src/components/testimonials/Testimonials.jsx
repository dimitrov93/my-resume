import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVT1,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT2,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT3,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },

  {
    avatar: AVT4,
    name: "Ts Dimitrov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci amet culpa maxime nesciunt necessitatibus!",
  },
];

const Testimonials = () => {
<<<<<<< Updated upstream:react-portfolio/src/components/testimonials/Testimonials.jsx
=======
  const [testimonials, setTestimonials] = useState([])
  const { user } = useAuthContext();

  
  useEffect(() => {
  
    try {
      testimonialService.getAll()
        .then(result => {
          setTestimonials(result)
        })
    } catch (error) {
      console.log(error);
    }
  
  }, [])

  const onDelete = (e,id) => {
    e.preventDefault();

    let confirmation = window.confirm(
      "Are you sure that you want to delete this item?"
    )

    if (confirmation) {
      try {
        testimonialService.remove(id)
          .then(result => {
            window.location.reload(false)
          })
      } catch (error) {
        console.log(error);
      }
    }


  }

>>>>>>> Stashed changes:src/components/testimonials/Testimonials.jsx
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
          {
<<<<<<< Updated upstream:react-portfolio/src/components/testimonials/Testimonials.jsx
            data.map(({avatar,name, review}, index) => {
=======
            
            testimonials.length > 0 ?
            testimonials.map((x, index) => {
>>>>>>> Stashed changes:src/components/testimonials/Testimonials.jsx
              return (
                <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
              )
            })
          }
      </Swiper>

    </section>
  );
};

export default Testimonials;
