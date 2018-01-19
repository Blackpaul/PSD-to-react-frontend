import React, { Component } from 'react';
import Slider from 'react-slick';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

//import from external file
import titleImg from '../../layout/img/dss-title-img.png';
import aboutImg1 from '../../layout/img/dps-slider/7.jpg';
import aboutImg2 from '../../layout/img/dps-slider/6.jpg';
import aboutImg3 from '../../layout/img/dps-slider/5.jpg';
import aboutImg4 from '../../layout/img/dps-slider/4.jpg';

export default class About extends Component {


  render() {
    const mapStayle = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ];

    const MyMapComponent = compose(
      withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAk-K9BOhKKKr2bl-WLinndvqKAPjXjs6A&callback=initMap",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div style={{ height: `100%` }} />,
              mapElement: <div style={{ height: `100%` }} />
        }),
      withScriptjs,
      withGoogleMap
    )(props => (

      <GoogleMap
        defaultCenter={{
          lat:  8.502,
          lng: 124.641
        }}
        defaultZoom={8}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: true,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: true,
          scrollwheel: false,
          styles: mapStayle
        }}>
        {props.isMarkerShown && (
          <Marker position={{ lat:  8.502, lng: 124.641 }} />
        )}
      </GoogleMap>
    ));

    const settings = {
      arrows: false,
      dots: false,
      autoplay: true,
      infinite: true,
      rtl: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }]
    };
    return (
      <div id="about" className="div-about-sec-4 text-center">
      <img className="das-titleImg" src={titleImg} alt="Explore" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 div-map">
              <MyMapComponent isMarkerShown />
            </div>
            <div className="col-sm-7 div-search">
              <div className="col-sm-6 das-icons">
                <a href="/"><i className="fa fa-twitter"      aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-facebook"     aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-pinterest"    aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-google-plus"  aria-hidden="true"></i></a>
              </div>
              <div className="col-sm-6 das-subscribe">
                <div className="input-group">
                  <input type="text" placeholder="Enter Emaill Address" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8 div-about-con pull-right pull-left-md">
              <Slider {...settings}>
                <div className="das-slider-div">

                  <img src={aboutImg1} alt="" className="das-slider-img" />
                  <p className="text-left text-i"><i className="fa fa-calendar"      aria-hidden="true"></i> 02 / 15 / 1991</p>
                  <p className="das-slider-p-title">Grade School</p>
                  <p className="text-left das-slider-p-text"> Cras massa nulla, cursus quis purus eu, varius feugiat urna. Praesent vulputate placerat turpis, nec fringilla turpis sollicitudin at. Phasellus convallis quam eget risus ultricies dignissim.</p>
                  <a href="/" className="pull-left read-more">Read More...</a>

                </div>
                <div className="das-slider-div">

                <img src={aboutImg2} alt="" className="das-slider-img" />
                <p className="text-left text-i"><i className="fa fa-calendar"      aria-hidden="true"></i> 02 / 15 / 1991</p>
                <p className="das-slider-p-title">High School</p>
                <p className="text-left das-slider-p-text"> Cras massa nulla, cursus quis purus eu, varius feugiat urna. Praesent vulputate placerat turpis, nec fringilla turpis sollicitudin at. Phasellus convallis quam eget risus ultricies dignissim.</p>
                <a href="/" className="pull-left read-more">Read More...</a>

                </div>
                <div className="das-slider-div">

                <img src={aboutImg3} alt="" className="das-slider-img" />
                <p className="text-left text-i"><i className="fa fa-calendar"      aria-hidden="true"></i> 02 / 15 / 1991</p>
                <p className="das-slider-p-title">College School</p>
                <p className="text-left das-slider-p-text"> Cras massa nulla, cursus quis purus eu, varius feugiat urna. Praesent vulputate placerat turpis, nec fringilla turpis sollicitudin at. Phasellus convallis quam eget risus ultricies dignissim.</p>
                <a href="/" className="pull-left read-more">Read More...</a>

                </div>
                <div className="das-slider-div">

                <img src={aboutImg4} alt="" className="das-slider-img" />
                <p className="text-left text-i"><i className="fa fa-calendar"      aria-hidden="true"></i> 02 / 15 / 1991</p>
                <p className="das-slider-p-title">Experience</p>
                <p className="text-left das-slider-p-text"> Cras massa nulla, cursus quis purus eu, varius feugiat urna. Praesent vulputate placerat turpis, nec fringilla turpis sollicitudin at. Phasellus convallis quam eget risus ultricies dignissim.</p>
                <a href="/" className="pull-left read-more">Read More...</a>

                </div>

              </Slider>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
