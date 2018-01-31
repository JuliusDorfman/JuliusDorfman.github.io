import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" className="mouse-over-hover" title="Home">Julius G. Dorfman</a>
			    <small>Full Stack Web Developer</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;