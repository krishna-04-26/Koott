import React, { useState } from "react";

import "./Signup.css";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    division: "",
    year: "",
    semester: "",
    email: "",
    password: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let newErrors = {};

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^[0-9]{10}$/;

    if (!formData.name) newErrors.name = "Name required";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email";

    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ characters";

    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Signup success", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>

        <br></br>
      <div className="signup-container">

        <div className="signup-card">

          <h2>Create your Koott Account</h2>

          <form onSubmit={handleSubmit} className="signup-form">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <span>{errors.name}</span>

            <input
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
            />

            <input
              type="text"
              name="division"
              placeholder="Division"
              onChange={handleChange}
            />

            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={handleChange}
            />

            <input
              type="number"
              name="semester"
              placeholder="Semester"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="College Email"
              onChange={handleChange}
            />
            <span>{errors.email}</span>

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <span>{errors.password}</span>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <span>{errors.phone}</span>

            <button type="submit">
              Create Account
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Signup;