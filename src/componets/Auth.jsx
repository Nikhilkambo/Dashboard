import React, { useEffect, useState,useContext } from "react";
import Input_Text from "./Input_Text";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Auth(props) {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('userInfo')
    if(auth){
      navigate('/')
    }
  },)
  
  let [authMode, setAuthMode] = useState("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const {login}  = useContext(AuthContext)
  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:3007/api/user/loginUser",
        formData
      );
      if (response.status === 200) {
        console.log("Data posted successfully:", response.data);
        if(response.data.isLogin===true){
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          login(response.data.token)
          alert("Login Successfully")
          navigate('/');
        }else{
          alert(response.data.message)
        }
        setFormData({ name: "", email: "", password: "" });
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
     
    }
    // Here you can perform further actions, like sending the data to an API.
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3007/api/user/register",
        formData
      );
      if (response.status === 200) {
        console.log("Data posted successfully:", response.data);
        if(response.data.isLogIn===true){
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          alert("Login Successfully")
          navigate('/');
        }else{
          alert(response.data.message)
        }
        setFormData({ name: "", email: "", password: "" });
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogIn}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <Input_Text
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <Input_Text
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/password">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <Input_Text
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <Input_Text
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <Input_Text
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="/password">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
