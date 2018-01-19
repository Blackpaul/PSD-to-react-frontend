import React, { Component } from 'react';
import Slider from 'react-slick';

//import from external file
import titleImg from '../../layout/img/dss-title-img.png';
import phoneImg from '../../layout/img/dps-phone.png';

export default class Portfolio extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      dots: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 600,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    };
    return (
        <div id="portfolio" className="div-portfolio-sec-3 text-center">
          <div className="container">
            <img className="dps-titleImg" src={titleImg} alt="Explore" />
            <div className="row">
              <div className="col-md-4">
                <div className="img-play"></div>
                <div className="img-play1"></div>
                <p className="dps-framework-title">
                  Wordpress
                    <span>
                      <i className="fa fa-wordpress"  aria-hidden="true"></i>
                      <i className="fa fa-facebook"   aria-hidden="true"></i>
                      <i className="fa fa-pinterest"  aria-hidden="true"></i>
                      <i className="fa fa-instagram"  aria-hidden="true"></i>
                      <i className="fa fa-telegram"   aria-hidden="true"></i>
                    </span>
                </p>
                <p className="dps-ft-text">Curabitur euismod arcu in semper dignissim enean faucibus vulputate.</p>
              </div>
              <div className="col-md-4 phone">
                  <img className="dps-titleImg" src={phoneImg} alt="Explore" />
              </div>
              <div className="col-md-4">
                <div className="img-play-b"></div>
                <div className="img-play1-b"></div>
                <p className="dps-framework-title">
                  ReactJS
                    <span>
                      <i className="fa fa-html5"      aria-hidden="true"></i>
                      <i className="fa fa-facebook"   aria-hidden="true"></i>
                      <i className="fa fa-pinterest"  aria-hidden="true"></i>
                      <i className="fa fa-instagram"  aria-hidden="true"></i>
                      <i className="fa fa-telegram"   aria-hidden="true"></i>
                    </span>
                </p>
                <p className="dps-ft-text">Curabitur euismod arcu in semper dignissim enean faucibus vulputate.</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container">
              <div className="dps-slider-div">
                <Slider {...settings}>
                  <div>
                    <div className="dps-img-1 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-2 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-3 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-4 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-5 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-6 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-7 dps-img"></div>
                  </div>
                  <div>
                    <div className="dps-img-8 dps-img"></div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
