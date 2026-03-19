import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Election T-Shirt Set",
    price: 1000,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    id: 2,
    name: "AI Campaign Posters",
    price: 1000,
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
  },
  {
    id: 3,
    name: "Vinyl Banners",
    price: 1000,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    id: 4,
    name: "Media Package",
    price: 1000,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export default function CampaignBuilder() {
  const [budget, setBudget] = useState(50000);
  const [selected, setSelected] = useState({});

  const addItem = (product) => {
    setSelected((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const total = Object.keys(selected).reduce((acc, id) => {
    const product = products.find((p) => p.id == id);
    return acc + product.price * selected[id];
  }, 0);

  const remaining = budget - total;
  const percent = Math.min((total / budget) * 100, 100);

  return (
    <div className="bg-kairosLight min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-6">

          {/* HEADER */}
          <div>
            <h1 className="text-[20px] font-semibold">Create Campaign</h1>
            <p className="text-xs text-gray-500 mt-1">
              Home / Campaigns / Create
            </p>
          </div>

          {/* DETAILS CARD */}
          <div className="bg-white border border-kairosBorder rounded-xl shadow-kairos p-5">

            <h3 className="text-sm font-medium mb-4">Campaign Details</h3>

            <input
              placeholder="Election 2024"
              className="w-full border border-kairosBorder rounded-md px-3 py-2 text-sm mb-3"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="R 50,000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="border border-kairosBorder rounded-md px-3 py-2 text-sm"
              />

              <input
                type="date"
                className="border border-kairosBorder rounded-md px-3 py-2 text-sm"
              />
            </div>

          </div>

          {/* PRODUCTS */}
          <div className="bg-white border border-kairosBorder rounded-xl shadow-kairos p-5">

            <h3 className="text-sm font-medium mb-4">
              Add Items to Your Campaign
            </h3>

            <div className="space-y-3">

              {products.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between border border-kairosBorder rounded-lg p-3"
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      className="w-14 h-14 object-cover rounded-md"
                    />

                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-gray-400">
                        R {p.price}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <button
                    onClick={() => addItem(p)}
                    className="bg-black text-white text-xs px-4 py-1.5 rounded-md"
                  >
                    Add
                  </button>

                </div>
              ))}

            </div>
          </div>

          {/* REVIEW */}
          <div className="bg-white border border-kairosBorder rounded-xl shadow-kairos p-5">

            <h3 className="text-sm font-medium mb-4">
              Review and Launch
            </h3>

            {Object.keys(selected).map((id) => {
              const product = products.find((p) => p.id == id);

              return (
                <div key={id} className="flex justify-between text-sm mb-2">
                  <span>{product.name} x {selected[id]}</span>
                  <span>R {product.price * selected[id]}</span>
                </div>
              );
            })}

            <div className="flex justify-between border-t mt-3 pt-3 font-semibold text-sm">
              <span>Total</span>
              <span>R {total}</span>
            </div>

            <button className="mt-4 w-full bg-kairosRed text-white py-2 rounded-md text-sm font-medium">
              Launch Campaign
            </button>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* BUDGET CARD */}
          <div className="bg-white border border-kairosBorder rounded-xl shadow-kairos p-5">

            <h3 className="text-sm font-medium mb-4">Budget</h3>

            <div className="text-xs space-y-2">

              <div className="flex justify-between">
                <span>Budget</span>
                <span>R {budget}</span>
              </div>

              <div className="flex justify-between text-red-500">
                <span>Spent</span>
                <span>R {total}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Remaining</span>
                <span>R {remaining}</span>
              </div>

            </div>

            {/* BAR */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-kairosRed h-2 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

          </div>

          {/* METRICS CARD */}
          <div className="bg-white border border-kairosBorder rounded-xl shadow-kairos p-5">

            <h3 className="text-sm font-medium mb-4">Metrics</h3>

            <div className="text-xs space-y-2">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{Object.keys(selected).length}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Reach</span>
                <span>~12,000</span>
              </div>

              <div className="flex justify-between">
                <span>Conversion</span>
                <span>8.2%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}