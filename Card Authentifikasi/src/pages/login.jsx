import React from "react";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/index";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti bisa ditambah validasi: cek email & password
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-[#F0BB78] to-[#FFD39C] h-32 w-full min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="******"
            name="password"
          />
          <Button className="bg-orange-500 w-full mt-4" type="submit">
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Belum punya akun?{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
