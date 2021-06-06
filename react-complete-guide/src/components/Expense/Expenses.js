import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In expense.js");
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelect={yearSelectHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
