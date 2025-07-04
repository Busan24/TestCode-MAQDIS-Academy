import React from 'react';
import { User, Package, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Hamim</h2>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <Package size={20} />
          <span>Hafalan</span>
        </div>
        <div className="nav-item">
          <User size={20} />
          <span>Profil</span>
        </div>
        <div className="nav-item">
          <Settings size={20} />
          <span>Pengaturan</span>
        </div>
        <div className="nav-item logout">
          <LogOut size={20} />
          <span>Keluar</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;