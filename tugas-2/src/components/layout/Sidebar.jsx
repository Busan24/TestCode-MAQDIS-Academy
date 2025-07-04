import React from 'react'
import { Home, Users, FileText, BarChart3, Settings, X } from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        onClick={onClose}
      />
    )}
    
    <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 lg:static lg:shadow-none`}>
      
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-xl font-bold text-gray-900">HAMIM</span>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">MR</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Budy Santoso</p>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {[
          { icon: Home, label: 'Dashboard', active: true },
          { icon: Users, label: 'Users', active: false },
          { icon: FileText, label: 'Reports', active: false },
          { icon: BarChart3, label: 'Analytics', active: false },
          { icon: Settings, label: 'Settings', active: false }
        ].map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              item.active 
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  </>
)

export default Sidebar