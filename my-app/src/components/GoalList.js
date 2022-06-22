import React from 'react';
import './GoalList.css';

//return this {[<li>Hi</li>, <li>This works</li>]}

const GoaList = props =>{
    console.log(props.goals)
    return(
    <div className='course-goals'>
        <ul className='goal-list'>
        {
        props.goals.map((goal) => {
            return <li key={goal.id}>{goal.text}</li>
        })}

        </ul>
    </div>)
}

export default GoaList;