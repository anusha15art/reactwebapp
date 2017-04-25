import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
	    super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
	    	centerPanel:'Main'
	    }
	}
	
	// handleClick has to be triggered onClick event of menu items.. It is compared with name attribute of menu item
	//
	handleClick(e) {
		
		// setState method is triggered to call render method again and update the container object
		//
		var item = e.target.attributes["name"].value;
		if(item === "Home"){
			this.setState({centerPanel:'Home'});
		} else if(item === "AboutUs"){
			this.setState({centerPanel:'AboutUs'});
		}
	}
	
  render() {
	  // we have to provide default container
	  //
	  var container = <Main />;
	  
	  // when this.state.centerPanel is updated and called setState method, below code is used to populate dynamic UI in container panel.
	  //
	  if(this.state.centerPanel === "Home"){
		  container = <Home />;
	  } else if(this.state.centerPanel === "AboutUs"){
		  container = <AboutUs />;
	  }
    return (
	  <div>
		<Header />
		{container}
		<Footer />
	  </div>
    );
  }
}

export default App;
