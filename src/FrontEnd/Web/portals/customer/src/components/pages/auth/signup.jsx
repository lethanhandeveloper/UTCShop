import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import configurationAPI from "../../../services/api/configurationAPI";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    age: "",
    address: {
      provinceName: "",
      districtName: "",
      wardName: "",
      detail: "",
    },
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setForm({
      ...form,
      address: { ...form.address, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  useEffect(() => {
    fetchProvinces();
  }, [])

  const fetchProvinces = async () => {
    let provinces = await configurationAPI.fetchAllProvinces();
    setProvinces(provinces);
  }

  const reloadDistrict = async (id) => {
    let districts = await configurationAPI.fetchDistrictsByProvinceId(id);
    setDistricts(districts);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-12">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Site Logo"
            className="w-10 h-10"
          />
          <h2 className="text-2xl font-bold text-gray-800">UTC Shop</h2>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                name="userName"
                value={form.userName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Address</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Province</label>
                <select
                  name="provinceName"
                  value={form.address.provinceName}
                  onChange={(e) => {
                    handleAddressChange(e);
                    reloadDistrict(e.target.value);
                  }}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                >
                  <option value="">Select Province</option>
                  {
                    provinces.map(province => {
                      return (
                        <option value={province.id}>{province.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">District</label>
                <select
                  name="districtName"
                  value={form.address.districtName}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                >
                  {
                    districts.map(district => {
                      return(
                        <option value={district.id}>{district.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Ward</label>
                <select
                  name="wardName"
                  value={form.address.wardName}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                >
                  <option value="">Select Ward</option>
                  <option value="Ward A">Ward A</option>
                  <option value="Ward B">Ward B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Detail</label>
                <input
                  placeholder="Detail"
                  name="detail"
                  value={form.address.detail}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#e0941c] text-white py-2 rounded-md hover:bg-[#cc8319] transition-colors mt-6"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account?{' '}
            <Link to={"/auth/login"} className="text-[#e0941c] hover:underline">
              Go back to login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
