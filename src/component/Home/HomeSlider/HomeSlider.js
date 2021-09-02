import React, {useState} from 'react';
import './HomeSlider.css';
import { Link } from 'react-router-dom';
import imageSlider1 from "../../../assets/images/Slider/slide1.jpg";
import imageSlider2 from "../../../assets/images/Slider/slide4.jpg";
import imageSlider3 from "../../../assets/images/Slider/slide2.jpg";
const Slider = () => {
    const slick_banner = [
        {
            background: imageSlider1,
            title: "We are the best",
            text:
                "trending Collection 2019",
            link: "/all",
        },
        {
            background: imageSlider2,
            title: "top fashion for men",
            text:
                "best fashion for men",
            link: "/all",
        },
        {
            background: imageSlider3,
            title: "best fashion for lady",
            text:
                "top fashion for men",
            link: "/all",
        }
    ]
    
    const [current, setCurrent] = useState(0);

    const moveDot = (index) =>  {
        setCurrent(index);
    }

    return (
        <section className="home-sliders">
            <div className="slider">
                {slick_banner.map((slide, index) => {
                    return (
                        <div 
                            className={index === current ? "home-slider slide active slider-ui" : "home-slider slide slider-ui"} 
                            style={{ backgroundImage: `url(${slide.background})` }} 
                            key={index}
                        >
                            <div className="home-slider__content">
                                <h6>{slide.title}</h6>
                                <h1>{slide.text}</h1>
                                <div>
                                    <Link className="btn"  to={slide.link}>
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="dots">
                {[...Array(slick_banner.length)].map((number, index) => {
                    return (
                        <span
                            onClick={() => moveDot(index)}
                            key={index}
                            className={index === current ? "dot active" : "dot"}
                        ></span>
                    )
                })}
            </div>
        </section>
    );
}

export default Slider;
