import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from './api';
import { adminSections } from './config';

const AdminDashboard = () => {
  const [counts, setCounts] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      const types = [...new Set(adminSections.filter((item) => item.type).map((item) => item.type))];
      const entries = await Promise.all(types.map(async (type) => {
        try {
          const result = await adminApi.list(type);
          return [type, result.data.length];
        } catch {
          return [type, 0];
        }
      }));
      setCounts(Object.fromEntries(entries));
    };
    load().catch((loadError) => setError(loadError.message));
  }, []);

  return <section>
    <header className="mb-8"><p className="text-sm uppercase tracking-[0.2em] text-[#00FFAB]">Content control</p><h1 className="mt-2 text-3xl font-bold md:text-4xl">Dashboard</h1><p className="mt-2 text-white/60">Manage the content that powers the existing OneThrive website.</p></header>
    {error && <p role="alert" className="mb-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-red-200">{error}</p>}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {adminSections.filter((item) => item.type).slice(0, 8).map((item) => <Link key={item.path} to={`/admin/${item.path}`} className="rounded-xl border border-white/10 bg-[#111512] p-5 transition hover:border-[#00FFAB]/50"><p className="text-sm text-white/60">{item.label}</p><p className="mt-3 text-3xl font-bold text-[#00FFAB]">{counts[item.type] ?? '...'}</p><p className="mt-3 text-xs text-white/40">Open editor</p></Link>)}
    </div>
  </section>;
};

export default AdminDashboard;
