import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-kairos hover:shadow-kairosHover transition duration-300 p-4 group">

      {/* CLICKABLE AREA */}
      <Link to={`/product/${product.id}`}>

        {/* IMAGE */}
        <div className="rounded-lg overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* TEXT */}
        <h3 className="text-[13px] font-semibold leading-tight">
          {product.name}
        </h3>

        <p className="text-[11px] text-gray-400 mt-1">Available</p>

      </Link>

      {/* FOOTER (NOT INSIDE LINK) */}
      <div className="flex items-center justify-between mt-3">

        <span className="text-[13px] font-bold">{product.price}</span>

        <button
          className="bg-kairosRed text-white text-[10px] px-4 py-1.5 rounded-md font-medium tracking-wide hover:bg-red-700 transition"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to cart:", product.name);
          }}
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
}