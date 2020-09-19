import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper header mx-5 p-3 rounded d-flex">
        <img src="img/food.png" width="250" className="mr-4" />
        <div className="content">
          <h4 className="title">Mau apa hari ini?</h4>
          <p className="subtitle">Hati keyanang, Perut pun senang</p>
        </div>
      </div>
    )
  }
}

export default Header;