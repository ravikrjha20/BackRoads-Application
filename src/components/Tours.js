import React from "react";
import Title from "./Title";
import data from "../Data/Data";
const { tourData } = data;

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subTitle='Tours' />
      <div className='section-center featured-center'>
        {tourData.map((tour, index) => {
          return (
            <article className='tour-card' key={index}>
              <div className='tour-img-container'>
                <img src={tour.image} className='tour-img' alt={tour.title} />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{" "}
                    {tour.country}
                  </p>
                  <p>{`${tour.days} Days`}</p>
                  <p>{`From ${tour.amount}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
