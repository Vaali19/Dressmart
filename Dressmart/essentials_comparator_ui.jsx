import React, { useState } from 'react';

export default function HomePage() {
  const [view, setView] = useState('grid');
  const [sort, setSort] = useState('priceAsc');

  const products = [
    {
      id: 1,
      name: 'Cotton T-Shirt',
      price: 399,
      rating: 4.2,
      delivery: '2-3 days',
      platform: 'Amazon',
      image: 'https://via.placeholder.com/150',
      link: 'https://amazon.in/product1'
    },
    {
      id: 2,
      name: 'Nightwear Set',
      price: 499,
      rating: 4.5,
      delivery: '3-5 days',
      platform: 'Flipkart',
      image: 'https://via.placeholder.com/150',
      link: 'https://flipkart.com/product2'
    },
    {
      id: 3,
      name: 'Face Wash',
      price: 199,
      rating: 4.0,
      delivery: '1-2 days',
      platform: 'Nykaa',
      image: 'https://via.placeholder.com/150',
      link: 'https://nykaa.com/product3'
    }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'priceAsc') return a.price - b.price;
    if (sort === 'priceDesc') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'delivery') return a.delivery.localeCompare(b.delivery);
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-10 space-y-8">
      {/* Logo */}
      <h1 className="text-4xl font-extrabold tracking-tight">DressSmart</h1>

      {/* Caption */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Money isn’t free for anyone.</h2>
        <p className="text-sm text-gray-500">Spend it wisely – compare before you buy</p>
      </div>

      {/* Search Bar */}
      <div className="flex w-full max-w-xl space-x-2">
        <input
          type="text"
          placeholder="Search essentials, brands..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700">Search</button>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Upload a photo to compare:</label>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
        <span className="px-4 py-2 bg-gray-100 rounded-full">🧼 Innerwear</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">👚 Nightwear</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">🧴 Personal Care</span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <button onClick={() => setView('grid')} className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">Grid 🔳</button>
        <button onClick={() => setView('table')} className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">Table 📊</button>
        <select
          className="px-4 py-2 rounded-xl border border-gray-300"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option value="priceAsc">Sort by: Price Low → High</option>
          <option value="priceDesc">Price High → Low</option>
          <option value="rating">Rating</option>
          <option value="delivery">Delivery Time</option>
        </select>
      </div>

      {/* Product Results */}
      <div className="w-full max-w-5xl pt-8">
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <a href={product.link} key={product.id} className="border p-4 rounded-xl hover:shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.platform}</p>
                <p className="text-blue-600 font-bold">₹{product.price}</p>
                <p className="text-sm text-yellow-600">⭐ {product.rating} • {product.delivery}</p>
              </a>
            ))}
          </div>
        ) : (
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Product</th>
                <th className="p-2">Platform</th>
                <th className="p-2">Price</th>
                <th className="p-2">Rating</th>
                <th className="p-2">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">
                    <a href={product.link} className="text-blue-600 hover:underline">{product.name}</a>
                  </td>
                  <td className="p-2">{product.platform}</td>
                  <td className="p-2">₹{product.price}</td>
                  <td className="p-2">⭐ {product.rating}</td>
                  <td className="p-2">{product.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
