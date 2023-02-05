import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) =>{
    const [IsEditing, setIsEditing] = useState(false);

    const saveExpenseHandler =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
     };
    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
    return (
        <div className='new-expense'>
        {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {IsEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}
export default NewExpense;