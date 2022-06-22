import logo from './logo.svg';


import './App.css';
import React, { useState } from 'react';
import GoaList from './components/GoalList';
import NewGoal from './components/NewGoal';
//const App = () => {
//  return React.createElement('h1', {}, 'Hi, this is React!');
//};

const App = () => {
  const [courseGoals, setCourseGoals] = useState([//YOU NEED A HOOK CALLED useState so react can update and mutate
  {id: 'cg1', text: 'finish the Course'},         //FIRST ELEMENT IS Current state snapshot, SECOND is a function that is modifying it
  {id: 'cg2', text: 'Become proficient'},
  {id: 'cg3', text: 'etc etc...'}
  ]);
  //const courseGoals = [
    

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) =>{
      return prevCourseGoals.concat(newGoal);
    });
    //setCourseGoals(courseGoals.concat(newGoal));
    //courseGoals.push(newGoal);
    //console.log(courseGoals);
  };

  
  return (
  <div className='course-goals'>
  <h1>Hi, This is React!</h1>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoaList goals={courseGoals}/>
  </div>
  );//  return React.createElement('h1', {title:"..."}, 'Hi, this is React!');
};

export default App;





//or 
/*
class App extends React.Component{
  render() {
    return <h1 title="This title">Hi, <span>Here</span> I am </h1>;
  }
}
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

