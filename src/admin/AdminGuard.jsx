import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { adminApi } from './api';

const AdminGuard = () => {
  const [state, setState] = useState('checking');

  useEffect(() => {
    adminApi.me().then(() => setState('authenticated')).catch(() => setState('unauthenticated'));
  }, []);

  if (state === 'checking') return <main className="flex min-h-screen items-center justify-center bg-[#090b0a] text-[#00FFAB]">Checking session...</main>;
  if (state === 'unauthenticated') return <Navigate to="/admin" replace />;
  return <Outlet />;
};

export default AdminGuard;
