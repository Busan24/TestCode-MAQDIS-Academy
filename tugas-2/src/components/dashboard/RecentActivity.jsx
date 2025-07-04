import React from 'react'

const RecentActivity = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
    <div className="space-y-4">
      {[
        { user: 'John Doe', action: 'registered', time: '2 minutes ago', avatar: 'JD' },
        { user: 'Sarah Wilson', action: 'updated profile', time: '5 minutes ago', avatar: 'SW' },
        { user: 'Mike Johnson', action: 'made a purchase', time: '10 minutes ago', avatar: 'MJ' },
        { user: 'Lisa Anderson', action: 'left a review', time: '15 minutes ago', avatar: 'LA' },
        { user: 'David Brown', action: 'subscribed', time: '20 minutes ago', avatar: 'DB' }
      ].map((activity, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {activity.avatar}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{activity.user}</p>
            <p className="text-xs text-gray-500">{activity.action}</p>
          </div>
          <span className="text-xs text-gray-400">{activity.time}</span>
        </div>
      ))}
    </div>
  </div>
)

export default RecentActivity