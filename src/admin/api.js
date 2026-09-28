const API_URL = import.meta.env.VITE_API_URL || 'https://onethrive-backend.onrender.com';

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  const body = await response.json().catch(() => ({}));
  if (response.status === 401) {
    window.dispatchEvent(new CustomEvent('onethrive:admin-unauthorized'));
  }
  if (!response.ok) {
    throw new Error(body.error || 'Request failed');
  }
  return body;
};

export const adminApi = {
  login: (password) => request('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) }),
  logout: () => request('/api/admin/logout', { method: 'POST' }),
  me: () => request('/api/admin/me'),
  list: (type) => request(`/api/admin/cms/${type}`),
  create: (type, payload) => request(`/api/admin/cms/${type}`, { method: 'POST', body: JSON.stringify(payload) }),
  update: (type, id, payload) => request(`/api/admin/cms/${type}/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  remove: (type, id) => request(`/api/admin/cms/${type}/${id}`, { method: 'DELETE' }),
  uploadMedia: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_URL}/api/admin/media/upload`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || 'Media upload failed');
    return body;
  },
  listMedia: () => request('/api/admin/media'),
  removeMedia: (id) => request(`/api/admin/media/${id}`, { method: 'DELETE' }),
};

export const publicApi = {
  list: async (type) => {
    const response = await fetch(`${API_URL}/api/cms/content?type=${encodeURIComponent(type)}`);
    if (!response.ok) throw new Error('CMS content unavailable');
    return response.json();
  },
};
