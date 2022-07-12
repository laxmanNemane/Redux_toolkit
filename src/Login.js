import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Redux-Toolkit/UserSlice";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  //here is i put the value and log in user 
  const LoginUser = () => {
    console.log("Login");
    dispatch(Login({ name: "lakhan", age: "21", status: "logged In" }));
  };


//here is i delete credentials and logout user
  const LogoutUser = () => {
    console.log("Logout");
    dispatch(Login({ name: "", age: "", status: "No User" }));
  };
  return (
    <div style={{width:"40%" , margin:" 80px auto" , border:"1px solid black" , padding:"10px 20px" , boxShadow:"20px 20px 40px"}}>
      <p >Name:&nbsp;&nbsp;  {user.name}</p>
      <p>age:&nbsp;&nbsp; {user.age}</p>
      <p>status:&nbsp;&nbsp; {user.status}</p>
      <button onClick={LoginUser}>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={LogoutUser}>LogOut</button>
    </div>
  );
};

export default LoginPage;
