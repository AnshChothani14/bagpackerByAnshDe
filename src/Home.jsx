import React from 'react'
import dubai from './places/dubai.png'
import goa from './places/goa.png'
import nyc from './places/nyc.png'
import kashmir from './places/kashmir.png'
import paris from './places/paris 1.png'
import landon from './places/landon.png'




const home = () => {
  return (
    <div>
      <div className="container home">
        <div id="demo" className="carousel slide  carousel-fade" data-bs-ride="carousel">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
          </div>

          <div className="carousel-inner">
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={dubai} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>Dubai</h2>
                <h6>Where tradition meets innovation in a skyline of dreams</h6>
              </div>
            </div>
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={landon} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>Landon</h2>
                <h6>Where history echoes through bustling streets and modern marvels stand tall</h6>
              </div>
            </div>
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={goa} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>Goa</h2>
                <h6>Goa is a vibrant fusion of sun-kissed beaches, rich history, and eclectic culture.</h6>
              </div>
            </div>
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={nyc} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>New York</h2>
                <h6>The vibrant heartbeat of New York City pulsates through its diverse streets, echoing a symphony of culture, ambition, and resilience.</h6>
              </div>
            </div>
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={paris} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>Paris</h2>
                <h6>In the heart of Paris, whispers of history dance through streets adorned with timeless elegance.</h6>
              </div>
            </div>
            <div className='carousel-item  active' data-bs-interval="2000">
              <img src={kashmir} alt="" className="d-block" />
              <div className="carousel-caption">
                <h2>Kashmir</h2>
                <h6> A land of mesmerizing beauty and enduring conflict.</h6>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default home
