import React from 'react'

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">

    <img
      className="w-full h-48 object-cover"
      src="https://via.placeholder.com/300"
      alt="Product Image"
    />
    
    <div className="p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Product Name</h2>
      <p className="text-gray-600 text-sm mb-4">
        This is a short description of the product, highlighting its features or benefits.
      </p>
      <button
        className="w-full bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Buy Now
      </button>
    </div>
  </div>
</div>

  )
}

export default App
