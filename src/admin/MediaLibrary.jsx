import { useCallback, useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { adminApi } from './api';

const MediaLibrary = () => {
  const [media, setMedia] = useState([]);
  const [error, setError] = useState('');

  const load = useCallback(() => adminApi.listMedia().then((result) => setMedia(result.data)).catch((requestError) => setError(requestError.message)), []);
  useEffect(() => { load(); }, [load]);

  const remove = async (item) => {
    if (!window.confirm(`Permanently delete ${item.original_name}? This cannot be undone.`)) return;
    try {
      await adminApi.removeMedia(item.id);
      await load();
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return <section className="mt-8 rounded-xl border border-white/10 bg-[#111512] p-5">
    <h2 className="text-lg font-semibold">Media library</h2>
    <p className="mt-1 text-sm text-white/50">Replacing a field does not delete its previous asset. Delete assets here only when you are certain they are unused.</p>
    {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {media.map((item) => <div key={item.id} className="rounded-lg border border-white/10 bg-black p-3">
        {item.mime_type.startsWith('video/') ? <video src={item.public_url} controls className="mb-3 h-28 w-full rounded object-contain" /> : <img src={item.public_url} alt={item.original_name} className="mb-3 h-28 w-full rounded object-contain" />}
        <p className="truncate text-xs text-white/70">{item.original_name}</p>
        <button type="button" onClick={() => remove(item)} className="mt-2 inline-flex items-center gap-1 text-xs text-red-300 hover:text-red-200"><Trash2 size={14} /> Delete asset</button>
      </div>)}
    </div>
  </section>;
};

export default MediaLibrary;