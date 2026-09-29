import { useCallback, useEffect, useState } from 'react';
import { Plus, Save, Trash2, X, ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { adminApi } from './api';
import { starterContent } from './config';
import CmsFields from './CmsFields';
import MediaLibrary from './MediaLibrary';

const pretty = (value) => value.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

const slugToName = (slug, type, data) => {
  if (type === 'sections') {
    if (slug === 'home.hero') return { title: 'Home — Hero Section', desc: 'Edit the main hero heading, description, image and CTA shown at the top of the homepage.' };
    if (slug === 'home.about') return { title: 'Home — About Section', desc: 'Homepage about us summary and background image.' };
    if (slug === 'home.benefits') return { title: 'Home — Benefits Section', desc: 'Key benefits showcased on the homepage.' };
    if (slug === 'home.faqs') return { title: 'Home — FAQs', desc: 'Frequently asked questions on the homepage.' };
    if (slug === 'about.hero') return { title: 'About — Hero Section', desc: 'Main hero heading and image for the About page.' };
    if (slug === 'about.mission-vision') return { title: 'About — Mission & Vision', desc: 'Mission and vision statements.' };
    if (slug === 'services.page') return { title: 'Services — Main Section', desc: 'Main header content for the services page.' };
    if (slug === 'contact.page') return { title: 'Contact — Main Section', desc: 'Main contact information and header.' };
  }
  
  if (type === 'services') return { title: data?.title || slug, desc: data?.category || 'Service offering' };
  if (type === 'blogs') return { title: data?.title || slug, desc: data?.author ? `By ${data.author}` : 'Blog post' };
  if (type === 'team') return { title: data?.name || slug, desc: data?.role || 'Team member' };
  if (type === 'testimonials') return { title: data?.name || slug, desc: data?.company || 'Client testimonial' };
  if (type === 'client-logos') return { title: data?.name || slug, desc: data?.description || 'Client logo' };
  if (type === 'carousels') return { title: data?.title || slug, desc: 'Interactive carousel content' };
  if (type === 'service-categories') return { title: data?.name || slug, desc: 'Category configuration' };
  if (type === 'navigation') return { title: data?.label || slug, desc: 'Menu item link' };
  if (type === 'footer') return { title: data?.label || slug, desc: 'Footer link/text' };
  
  return { title: slug, desc: 'Content record' };
};

const AdminContentPage = ({ type, title }) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [slug, setSlug] = useState('');
  const [json, setJson] = useState('{}');
  const [enabled, setEnabled] = useState(true);
  const [order, setOrder] = useState(0);
  const [state, setState] = useState({ loading: true, saving: false, error: '', notice: '' });
  const [advancedOpen, setAdvancedOpen] = useState(false);

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

  useEffect(() => {
    if (state.notice) {
      const timer = setTimeout(() => setState((current) => ({ ...current, notice: '' })), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.notice]);

  const startNew = () => {
    setSelected(null);
    setSlug('');
    setJson(JSON.stringify(starterContent[type] || {}, null, 2));
    setEnabled(true);
    setOrder(items.length);
    setState((current) => ({ ...current, notice: '' }));
    setAdvancedOpen(false);
  };

  const select = (item) => {
    setSelected(item);
    setSlug(item.slug);
    setJson(JSON.stringify(item.data, null, 2));
    setEnabled(item.enabled);
    setOrder(item.order);
    setState((current) => ({ ...current, notice: '' }));
    setAdvancedOpen(false);
  };

  const save = async (event) => {
    event.preventDefault();
    setState((current) => ({ ...current, saving: true, error: '', notice: '' }));
    try {
      const data = JSON.parse(json);
      const payload = { slug: slug.trim(), data, enabled, order: Number(order) };
      if (!payload.slug) throw new Error('A valid identifier is required');
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
    if (!window.confirm(`Delete this content? This cannot be undone.`)) return;
    try {
      await adminApi.remove(type, item.id);
      if (selected?.id === item.id) startNew();
      await load();
      setState((current) => ({ ...current, notice: 'Content deleted' }));
    } catch (error) {
      setState((current) => ({ ...current, error: error.message }));
    }
  };

  const getFormContext = () => {
    if (!selected) return { title: `New ${pretty(type).toLowerCase()}`, desc: `Create a new entry for ${pretty(type)}.` };
    let parsedData = {};
    try { parsedData = JSON.parse(json); } catch {}
    return slugToName(selected.slug, type, parsedData);
  };

  const { title: formTitle, desc: formDesc } = getFormContext();

  return <section>
    <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#00FFAB]">CMS Editor</p>
        <h1 className="mt-2 text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-white/60">Manage your {pretty(type).toLowerCase()} content below.</p>
      </div>
      <button type="button" onClick={startNew} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00FFAB] px-4 py-2.5 font-bold text-black transition hover:bg-[#00e69a]">
        <Plus size={17} /> New {pretty(type).toLowerCase()}
      </button>
    </header>

    {/* Toast notification */}
    {state.notice && (
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-xl border border-[#00FFAB]/40 bg-[#111512] px-4 py-3 shadow-2xl shadow-black">
        <CheckCircle2 size={20} className="text-[#00FFAB]" />
        <p className="font-semibold text-white">{state.notice}</p>
        <button type="button" onClick={() => setState(c => ({...c, notice: ''}))} className="ml-4 text-white/50 hover:text-white"><X size={16} /></button>
      </div>
    )}

    {state.error && <p role="alert" className="mb-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-red-200">{state.error}</p>}
    
    <div className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="space-y-3">
        {state.loading ? (
          <p className="text-white/50">Loading content...</p>
        ) : items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-white/15 p-6 text-center text-white/50">
            No CMS records found. Using default content.
          </p>
        ) : (
          items.map((item) => {
            const { title: displayTitle, desc: displayDesc } = slugToName(item.slug, type, item.data);
            return (
              <div 
                key={item.id} 
                className={`group flex items-center justify-between gap-3 rounded-xl border p-4 transition ${selected?.id === item.id ? 'border-[#00FFAB]/60 bg-[#00FFAB]/10 shadow-[0_0_15px_rgba(0,255,171,0.1)]' : 'border-white/10 bg-[#111512] hover:border-white/20'}`}
              >
                <button type="button" onClick={() => select(item)} className="min-w-0 flex-1 text-left outline-none">
                  <p className={`truncate font-semibold ${selected?.id === item.id ? 'text-[#00FFAB]' : 'text-white'}`}>{displayTitle}</p>
                  <p className="mt-1 truncate text-xs text-white/50">{displayDesc}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${item.enabled ? 'bg-[#00FFAB]' : 'bg-white/20'}`} />
                    <span className="text-[10px] uppercase tracking-wider text-white/40">{item.enabled ? 'Published' : 'Hidden'} · Order {item.order}</span>
                  </div>
                </button>
                <button 
                  type="button" 
                  aria-label="Delete item" 
                  onClick={() => remove(item)} 
                  className="rounded-lg p-2 text-white/30 transition hover:bg-red-500/20 hover:text-red-400"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            );
          })
        )}
      </div>

      <form onSubmit={save} className="rounded-xl border border-white/10 bg-[#111512] p-6 shadow-xl">
        <div className="mb-6 border-b border-white/10 pb-5">
          <h2 className="text-xl font-bold text-white">{formTitle}</h2>
          <p className="mt-1 text-sm text-white/50">{formDesc}</p>
        </div>

        {(!selected || type !== 'sections') && (
          <label className="mb-5 block text-sm font-medium text-white/80">
            System Identifier
            <input 
              value={slug} 
              onChange={(event) => setSlug(event.target.value)} 
              required 
              placeholder={type === 'services' ? 'chain-reaction' : 'unique-identifier'} 
              className="mt-2 w-full rounded-lg border border-white/15 bg-black/50 px-4 py-2.5 text-white outline-none transition focus:border-[#00FFAB] focus:bg-black focus:ring-1 focus:ring-[#00FFAB]/50" 
            />
            <span className="mt-1 block text-xs text-white/40">Used internally to identify this content.</span>
          </label>
        )}

        <div className="mb-6 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-white/80">
            Display order
            <input 
              type="number" 
              value={order} 
              onChange={(event) => setOrder(event.target.value)} 
              className="mt-2 w-full rounded-lg border border-white/15 bg-black/50 px-4 py-2.5 text-white outline-none transition focus:border-[#00FFAB] focus:bg-black" 
            />
          </label>
          <label className="flex items-center gap-3 pt-6 text-sm font-medium text-white/80 cursor-pointer">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                checked={enabled} 
                onChange={(event) => setEnabled(event.target.checked)} 
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-black/50 transition checked:border-[#00FFAB] checked:bg-[#00FFAB]" 
              />
              <CheckCircle2 size={14} className="pointer-events-none absolute left-[3px] top-[3px] hidden text-black peer-checked:block" />
            </div>
            Make this content visible
          </label>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#00FFAB]/70">Content Fields</h3>
          <CmsFields type={type} value={json} onChange={setJson} />
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <button 
            type="button" 
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="flex items-center gap-2 text-sm font-medium text-white/50 transition hover:text-white"
          >
            {advancedOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            Advanced content JSON
          </button>
          
          {advancedOpen && (
            <div className="mt-4">
              <label className="block text-xs text-white/40 mb-2">Direct JSON Editor (For developers only)</label>
              <textarea 
                value={json} 
                onChange={(event) => setJson(event.target.value)} 
                rows={12} 
                spellCheck="false" 
                className="w-full rounded-lg border border-white/15 bg-black/80 p-4 font-mono text-xs text-[#00FFAB]/80 outline-none transition focus:border-[#00FFAB] focus:ring-1 focus:ring-[#00FFAB]/50" 
              />
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={state.saving} 
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#00FFAB] px-5 py-3 font-bold text-black shadow-lg shadow-[#00FFAB]/20 transition hover:bg-[#00e69a] disabled:opacity-60"
        >
          <Save size={18} /> {state.saving ? 'Saving changes...' : 'Save changes'}
        </button>
      </form>
    </div>
    <MediaLibrary />
  </section>;
};

export default AdminContentPage;
