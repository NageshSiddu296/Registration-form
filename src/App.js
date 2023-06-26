import "./styles.css";
import React, { useState } from "react";
const Form = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: ""
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.username.trim() === "" ||
      user.password.trim() === "" ||
      user.email.trim() === "" ||
      user.phone.trim() === ""
    ) {
      // if (
      //   user.username.length === 0 ||
      //   user.password.length === 0 ||
      //   user.email.length === 0 ||
      //   user.phone.length === 0
      // )
      alert("Please fill all the fields.");
    }

    setUser({ username: "", password: "", email: "", phone: "" });
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
