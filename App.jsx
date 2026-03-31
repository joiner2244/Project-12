import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      {/* Big Number */}
      <h1 className="text-8xl font-bold mb-10">{count}</h1>

      {/* Buttons */}
      <div className="flex gap-5">
        
        {/* Count Button */}
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-xl"
        >
          Count
        </button>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-xl"
        >
          Reset
        </button>

      </div>
    </div>
  );
}