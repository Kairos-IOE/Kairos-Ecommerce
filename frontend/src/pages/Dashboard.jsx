import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      <div className="bg-[#0B0F19] text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-2">KAIROS CommerceOS</h1>
        <p className="text-gray-300 mb-6">
          Advanced E-Commerce & Campaign Platform
        </p>

        <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700">
          Explore Shop
        </button>
      </div>

      {/* CREATE CONNECT ACTIVATE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-red-500">Create</h2>
          <p>Design products & campaigns</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-red-500">Connect</h2>
          <p>Engage with your audience</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-red-500">Activate</h2>
          <p>Launch campaigns & track results</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;