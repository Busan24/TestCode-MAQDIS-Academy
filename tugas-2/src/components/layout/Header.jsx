import React from 'react'
import { Bell, Search, Menu } from 'lucide-react'

const Header = ({ onMenuClick }) => (
  <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">MR</span>
          </div>
          <span className="hidden md:block font-medium text-gray-900">Budy Santoso</span>
        </div>
      </div>
    </div>
  </header>
)

export default Header