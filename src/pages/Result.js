import React from "react";
import { Redirect } from "react-router-dom";

function Result({ firstName, lastName, state, country }) {
  return (
    <div>
      {firstName === "" && <Redirect to="/" />}
      <div className="form">
        <div className="inputBox">
          <div className="value"> {firstName}</div>
          <span>First Name</span>
        </div>
        <div className="inputBox">
          <div className="value"> {lastName}</div>
          <span>Last Name</span>
        </div>
        <div className="inputBox">
          <div className="value">{state}</div>
          <span>State</span>
        </div>
        <div className="inputBox">
          <div className="value"> {country}</div>
          <span>Country</span>
        </div>
      </div>
    </div>
  );
}

export default Result;
