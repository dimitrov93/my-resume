import React, { useEffect, useState } from "react";
import {AiFillDelete} from 'react-icons/ai'
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import * as testimonialService from "../../services/testimonialService";
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

  const [testimonials, setTestimonials] = useState([])
  
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
            console.log(result);
          })
      } catch (error) {
        console.log(error);
      }
    }


  }

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
            data.length > 0 ?
            testimonials.map((x, index) => {
              return (
                <SwiperSlide key={index} className="testimonials">
                  <button className="delete__btn" onClick={(e) => onDelete(e, x._id)}><AiFillDelete /></button>
                <div className="client__avatar">
                  <img src={x.avatar} />
                </div>
                <h5 className="client__name">{x.name}</h5>
                <small className="client__review">
                  {x.review}
                </small>
              </SwiperSlide>
              )
            }) :          <small className="testimonials no__reviews">
                There are no reviews left yet
          </small>
          }
      </Swiper>
      <button className="btn btn-primary btn-swiper">Write a testimonial</button>
    </section>
  );
};

export default Testimonials;
