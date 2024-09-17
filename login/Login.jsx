import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="addUser">
      <h3>تسجيل الدخول</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">البريد الإلكتروني :</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="ادخل البريد الإلكتروني"
          />
          <label htmlFor="Password">كلمة المرور :</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="ادخل كلمة المرور"
          />
          <h4>هل نسيت كلمة المرور؟</h4>
          <button type="submit" class="btn btn-primary">
            تسجيل الدخول
          </button>
        </div>
      </form>
      <div className="login">
        <p>انشاء حساب جديد </p>
        <Link to="/" type="submit" class="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;