import React from "react";

const Tracker = () => {
  const addKcal = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addKcal}>
        <h1>ADD KCAL ;p</h1>
        <input placeholder="ENTER FOOD NAME" />
        <input placeholder="ENTER KCAL" />
        <input placeholder="ENTER PROTEIN" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Tracker;
