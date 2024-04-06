import { useState } from 'react';
import europ1 from '../places/cardphoto/europ1.jpg';
import europ2 from '../places/cardphoto/europ2.jpg';
import europ3 from '../places/cardphoto/europ3.jpg';
import europ4 from '../places/cardphoto/europ4.jpg';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideTo = (index) => {
        setActiveIndex(index);
    };

    return (
        <div id="demo" className="carousel slide  carousel-fade colCom" data-bs-ride="carousel">
            {/* Indicators/dots */}
            <div className="carousel-indicators ">
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={index}
                        className={activeIndex === index ? "active" : ""}
                    ></button>
                ))}
            </div>

            {/* The slideshow/carousel */}
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`} data-bs-interval="2000">
                    <img src={europ1} alt="1" className="d-block w-100" />
                    
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`} data-bs-interval="2000">
                    <img src={europ2} alt="2" className="d-block w-100" />
                    
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`} data-bs-interval="2000">
                    <img src={europ3} alt="3" className="d-block w-100" />
                    
                </div>
                <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`} data-bs-interval="2000">
                    <img src={europ4} alt="4" className="d-block w-100" />
                    
                </div>
            </div>

            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" onClick={() => handleSlideTo(activeIndex === 0 ? 3 : activeIndex - 1)}>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" onClick={() => handleSlideTo(activeIndex === 3 ? 0 : activeIndex + 1)}>
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Carousel;
