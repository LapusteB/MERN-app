import React, { useState } from 'react';
import './NewGoal.css'


const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('')


    //let enteredText = '';
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        

        setEnteredText('');
        //console.log(newGoal);
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {//Use a State to reset the text after adding a new goal
        setEnteredText(event.target.value);
    };

    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">"Add Goal"</button>
    </form>
    );
};

export default NewGoal;