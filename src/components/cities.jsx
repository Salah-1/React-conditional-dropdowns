import React, { Component } from "react";
// Input: country name
// output: Cities for that country Possibly in Select

function Cities(props) {
  const Usa = ["New York", "Arizona", "Georgia", "Kentucy"];
  const Canada = ["Toronto, Vancouver"];
  const countryName = props.countryName;
  let select;
  console.log(props.countryName, "[countryName value is] from cities");
  console.log(props.hideDropdown, "[hideDropdown value is] from cities");
  if (countryName === "none") {
    console.log(countryName, "(inside cities values of countryName is:) ");
  }
  return (
    <div>
      <select>
        <option> bla bla </option>
        {Usa.map(cname => (
          <option>{cname}</option>
        ))}
      </select>
      <p>
        {" "}
        hideDropdown values is {props.hideDropdown}
        console.log(props.hideDropdown, "inside cities values of hideDrodpwn
        is:" );
      </p>
    </div>
  );
}
export default Cities;
