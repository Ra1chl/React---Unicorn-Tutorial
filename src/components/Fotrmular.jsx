import React, { useState } from "react";

function Formular() {
  const [info, setInfo] = useState({
    name: "name",
    age: "15",
    email: "example@example.com",
    password: "123456789",
  });

  function handleNameChange(event) {
    setInfo((prevInfo) => ({ ...prevInfo, name: event.target.value }));
  }
  function handleAgeChange(event) {
    setInfo((prevInfo) => ({ ...prevInfo, age: event.target.value }));
  }
  function handleEmailChange(event) {
    setInfo((prevInfo) => ({ ...prevInfo, email: event.target.value }));
  }
  function handlePasswordChange(event) {
    setInfo((prevInfo) => ({ ...prevInfo, password: event.target.value }));
  }

  return (
    <div>
      <p>
        your info: {info.name}, {info.age}, {info.email}, {info.password}
      </p>

      <input type="text" value={info.name} onChange={handleNameChange} />
      <br />
      <input type="number" value={info.age} onChange={handleAgeChange} />
      <br />
      <input type="text" value={info.email} onChange={handleEmailChange} />
      <br />
      <input
        type="text"
        value={info.password}
        onChange={handlePasswordChange}
      />
      <br />
    </div>
  );
}

export default Formular;
