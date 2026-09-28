import { useCallback, useEffect, useState } from 'react';
import { Plus, Save, Trash2 } from 'lucide-react';
import { adminApi } from './api';
import { starterContent } from './config';
import CmsFields from './CmsFields';
import MediaLibrary from './MediaLibrary';

const pretty = (value) => value.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

const AdminContentPage = ({ type, title }) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [slug, setSlug] = useState('');
  const [json, setJson] = useState('{}');
  const [enabled, setEnabled] = useState(true);
  const [order, setOrder] = useState(0);
  const [state, setState] = useState({ loading: true, saving: false, error: '', notice: '' });

  const load = useCallback(async () => {
    setState((current) => ({ ...current, loading: true, error: '' }));
    try {
      const result = await adminApi.list(type);
      setItems(result.data);
    } catch (error) {
      setState((current) => ({ ...current, error: error.message }));
    } finally {
      setState((current) => ({ ...current, loading: false }));
    }
  }, [type]);

  useEffect(() => { load(); }, [load]);

  const startNew = () => {
    setSelected(null);
    setSlug('');
    setJson(JSON.stringify(starterContent[type] || {}, null, 2));
    setEnabled(true);
    setOrder(items.length);
    setState((current) => ({ ...current, notice: '' }));
  };

  const select = (item) => {
    setSelected(item);
    setSlug(item.slug);
    setJson(JSON.stringify(item.data, null, 2));
    setEnabled(item.enabled);
    setOrder(item.order);
    setState((current) => ({ ...current, notice: '' }));
  };

  const save = async (event) => {
    event.preventDefault();
    setState((current) => ({ ...current, saving: true, error: '', notice: '' }));
    try {
      const data = JSON.parse(json);
      const payload = { slug: slug.trim(), data, enabled, order: Number(order) };
      if (!payload.slug) throw new Error('A stable key is required');
      if (selected) await adminApi.update(type, selected.id, payload);
      else await adminApi.create(type, payload);
      await load();
      setState((current) => ({ ...current, notice: 'Changes saved successfully' }));
    } catch (error) {
      setState((current) => ({ ...current, error: error instanceof SyntaxError ? 'Content must be valid JSON' : error.message }));
    } finally {
      setState((current) => ({ ...current, saving: false }));
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete ${item.slug}? This cannot be undone.`)) return;
    try {
      await adminApi.remove(type, item.id);
      if (selected?.id === item.id) startNew();
      await load();
      setState((current) => ({ ...current, notice: 'Content deleted' }));
    } catch (error) {
      setState((current) => ({ ...current, error: error.message }));
    }
  };

  return <section>
    <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm uppercase tracking-[0.2em] text-[#00FFAB]">CMS editor</p><h1 className="mt-2 text-3xl font-bold">{title}</h1><p className="mt-2 text-white/60">Create, edit, reorder, enable, or remove {pretty(type).toLowerCase()} content.</p></div><button type="button" onClick={startNew} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00FFAB] px-4 py-2.5 font-bold text-black"><Plus size={17} /> New item</button></header>
    {state.notice && <p role="status" className="mb-5 rounded-lg border border-[#00FFAB]/30 bg-[#00FFAB]/10 p-3 text-[#9fffe0]">{state.notice}</p>}
    {state.error && <p role="alert" className="mb-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-red-200">{state.error}</p>}
    <div className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="space-y-2">{state.loading ? <p className="text-white/50">Loading content...</p> : items.length === 0 ? <p className="rounded-xl border border-dashed border-white/15 p-6 text-white/50">No CMS records yet. Existing hardcoded content remains the public fallback.</p> : items.map((item) => <div key={item.id} className={`flex items-center justify-between gap-3 rounded-xl border p-4 ${selected?.id === item.id ? 'border-[#00FFAB]/60 bg-[#00FFAB]/5' : 'border-white/10 bg-[#111512]'}`}><button type="button" onClick={() => select(item)} className="min-w-0 flex-1 text-left"><p className="truncate font-semibold">{item.slug}</p><p className="mt-1 text-xs text-white/50">Order {item.order} · {item.enabled ? 'Published' : 'Disabled'}</p></button><button type="button" aria-label={`Delete ${item.slug}`} onClick={() => remove(item)} className="rounded-lg p-2 text-red-300 hover:bg-red-400/10"><Trash2 size={17} /></button></div>)}</div>
      <form onSubmit={save} className="rounded-xl border border-white/10 bg-[#111512] p-5"><h2 className="mb-5 text-lg font-semibold">{selected ? `Edit ${selected.slug}` : 'New content item'}</h2><label className="mb-4 block text-sm text-white/70">Stable key<input value={slug} onChange={(event) => setSlug(event.target.value)} required placeholder="home.hero" className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-[#00FFAB]" /></label><div className="mb-4 grid gap-4 sm:grid-cols-2"><label className="text-sm text-white/70">Display order<input type="number" value={order} onChange={(event) => setOrder(event.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-[#00FFAB]" /></label><label className="flex items-end gap-2 pb-3 text-sm text-white/70"><input type="checkbox" checked={enabled} onChange={(event) => setEnabled(event.target.checked)} className="h-4 w-4 accent-[#00FFAB]" /> Published</label></div><CmsFields type={type} value={json} onChange={setJson} /><label className="block text-sm text-white/70">Advanced content JSON<textarea value={json} onChange={(event) => setJson(event.target.value)} rows={12} spellCheck="false" className="mt-2 w-full rounded-lg border border-white/15 bg-black p-3 font-mono text-xs text-[#d5ffeF] outline-none focus:border-[#00FFAB]" /></label><button type="submit" disabled={state.saving} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#00FFAB] px-4 py-2.5 font-bold text-black disabled:opacity-60"><Save size={17} /> {state.saving ? 'Saving...' : 'Save changes'}</button></form>
    </div>
    <MediaLibrary />
  </section>;
};

export default AdminContentPage;
