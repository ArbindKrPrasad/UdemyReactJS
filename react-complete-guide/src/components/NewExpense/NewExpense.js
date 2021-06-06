import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formState, setFormState] = useState("addExpenseBtn");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const newExpenseClickHandler = () => {
    if(formState==="addExpenseBtn") setFormState("addExpenseForm");
    else setFormState("addExpenseBtn");
  }

  if (formState === "addExpenseBtn") {
    return (
      <div className="new-expense">
        <button onClick={newExpenseClickHandler}>Add new Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onNewExpenseClick = {newExpenseClickHandler} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }
};

export default NewExpense;