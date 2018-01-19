import React, { Component } from 'react';

//import from external file
import titleImg from '../../layout/img/dss-title-img.png';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="div-contact-sec-5 text-center">
        <div className="container">
          <img className="dcs-titleImg" src={titleImg} alt="Explore" />
          <p className="dcs-heading">Contact Me</p>
          <p className="dcs-text">Fusce suscipit sit amet nisi in euismod. Aenean dignissim finibus eros, sit amet venenatis ante vestibulum id. Vivamus arcu elit, luctus eu porta a, pellentesque a mi. Integer finibus auctor faucibus.</p>
          <div className="row text-left">
            <div className="col-sm-6 contact-info">
              <p className="p-name">Herpaul sajulan</p>
              <p className="p-address">Zone Jose lago Streep, Capisnon 6. <span>Kauswagan, Cagayan de Oro City</span> <span>Missamis Oriental, Philippines.</span></p>
              <p className="p-mobile">Mobile: +63 905 1011 579</p>
              <p className="p-email">Gmail: herpaul09@gmail.com</p>
            </div>
            <div className="col-sm-6 contact-form">
              <p className="p-mm">Message me</p>
              <form action="/action_page.php">
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <button type="submit" className="btn btn-default pull-right">Send</button>
              </form>
            </div>
          </div>
            <p className="p-footer text-center">© 2018 Created By: Herpaul Sajulan | Developer</p>
        </div>
      </div>
    );
  }
}
