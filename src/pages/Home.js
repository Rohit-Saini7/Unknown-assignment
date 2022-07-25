import { useState } from "react";
import { Redirect } from "react-router-dom";

function Home({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  state,
  setState,
  country,
  setCountry,
}) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    if (firstName === "" || lastName === "" || state === "" || country === "") {
      alert("everything is required");
    } else if (
      !firstName.match(/^[a-zA-Z]+$/) ||
      !lastName.match(/^[a-zA-Z]+$/) ||
      !state.match(/^[a-zA-Z]+$/) ||
      !country.match(/^[a-zA-Z]+$/)
    ) {
      alert("fields are not valid");
      setFirstName("");
      setLastName("");
      setState("");
      setCountry("");
    } else {
      console.log(firstName, lastName, state, country);
      setShouldRedirect(true);
    }
  }
  return (
    <div>
      {shouldRedirect && <Redirect to="/result" />}
      <div className="form">
        <div className="inputBox">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span>First Name</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span>Last Name</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <span>State</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <span>Country</span>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default Home;
