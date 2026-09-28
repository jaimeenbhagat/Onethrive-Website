import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Menu, LogOut, X } from 'lucide-react';
import { adminApi } from './api';
import { adminSections } from './config';

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnauthorized = () => navigate('/admin');
    window.addEventListener('onethrive:admin-unauthorized', handleUnauthorized);
    return () => window.removeEventListener('onethrive:admin-unauthorized', handleUnauthorized);
  }, [navigate]);

  const logout = async () => {
    await adminApi.logout().catch(() => undefined);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#090b0a] text-white lg:flex">
      <button type="button" aria-label="Open admin navigation" onClick={() => setOpen(true)} className="fixed left-4 top-4 z-30 rounded-lg border border-white/10 bg-black/80 p-2 text-[#00FFAB] lg:hidden">
        <Menu size={20} />
      </button>
      {open && <button type="button" aria-label="Close admin navigation" onClick={() => setOpen(false)} className="fixed inset-0 z-20 bg-black/70 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-[#0e1210] p-5 transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-8 flex items-center justify-between">
          <Link to="/admin/dashboard" className="text-xl font-bold tracking-wide"><span className="text-[#00FFAB]">ONE</span>THRIVE CMS</Link>
          <button type="button" aria-label="Close admin navigation" onClick={() => setOpen(false)} className="lg:hidden"><X size={20} /></button>
        </div>
        <nav className="space-y-1">
          {adminSections.map((item) => (
            <NavLink key={item.path} to={`/admin/${item.path}`} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm transition ${isActive ? 'bg-[#00FFAB] font-bold text-black' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" onClick={logout} className="mt-8 flex w-full items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-left text-sm text-white/70 hover:border-red-400/50 hover:text-white">
          <LogOut size={16} /> Log out
        </button>
      </aside>
      <main className="min-w-0 flex-1 px-5 pb-12 pt-20 lg:px-10 lg:pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
