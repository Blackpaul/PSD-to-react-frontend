import React, { Component } from 'react';
import Rxjs from 'rxjs';

//import from external file
import bannerImg from '../../layout/img/banner.png';
import logo from '../../layout/img/logo.png';

// import image1 from '../../layout/img/slider/slider1.jpg';
// import image2 from '../../layout/img/slider/slider2.jpg';
// import image3 from '../../layout/img/slider/slider3.jpg';
//
// const kani = [image1, image2, image3];

export default class Banner extends Component {
  constructor(props){
    super(props);
      this.state = {
        onScroll: true
      };
  }

  componentDidMount(){
    this.setState({ onScroll: false });
      const height = this.divElement.clientHeight;
      const hPercetn = 0.40 * height;
        Rxjs.Observable.fromEvent(window, 'scroll')
          .subscribe(e => {
            if (window.scrollY > (height - hPercetn) ) {
              this.setState({ onScroll: true });

            } else {
              this.setState({ onScroll: false });
            }
          });
  }
  toplok(){
    alert('yes')

  }
  render() {
    // var divStyle = {
    //   backgroundImage: 'url(' + kani[0] + ')',
    //   WebkitTransition: 'all', // note the capital 'W' here
    //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    // };
    return (
      <div id="banner" className="div-banner-sec-1 text-center" ref={ (divElement) => this.divElement = divElement}>
          <img className="img-responsive center-block" src={bannerImg} alt="logo"/>
          <div className="left-line visible-md visible-lg"></div>
          <div className="right-line visible-md visible-lg"></div>
            <p className={`dbs-title-1 ${this.state.onScroll ? 'animate-dbs-t-1' : ''}`}>React</p>
            <p className={`dbs-title-2 ${this.state.onScroll ? 'animate-dbs-t-2' : ''}`}>Real world</p>
            <p className={`dbs-title-3 ${this.state.onScroll ? 'animate-dbs-t-3' : ''}`}>Remedy</p>
            <p className="dbs-explore" onClick={this.toplok}>Explore<span><img src={logo} alt="logo" /></span></p>
            
      </div>
    );
  }
}
