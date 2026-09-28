import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';
import { adminApi } from './api';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await adminApi.login(password);
      navigate('/admin/dashboard');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b0a] px-5 text-white">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111512] p-8 shadow-2xl">
        <div className="mb-8 flex items-center gap-3"><div className="rounded-xl bg-[#00FFAB]/10 p-3 text-[#00FFAB]"><LockKeyhole size={22} /></div><div><p className="text-xs uppercase tracking-[0.2em] text-[#00FFAB]">OneThrive</p><h1 className="text-2xl font-bold">Admin CMS</h1></div></div>
        <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-white/80">Password</label>
        <input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required className="mb-4 w-full rounded-lg border border-white/15 bg-black px-4 py-3 outline-none focus:border-[#00FFAB]" />
        {error && <p role="alert" className="mb-4 rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-200">{error}</p>}
        <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#00FFAB] px-4 py-3 font-bold text-black transition hover:bg-[#7dffd0] disabled:cursor-wait disabled:opacity-60">{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </main>
  );
};

export default AdminLogin;
