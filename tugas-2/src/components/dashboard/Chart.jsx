import React from 'react'

const Chart = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
      <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
        <option>7 Days</option>
        <option>30 Days</option>
        <option>90 Days</option>
      </select>
    </div>
    
    <div className="h-64 flex items-end justify-between space-x-2">
      {[40, 65, 55, 80, 45, 90, 75, 60, 85, 70, 95, 65].map((height, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div 
            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
            style={{ height: `${height}%` }}
          />
          <span className="text-xs text-gray-500 mt-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default Chart