import React from "react";
import { Link } from "react-router-dom";
import { Line } from "recharts";

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left: Banner */}
        <div className="bg-[#e0941c] p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt="Bag icon"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold drop-shadow-sm">UTC Shop</h2>
            </div>

            <h2 className="text-3xl font-bold mb-4 leading-tight drop-shadow-md">
              Welcome to UTCShop!
            </h2>

            <p className="text-base opacity-90 leading-relaxed">
              Shop the latest trends, track your orders, and enjoy exclusive
              offers just for you.
            </p>
          </div>

          {/* <div className="mt-10 text-center">
            <img
              src="https://i.imgur.com/VxjUORl.png"
              alt="Shopping Illustration"
              className="w-64 mx-auto"
            />
            <p className="text-sm mt-4 opacity-80">
              Start your shopping journey today
            </p>
          </div> */}
        </div>

        {/* Right: Login Form */}
        <div className="p-12 relative flex flex-col justify-center">
          {/* Icon nền mờ phía sau */}
          <div className="absolute opacity-10 right-6 top-10 w-32 pointer-events-none">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
              alt="cart icon"
            />
          </div>

          {/* Tiêu đề */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            🛍️ Welcome Back
          </h2>
          <p className="text-base text-gray-500 mb-6">
            Manage your store, orders, and customers from one place.
          </p>

          {/* Form đăng nhập */}
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Login to your account
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#e0941c]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#e0941c]"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-[#e0941c] text-white py-2 rounded-md hover:bg-[#cc8319] transition-colors"
            >
              Login
            </button>
          </div>

          {/* Social login */}
          <div className="flex items-center justify-center my-6 text-sm text-gray-400">
            <span className="border-t w-1/5"></span>
            <span className="mx-2">Or login with</span>
            <span className="border-t w-1/5"></span>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/448234/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </button>
            
          </div>
          <p className="text-sm text-center mt-4 text-gray-500">
              Don't have an account?{" "}
              <Link
                to={"/auth/register"}
                className="text-[#e0941c] hover:underline"
              >
                Register now
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
