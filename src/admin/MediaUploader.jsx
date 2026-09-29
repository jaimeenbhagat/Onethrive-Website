import { useRef, useState } from 'react';
import { ImagePlus, X, FileImage } from 'lucide-react';
import { adminApi } from './api';

const MediaUploader = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const [state, setState] = useState({ loading: false, error: '' });

  const upload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setState({ loading: true, error: '' });
    try {
      const result = await adminApi.uploadMedia(file);
      onChange(result.data.public_url);
    } catch (error) {
      setState({ loading: false, error: error.message });
      return;
    }
    setState({ loading: false, error: '' });
  };

  const clear = () => onChange('');
  const filename = value ? value.split('/').pop().split('?')[0] : '';

  return <div className="rounded-xl border border-white/10 bg-black/50 p-4 transition hover:border-white/20">
    {value ? (
      <div className="mb-4 overflow-hidden rounded-lg border border-white/5 bg-[#111512]">
        <div className="bg-black/50 p-2 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2 truncate px-2 text-xs text-white/60">
            <FileImage size={14} className="text-[#00FFAB]" />
            <span className="truncate">{filename || 'Image asset'}</span>
          </div>
          <button 
            type="button" 
            onClick={clear}
            className="rounded p-1 text-white/40 hover:bg-white/10 hover:text-white transition"
            title="Remove image"
          >
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center justify-center bg-black/80 p-4">
          <img 
            src={value} 
            alt="Media preview" 
            className="max-h-48 rounded object-contain shadow-2xl" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>
    ) : null}

    <input ref={inputRef} type="file" accept="image/*,video/*" onChange={upload} className="hidden" />
    
    <div className="flex items-center gap-3">
      <button 
        type="button" 
        onClick={() => inputRef.current?.click()} 
        disabled={state.loading} 
        className="inline-flex items-center gap-2 rounded-lg border border-[#00FFAB]/50 bg-[#00FFAB]/10 px-4 py-2.5 text-sm font-medium text-[#00FFAB] transition hover:bg-[#00FFAB]/20 hover:text-[#00FFAB] disabled:opacity-60"
      >
        <ImagePlus size={16} /> 
        {state.loading ? 'Uploading...' : value ? 'Replace image' : 'Upload image'}
      </button>
    </div>
    
    {state.error && <p className="mt-3 rounded text-xs text-red-300">{state.error}</p>}
  </div>;
};

export default MediaUploader;
