'use client';

export function MapView() {
  return (
    <div className="relative h-48 bg-gray-300 rounded-lg mb-4 overflow-hidden">
      {/* Mock map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
        {/* Mock map elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-blue-600 rounded-full"></div>
        
        {/* Mock streets */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-60"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-white opacity-60"></div>
        <div className="absolute top-0 bottom-0 right-1/4 w-0.5 bg-white opacity-60"></div>
      </div>
      
      {/* Add Friend button */}
      <button className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200">
        + Add a Friend
      </button>
      
      {/* Menu button */}
      <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="w-4 h-4 flex flex-col justify-between">
          <div className="h-0.5 bg-gray-600"></div>
          <div className="h-0.5 bg-gray-600"></div>
          <div className="h-0.5 bg-gray-600"></div>
        </div>
      </button>
    </div>
  );
}
