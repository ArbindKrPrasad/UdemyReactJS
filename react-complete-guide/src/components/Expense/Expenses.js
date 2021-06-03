import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In expense.js");
    console.log(selectedYear);
  };
  return (
    <div className="expenses">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelect={yearSelectHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  );
}

export default Expenses;
