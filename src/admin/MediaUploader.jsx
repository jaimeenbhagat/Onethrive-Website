import { useRef, useState } from 'react';
import { ImagePlus } from 'lucide-react';
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

  return <div className="rounded-lg border border-white/10 bg-black p-3">
    {value && <img src={value} alt="Selected media preview" className="mb-3 max-h-40 w-full rounded object-contain" />}
    <input ref={inputRef} type="file" accept="image/*,video/*" onChange={upload} className="hidden" />
    <button type="button" onClick={() => inputRef.current?.click()} disabled={state.loading} className="inline-flex items-center gap-2 rounded-lg border border-[#00FFAB]/50 px-3 py-2 text-sm text-[#00FFAB] hover:bg-[#00FFAB]/10 disabled:opacity-60"><ImagePlus size={16} /> {state.loading ? 'Uploading...' : value ? 'Replace media' : 'Upload media'}</button>
    {state.error && <p className="mt-2 text-xs text-red-300">{state.error}</p>}
  </div>;
};

export default MediaUploader;
