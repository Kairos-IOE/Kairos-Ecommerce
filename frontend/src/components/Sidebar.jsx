export default function Sidebar() {
  return (
    <div className="w-60 bg-white rounded-xl shadow-kairos p-5">

      <h2 className="text-[12px] font-semibold text-gray-500 mb-4 uppercase tracking-wide">
        All Categories
      </h2>

      <ul className="space-y-2 text-[13px]">
        <li className="bg-red-50 text-kairosRed font-semibold px-3 py-2 rounded-md">
          All Products
        </li>
        <li className="hover:text-kairosRed cursor-pointer">Merchandise</li>
        <li className="hover:text-kairosRed cursor-pointer">Print Media</li>
        <li className="hover:text-kairosRed cursor-pointer">Campaign Kits</li>
        <li className="hover:text-kairosRed cursor-pointer">Digital Services</li>
      </ul>

    </div>
  );
}