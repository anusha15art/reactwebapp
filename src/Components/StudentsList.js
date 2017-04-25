import React, { Component } from 'react';
import Students from '../Constant/Students.js';
import '../Styles/Students.css';

class Home extends Component {
	constructor(props) {
	  super(props);
		this.renderCourses = this.renderCourses.bind(this);
		this.searchButtonClick = this.searchButtonClick.bind(this);
		this.resetButtonClick = this.resetButtonClick.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.state = {
			name: '',
			age: '',
			stream: '',
			gender: '',
			filteredStudents: Students,
			students: Students
		}
	}

  renderItem(item, index){
	return <tr key={index.toString()}>
	    <td>{item.number}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.stream}</td>
      <td>{item.gender}</td>
    </tr>;
  }

  renderCourses(){
	  return (
			this.state.filteredStudents.map(this.renderItem)
		);
  }

  onSearchChange(event){
	  this.state.searchText = event.target.value;
	  this.searchButtonClick();
  }

  searchButtonClick(){
	var items = []
	for(var index in this.state.students){
		var student = this.state.students[index];
		debugger;
		console.log()
		if(student.name.toLowerCase().indexOf(this.state.name.toLowerCase()) >= 0
		&& (this.state.age == '' || student.age == this.state.age)
		&& (this.state.stream == '' || student.stream == this.state.stream)
		&& (this.state.gender == '' || student.gender == this.state.gender))
		{
			items.push(student);
		}
	}

	this.setState({filteredStudents: items});
  }

  resetButtonClick(){
		this.setState({
			name:'',
			age:'',
			stream: '',
			gender: '',
			filteredStudents: this.state.students
		});
  }


  render() {
	  var students = this.renderCourses();

    return (
      <div className="Students">
 
		<input
          type="text"
          maxLength="35"
          name="Search Names"
          placeholder="Search Names"
					value={this.state.name}
          onChange={(event) => { this.setState({name:event.target.value }) }}/>


    <select className="dropdown"
			  value={this.state.age}
		    onChange={(event) => { this.setState({age:event.target.value }) } }>
          <option value="Age" disabled="disabled" >Age</option>
					<option value="" >All Age</option>
          <option value="20" >20</option>
          <option value="21" >21</option>
          <option value="22" >22</option>
          <option value="23" >23</option>
          <option value="24" >24</option>
          <option value="25" >25</option>
          <option value="26" >26</option>
          <option value="27" >27</option>
          <option value="28" >28</option>
          <option value="29" >29</option>
          <option value="30" >30</option>
          <option value="31" >31</option>
     </select>

     <select className="dropdown"
		   value={this.state.stream}
		    onChange={(event) => { this.setState({stream:event.target.value })} }>
          <option value="">Select All Course</option>
          <option value="Civil Engineering" >Civil Engineering</option>
          <option value="Electrical And Electronics Engineering" >Electrical And Electronics Engineering</option>
          <option value="Mechanical Engineering" >Mechanical Engineering</option>
          <option value="Electronics And Communication Engineering" >Electronics And Communication Engineering</option>
          <option value="Computer Science And Engineering" >Computer Science And Engineering</option>
          <option value="Information Technology" >Information Technology</option>
          <option value="Power Electronics" >Power Electronics</option>

      </select>

			<select className="dropdown"
			 value={this.state.Gender}
			  onChange={(event) => { this.setState({gender:event.target.value })}}>
				  <option value="">Select Gender</option>
					<option value="male" >male</option>
					<option value="female" >female</option>
					<option value="other" >other</option>
			</select>


		  <input
          className="button1"
          type="submit"
          value="Go"
          hidden={false}
					onClick={this.searchButtonClick}/>

		  <input
          className="button2"
          type="submit"
          value="Reset"
          hidden={false}
					onClick={this.resetButtonClick}/>

		  <table className="table">

      <thead>
          <tr>
               <th style= {{width:10}}>S.No</th>
               <th> Name</th>
               <th>Age</th>
               <th>Department</th>
               <th>Gender</th>
          </tr>
      </thead>

      <tbody>
            {students}
      </tbody>

     </table>
	 </div>
    );
  }
}

export default Home;
