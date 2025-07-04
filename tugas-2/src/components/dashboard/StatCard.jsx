import React from 'react'
import { TrendingUp, Users, FileText, DollarSign } from 'lucide-react'

const StatCard = ({ icon: Icon, title, value, change, changeType }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <p className={`text-sm flex items-center mt-2 ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${
        Icon === Users ? 'bg-blue-100 text-blue-600' :
        Icon === FileText ? 'bg-orange-100 text-orange-600' :
        Icon === DollarSign ? 'bg-green-100 text-green-600' :
        'bg-purple-100 text-purple-600'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
)

export default StatCard