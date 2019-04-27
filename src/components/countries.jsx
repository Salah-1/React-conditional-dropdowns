import React, { Component } from "react";
import Cities from "./cities";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "none",
      countryName: "none",
      hideDropDown: true,
      // Array for cities and countries
      theCountries: ["Usa", "Canada", "Mexico"],
      Usa: ["New York", "Arizona", "Georgia", "Kentucy"],
      Canada: ["Toronto, Vancouver"]
    }; // End state

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCity = this.setCity.bind(this);
  } // End Constructor
  setCity(props) {
    // this simply sets city
    this.state.cityName = this.state.Usa.maq(cname => <option>{cname}</option>);
    console.log("new method", this.state.cityName);
  }

  handleChange(event) {
    console.log(event.target.value, "::event target value::");
    console.log(this.props, "::props output::");
    this.setState({ hideDropdown: false });
    this.setState({ countryName: event.target.value });
    this.setState({ cityName: event.target.value });

    if (event.target.value) {
      //return <Cities countryName={event.target.value} />;
      console.log(
        event.target.value,
        "[Hey, IF worked, event.target.value is to: see LEFT]"
      );
    } else {
      console.log(event.target.value, "[ELSE entered, event.target.value is]");
    }
  } // End handleChange method

  handleSubmit(event) {
    alert("submitted value is: " + this.state.value);
    event.preventDefault();
  } // End handleSubmit method

  render() {
    //const cname =  this.state.Usa.maq(cname => <option>{cname}</option>);
    const countryName1 = this.state.countryName;
    const hide1 = false;
    console.log(hide1, "[hideDropdown] from Countries [inside render]");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose a country:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.theCountries.map(cname => (
              <option>{cname}</option>
            ))}
          </select>
        </label>
        <Cities countryName={countryName1} hideDropdown={hide1} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Countries;
