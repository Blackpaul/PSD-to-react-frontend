import React, { Component } from 'react';
import Rxjs from 'rxjs';
import Slider from 'react-slick';

//import from external file
import titleImg from '../../layout/img/dss-title-img.png';

export default class Services extends Component {
  constructor(props){
    super(props);
      this.state = {
        onScroll: true,
        onScroll1: true
      };
  }
  componentDidMount(){
    Rxjs.Observable.fromEvent(window, 'scroll')
    .subscribe(e => {
      this.dssSlideTxtContainer();
      this.dssSlideTxtFluid();
    });
  }

  dssSlideTxtContainer() {
    if (window.scrollY >= 350) {
      this.setState({ onScroll: false });
        if (window.scrollY >= 1100) {
          this.setState({ onScroll: true });
        }else {
          this.setState({ onScroll: false });
        }
    }else {
      this.setState({ onScroll: true });
    }
  }

  dssSlideTxtFluid() {
    if (window.scrollY >= 810) {
      this.setState({ onScroll1: false });
        if (window.scrollY >= 1800) {
          this.setState({ onScroll1: true });
        }else {
          this.setState({ onScroll1: false });
        }
    }else {
      this.setState({ onScroll1: true });
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
        <div id="services" className="div-services-sec-2 text-center" ref={ (divElement1) => this.divElement1 = divElement1}>
          <div className="container">
            <img className="dss-titleImg" src={titleImg} alt="Explore" />
            <p className={`dss-heading-txt ${this.state.onScroll ? 'animate-dss-head-text' : ''}`}>What I do</p>
            <p className={`dss-p-txt ${this.state.onScroll ? 'animate-dss-head-text' : ''}`}>Fusce suscipit sit amet nisi in euismod. Aenean dignissim finibus eros, sit amet venenatis ante vestibulum id. <span>Vivamus arcu elit, luctus eu porta a, pellentesque a mi. Integer finibus auctor faucibus.</span></p>
            <div className="dss-img-slider">
              <Slider {...settings}>
                <div>
                  <div className="dss-slider-img">
                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                  </div>
                  <p className="dss-slider-p-title">researching</p>
                  <p className="dss-slider-p-text"> Curabitur euismod arcu in semper dignissim enean faucibus vulputate.</p>
                </div>
                <div>
                  <div className="dss-slider-img">
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </div>
                  <p className="dss-slider-p-title">development</p>
                  <p className="dss-slider-p-text">Aenean faucibus vulputate placerat. Cras elementum tor.</p>
                </div>
                <div>
                  <div className="dss-slider-img">
                    <i className="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
                  </div>
                  <p className="dss-slider-p-title">testing</p>
                  <p className="dss-slider-p-text">In varius eu elit vel mattis. Proin ac enim orci. </p>
                </div>
                <div>
                  <div className="dss-slider-img">
                    <i className="fa fa-plane" aria-hidden="true"></i>
                  </div>
                  <p className="dss-slider-p-title">release</p>
                  <p className="dss-slider-p-text">Cum sociis natoque penatibus et magnis disurient montes.</p>
                </div>
                <div>
                  <div className="dss-slider-img">
                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                  </div>
                  <p className="dss-slider-p-title">release</p>
                  <p className="dss-slider-p-text">Cum sociis natoque penatibus et magnis disurient montes.</p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="container-fluid">
            <p className={`dss-fluid-title ${this.state.onScroll1 ? 'animate-dss-fluid-head-text' : ''}`}>Join React Today</p>
            <p className={`dss-fluid-txt ${this.state.onScroll1 ? 'animate-dss-fluid-head-text' : ''}`}>Curabitur bibendum quis enim sit amet ornare. Curabitur euismod arcu in semper dignissim. Aenean faucibus<span>vulputate placerat. Cras elementum tortor ac velit consectetur fermentum. Pellentesque tellus nibh, ultricies a</span><span>justo id, condimentum tincidunt est.</span></p>
          </div>
        </div>
    );
  }
}
