import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (event) => {
  //   const [enteredYear, setEnteredYear] = useState("");
  const filterChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredYear(event.target.value);

    // const submitHandler = (event) => {
    //   event.preventDefault();

    //   const yearData = {
    //     year: enteredYear,
    //   };

    //   event.onSaveYearData(yearData);
    //   setEnteredYear("");
    // };
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
