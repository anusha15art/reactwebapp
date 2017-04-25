import React, { Component } from 'react';
import '../Styles/App.css';
import '../Styles/w3.css';
import img1 from '../collage_img/img1.jpg';
import img3 from '../collage_img/img3.jpg';
import img15 from '../collage_img/img15.jpg';
import img16 from '../collage_img/img16.jpg';
import img17 from '../collage_img/img17.jpg';

class Slider extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	slideIndex:1
	    }
		this.nextDiv = this.nextDiv.bind(this);
		this.previousDiv = this.previousDiv.bind(this);
		this.showDivs = this.showDivs.bind(this);
	}

	nextDiv() {
		this.state.slideIndex = this.state.slideIndex + 1;
		this.showDivs(this.state.slideIndex);
	}

	previousDiv() {
		this.state.slideIndex = this.state.slideIndex - 1;
		this.showDivs(this.state.slideIndex);
	}

	showDivs(n) {
		var i;
		var x = document.getElementsByClassName("mySlides");
		if (n > x.length) {
			this.state.slideIndex = 1
		}
		if (n < 1) {
			this.state.slideIndex = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[this.state.slideIndex - 1].style.display = "block";
	}

  render() {
    return (
		<div className="slides">
			<div className="w3-content w3-display-container">
				<img className="mySlides" src={img1} style= {{ display:"block"}} />
				<img className="mySlides" src={img3} style= {{ display:"none"}}/>
				<img className="mySlides" src={img15} style= {{ display:"none"}}/>
				<img className="mySlides" src={img16} style= {{ display:"none"}} />
				<img className="mySlides" src={img17} style= {{ display:"none"}}/>
				<button className="w3-button w3-display-left" onClick={this.previousDiv}>&#10094;</button>
				<button className="w3-button w3-display-right" onClick={this.nextDiv}>&#10095;</button>
			</div>
		</div>
    );
  }
}

export default Slider;
