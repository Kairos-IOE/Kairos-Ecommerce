import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import CampaignBuilder from "./pages/CampaignBuilder";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/campaigns" element={<CampaignBuilder />} />
        <Route path="/orders" element={<div className="p-8">Orders Page</div>} />
        <Route path="/admin" element={<div className="p-8">Admin Page</div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;