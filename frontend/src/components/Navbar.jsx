import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0B0F19] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-red-500">KAIROS</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-red-500">Dashboard</a>
        <a href="/shop" className="hover:text-red-500">Shop</a>
        <a href="/campaigns" className="hover:text-red-500">Campaigns</a>
        <a href="/orders" className="hover:text-red-500">Orders</a>
        <a href="/admin" className="hover:text-red-500">Admin</a>
      </div>

      <div>
        <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;