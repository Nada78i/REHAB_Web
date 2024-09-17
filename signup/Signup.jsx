import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="addUser">
      <h3>تسجيل حساب جديد</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">الاسم الثنائي :</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="ادخل الاسم الثنائي"
          />
          <label htmlFor="name">رقم الهوية :</label>
          <input
            type="text"
            id="id"
            name="id"
            autoComplete="off"
            placeholder="ادخل رقم الهوية"
          />
          <label htmlFor="email">البريد الالكتروني:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="ادخل البريد الالكتروني"
          />
          <label htmlFor="Password">كلمة المرور :</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="ادخل كلمة المرور"
          />
          <button type="submit" class="btn btn-success">
            تسجيل
          </button>
        </div>
      </form>
      <div className="login">
        <p>رجوع</p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;