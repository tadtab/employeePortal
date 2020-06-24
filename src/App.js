import React, { Component } from 'react';
import './App.css';
import Employee from './Employee';

class App extends Component {
   state = {
      employees: ["Tadele", "Yalew", "Ashenafi"]
  }
  render() {

    const noOfEmployees = this.state.employees.length;
    let employee = null
    if(noOfEmployees > 0){
     
      for(var i = 0; i < noOfEmployees; i++){
        employee = (<Employee employeeName={this.state.employees[i]}/>);
      }
    } else {
      employee = (
        <p>No Empolyee to display</p>
      );
    }
    
    return (
      
      <div className="App">
        {
           this.state.employees.map((name) => {
             return (
              <p>Emoployee Name: {name}</p>
             );
           })
        }
       
      </div>
    );
   
  }
}

export default App;
