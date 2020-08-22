import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      internship: [],
      isDisplayForm: false,
      taskEditing : null,
    }
  }

  componentDidMount() {
    this.reloadData();
  }
  reloadData = () => {
    fetch("https://localhost:44338/api/Internships")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            internship: result
          });
          console.log(this.state.internship)
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  findIndex =(id) =>{
    var { internship } = this.state;
    var result = -1;
    internship.forEach((data,index) => {
      if(data.id === id) {
        result = index;
      }
    });
    return result;
  }

  onToggleForm = () => {
    if(this.state.isDisplayForm){
      if(this.state.taskEditing){
        this.setState({
          taskEditing:null
        })
      }else{
        this.setState({
          isDisplayForm: !this.state.isDisplayForm,
        })
      }
    }
    else{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
      })
    }
  }

  onUpdate = (id) =>{
    var {internship} = this.state;
    var taskEditing = internship[this.findIndex(id)];
    this.setState({
      taskEditing : taskEditing
    });
    this.onShowForm();
    
  }
  onDelete = (id) =>{
    axios.delete(`https://localhost:44338/api/Internships/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.reloadData();
      })
  }

  onShowForm(){
    this.setState({
      isDisplayForm: true,
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditing:null
    })
  }

  clear(){
    console.log("clear")
  }

  render() {
    var { internship, isDisplayForm,taskEditing } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} internship={taskEditing} reloadData = {this.reloadData } /> : '';
    return (
      <div className="container mt-30">
        <div className="text-center">
          <h1>Quản lý INTERNSHIP</h1>
          <hr />
        </div>

        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form */}
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <i className="fa fa-plus" aria-hidden="true"></i> Thêm INTERN
            </button>
            {/* Search - Sort*/}
            {/* <Control /> */}
            <TaskList internship={internship} onUpdate = { this.onUpdate} onDelete = { this.onDelete} />
          </div>

        </div>

      </div>
    )
  }
}

export default App;
