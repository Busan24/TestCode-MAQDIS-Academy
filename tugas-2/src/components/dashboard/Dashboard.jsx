import React, { useState } from 'react'
import { Users, FileText, DollarSign, Activity } from 'lucide-react'
import { Header, Sidebar, StatCard, Chart, RecentActivity } from '../index'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              icon={Users} 
              title="Total Users" 
              value="50,088" 
              change="+12.5%" 
              changeType="increase"
            />
            <StatCard 
              icon={FileText} 
              title="Active Codes" 
              value="63,108" 
              change="+8.2%" 
              changeType="increase"
            />
            <StatCard 
              icon={DollarSign} 
              title="Revenue 2025" 
              value="Rp. 11,889,000" 
              change="+15.3%" 
              changeType="increase"
            />
            <StatCard 
              icon={Activity} 
              title="Active Sessions" 
              value="1,234" 
              change="-2.1%" 
              changeType="decrease"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Chart />
            </div>
            <div className="lg:col-span-1">
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard