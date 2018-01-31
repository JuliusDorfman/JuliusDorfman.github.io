import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  			<div className="post banner">
			    <h1 className="post-title"> </h1>
			    <p>I am a Full Stack Web Developer specializing in building web applications with a focus in consistency, scalability, and a dedication to the DRY principle. 
			    	<a href="#" onClick={this.eventToggleSidebar}> Please, stay and browse the content/style of my site.</a>
			    </p>
			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies & Proficiencies</h2>
				<div className="exclaimation">(Click to see a project utilizing the technology)</div>


				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>React</em>
							<ul>
								<li><em>Redux</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
							<ul>
							<li><em>Mongoose</em></li>
							</ul>
						<li><em>Node</em></li>
							<ul>
								<li><em>Express</em></li>
							</ul>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Mocha</em></li>
						<li><em>Chai</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em>Heroku</em></li>
					</ul>
				</div>	

				<div className="exclaimation">
				</div>

  			</div>


  			<div className="post clearfix">
			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;