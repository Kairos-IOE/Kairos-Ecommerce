import { useState } from "react";
import ProductCard from "../components/ProductCard";

const product = {
  id: 1,
  name: "Kairos Branded T-Shirt",
  price: "R229.00",
  image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  description:
    "Premium Kairos branded apparel designed for campaign visibility and professional presentation.",
};

const relatedProducts = [
  {
    id: 2,
    name: "Campaign Poster Pack",
    price: "R300",
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
  },
  {
    id: 3,
    name: "Banner Stand",
    price: "R500",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    id: 4,
    name: "Business Cards",
    price: "R120",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
  },
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-kairosLight min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div className="bg-white rounded-xl shadow-kairos p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="bg-white rounded-xl shadow-kairos p-6">

            <h1 className="text-[20px] font-semibold mb-2">
              {product.name}
            </h1>

            <p className="text-gray-500 text-sm mb-6">
              {product.price}
            </p>

            {/* SIZE */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Select Size</p>

              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-md border text-sm ${
                      selectedSize === size
                        ? "bg-kairosRed text-white border-kairosRed"
                        : "hover:border-kairosRed"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Quantity</p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border rounded-md"
                >
                  -
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-kairosRed text-white px-6 py-2 rounded-md w-full font-medium hover:bg-red-700 transition">
              ADD TO CART
            </button>

          </div>

        </div>

        {/* TABS */}
        <div className="bg-white rounded-xl shadow-kairos p-6 mt-8">

          <div className="flex gap-6 border-b mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-2 text-sm ${
                activeTab === "description"
                  ? "border-b-2 border-kairosRed font-medium"
                  : "text-gray-500"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("details")}
              className={`pb-2 text-sm ${
                activeTab === "details"
                  ? "border-b-2 border-kairosRed font-medium"
                  : "text-gray-500"
              }`}
            >
              Details
            </button>
          </div>

          {activeTab === "description" && (
            <p className="text-sm text-gray-600">{product.description}</p>
          )}

          {activeTab === "details" && (
            <p className="text-sm text-gray-600">
              Material: Cotton<br />
              Fit: Regular<br />
              Branding: Kairos Official
            </p>
          )}

        </div>

        {/* RELATED */}
        <div className="mt-10">
          <h2 className="text-[16px] font-semibold mb-4">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}