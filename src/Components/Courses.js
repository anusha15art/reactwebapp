import React, { Component } from 'react';

class Home extends Component {

	constructor(props) {
	  super(props);
		this.renderCourses = this.renderCourses.bind(this);
		this.searchButtonClick = this.searchButtonClick.bind(this);
		this.resetButtonClick = this.resetButtonClick.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.state = {
			searchText: '',
			filteredCourses: [
				'Civil Engineering',
				'Electrical And Electronics Engineering',
				'Mechanical Engineering',
				'Electronics And Communication Engineering',
				'Computer Science And Engineering',
				'Information Technology',
				'Master Of Business Administration',
				'Master Of Computer Applications',
				'Computer Science And Engineering',
				'Power Electronics'
			],
			courses: [
				'Civil Engineering',
				'Electrical And Electronics Engineering',
				'Mechanical Engineering',
				'Electronics And Communication Engineering',
				'Computer Science And Engineering',
				'Information Technology',
				'Master Of Business Administration',
				'Master Of Computer Applications',
				'Computer Science And Engineering',
				'Power Electronics'
			]
		}
  }

  renderItem(item, index){
	   return <li key={index.toString()} >{item}</li>;
  }

  renderCourses(){
	   return (
			<div>
					{this.state.filteredCourses.map(this.renderItem)}
			</div>
		);
  }

  onSearchChange(event){
	    this.state.searchText = event.target.value;
	    this.searchButtonClick();
  }

  searchButtonClick() {
	  if(this.state.searchText != '') {
		  var items = []
		  for(var index in this.state.courses) {
			var course = this.state.courses[index];
			if(course.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0) {
			items.push(course);
			  }
		  }
		  this.setState({filteredCourses: items})
	  } else {
		  this.setState({filteredCourses: this.state.courses});
	  }
  }

  resetButtonClick(){
	    this.setState({filteredCourses: this.state.courses});
  }

  render() {
	  var courses = this.renderCourses();

    return (

    <div className="Courses">
			<center><h3>Courses</h3></center>
		  <p>Vidya Vikas Institute Of Technology (VVIT),
			Chevella Telangana runs course(s) in Computer Applications,
			Business Management, Engineering stream(s).</p>

		<input
			    type="searchCourse"
					maxLength="35"
					name="Search Course"
					placeholder="Search Course"
					onChange={this.onSearchChange }/>

		<input
		      type="submit"
					value="Search"
					hidden={true} onClick={this.searchButtonClick}/>

		<input
		      type="submit"
					value="Reset"
					onClick={this.resetButtonClick}/>

		<ol className="group">
			    {courses}
		</ol>

	</div>
    );
  }
}

export default Home;
