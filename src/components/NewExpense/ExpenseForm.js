import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=> {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleEventHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
  
    const amountEventHandler =(event) =>{
        setEnteredAmount(event.target.value)
    }
    
    const DateEventHandler =(event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange ={titleEventHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountEventHandler}  />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={DateEventHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm;