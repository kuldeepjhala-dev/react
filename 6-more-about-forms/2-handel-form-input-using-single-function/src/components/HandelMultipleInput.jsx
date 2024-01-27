import { useState } from "react";

function HandelMultipleInput() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handelChange = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.value);
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    phone,
    address,
  } = formData;
git 
  return (
    <>
      <form style={{ padding: "1rem" }} onSubmit={handelSubmit}>
        <div className="formGroup">
          <label htmlFor="firstName">firstName</label> <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="lastName">lastName</label> <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="userName">userName</label> <br />
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">email</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">confirmPassword</label> <br />
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">phone</label> <br />
          <input
            type="phone"
            name="phone"
            id="phone"
            value={phone}
            onChange={handelChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="address">Address</label> <br />
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handelChange}
          />
        </div>
        <input type="submit" value="Signup" style={{ marginTop: "1rem" }} />
      </form>
    </>
  );
}

export default HandelMultipleInput;
