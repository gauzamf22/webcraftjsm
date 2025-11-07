import React from "react";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/Index";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#F0BB78] to-[#FFD39C] h-32 w-full  min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Register</h1>
        <p className="font-medium text-slate-500 mb-8">
          Create your account by filling the details below
        </p>
        <form>
          <InputForm
            label="Nama"
            type="text"
            placeholder="John Doe"
            name="name"
          />
          <InputForm
            label="Nomor HP"
            type="tel"
            placeholder="08123456789"
            name="phone"
          />
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
          <Button className="bg-orange-500 w-full mt-4">Register</Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Sudah punya akun? <Link className="text-blue-500 underline" to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
