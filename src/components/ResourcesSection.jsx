import React from "react";
import "../components/ResourcesSection.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ResourcesSection(props) {
    return (
        <div className="resources-container">
            <h2 className="resources-heading">{props.heading}</h2>
            <p className="resources-description">{props.content}</p>

            <Carousel 
                className="carousel"
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    (props.media).map(m => (
                        <div key={m.id} className="resources-card">
                            <div className="youtube-video">{m.tag}</div>
                            <h3 className="card-title">{m.cardTitle}</h3>
                        </div>
                    ))
                }  
            </Carousel> 
        </div>
    )
}