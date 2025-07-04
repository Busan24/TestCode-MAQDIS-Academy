import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      <div className="lg:ml-64 transition-all duration-300">
        <Header onSidebarToggle={toggleSidebar} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;