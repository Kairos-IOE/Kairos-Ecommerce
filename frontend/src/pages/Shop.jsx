import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const products = [
  {
    id: 1,
    name: "Kairos Branded T-Shirt",
    price: "R200",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 2,
    name: "Election Campaign Kit",
    price: "R300",
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26"
  },
  {
    id: 3,
    name: "Banner Stand",
    price: "R500",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },
  {
    id: 4,
    name: "Business Cards",
    price: "R120",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
  }
];

export default function Shop() {
  return (
    <div className="bg-kairosLight min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex gap-8">

          {/* Sidebar */}
          <Sidebar />

          {/* Products */}
          <div className="flex-1">

            <h2 className="text-[18px] font-semibold mb-6">
              Featured Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}