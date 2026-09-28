import MediaUploader from './MediaUploader';

const fieldDefinitions = {
  sections: [
    ['heading', 'Heading', 'text'], ['description', 'Description', 'textarea'], ['image', 'Image', 'media'], ['ctaText', 'CTA text', 'text'], ['ctaUrl', 'CTA URL', 'text'],
  ],
  services: [
    ['title', 'Title', 'text'], ['subtitle', 'Short description', 'text'], ['description', 'Full description', 'textarea'], ['image', 'Image', 'media'], ['icon', 'Icon', 'text'], ['category', 'Category', 'text'], ['ctaText', 'CTA text', 'text'], ['ctaUrl', 'CTA URL', 'text'],
  ],
  'service-categories': [['id', 'Stable ID', 'text'], ['name', 'Name', 'text'], ['description', 'Description', 'textarea'], ['icon', 'Icon', 'text'], ['gradient', 'Gradient classes', 'text'], ['textColor', 'Text color classes', 'text']],
  team: [['name', 'Name', 'text'], ['role', 'Role', 'text'], ['bio', 'Biography', 'textarea'], ['email', 'Email', 'email'], ['linkedin', 'LinkedIn URL', 'url'], ['image', 'Photo', 'media']],
  'about-process': [['heading', 'Heading', 'text'], ['description', 'Description', 'textarea'], ['steps', 'Steps array', 'json']],
  testimonials: [['name', 'Person name', 'text'], ['position', 'Designation', 'text'], ['company', 'Company', 'text'], ['message', 'Testimonial', 'textarea'], ['rating', 'Rating', 'number'], ['profilePhoto', 'Profile photo', 'media']],
  'client-logos': [['name', 'Company name', 'text'], ['description', 'Description', 'text'], ['websiteUrl', 'Website URL', 'text'], ['logo', 'Logo', 'media']],
  carousels: [['title', 'Title', 'text'], ['subtitle', 'Subtitle', 'text'], ['description', 'Description', 'textarea'], ['image', 'Desktop image', 'media'], ['mobileImage', 'Mobile image', 'media'], ['ctaText', 'CTA text', 'text'], ['ctaUrl', 'CTA URL', 'text']],
  contact: [['heading', 'Heading', 'text'], ['description', 'Description', 'textarea'], ['phone', 'Phone', 'text'], ['email', 'Email', 'email'], ['address', 'Address', 'textarea'], ['hours', 'Business hours', 'text']],
  seo: [['page', 'Page route', 'text'], ['title', 'SEO title', 'text'], ['description', 'Meta description', 'textarea'], ['ogTitle', 'OG title', 'text'], ['ogDescription', 'OG description', 'textarea'], ['ogImage', 'OG image', 'media'], ['canonicalUrl', 'Canonical URL', 'text']],
  navigation: [['label', 'Label', 'text'], ['url', 'URL', 'text'], ['visible', 'Visible', 'checkbox']],
  footer: [['label', 'Label', 'text'], ['value', 'Value', 'textarea'], ['url', 'URL', 'text']],
  blogs: [['title', 'Title', 'text'], ['slug', 'Slug', 'text'], ['category', 'Category', 'text'], ['excerpt', 'Excerpt', 'textarea'], ['author', 'Author', 'text'], ['readTime', 'Read time', 'text'], ['thumbnail', 'Thumbnail', 'media'], ['seoTitle', 'SEO title', 'text'], ['seoDescription', 'SEO description', 'textarea']],
  resources: [['title', 'Title', 'text'], ['description', 'Description', 'textarea'], ['enabled', 'Enabled', 'checkbox']],
  pages: [['title', 'Title', 'text'], ['route', 'Route', 'text'], ['status', 'Status', 'text']],
  policies: [['title', 'Title', 'text'], ['lastUpdated', 'Last updated', 'text'], ['html', 'Policy HTML', 'textarea']],
  'roi-calculator': [['title', 'Title', 'text'], ['description', 'Description', 'textarea'], ['defaults', 'Defaults object', 'json'], ['benchmarks', 'Benchmarks object', 'json']],
  quiz: [['title', 'Title', 'text'], ['intro', 'Introduction', 'textarea'], ['questions', 'Questions array', 'json']],
  'quiz-results': [['bands', 'Result bands', 'json']],
};

const CmsFields = ({ type, value, onChange }) => {
  let data = {};
  try { data = JSON.parse(value || '{}'); } catch { return <p className="mb-4 text-sm text-amber-200">Fix the JSON below to enable structured fields.</p>; }
  const fields = fieldDefinitions[type] || [];
  const update = (key, nextValue) => onChange(JSON.stringify({ ...data, [key]: nextValue }, null, 2));

  return <div className="mb-5 grid gap-4 sm:grid-cols-2">
    {fields.map(([key, label, kind]) => <label key={key} className={`block text-sm text-white/70 ${kind === 'textarea' || kind === 'media' ? 'sm:col-span-2' : ''}`}>
      {kind === 'checkbox' ? <span className="flex items-center gap-2"><input type="checkbox" checked={Boolean(data[key])} onChange={(event) => update(key, event.target.checked)} className="h-4 w-4 accent-[#00FFAB]" /> {label}</span> : <>
        {label}
        {kind === 'media' ? <div className="mt-2"><MediaUploader value={data[key] || ''} onChange={(nextValue) => update(key, nextValue)} /></div> : kind === 'textarea' ? <textarea value={data[key] || ''} onChange={(event) => update(key, event.target.value)} rows={3} className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-[#00FFAB]" /> : kind === 'json' ? <textarea value={JSON.stringify(data[key] ?? {}, null, 2)} onChange={(event) => { try { update(key, JSON.parse(event.target.value)); } catch { /* Advanced JSON editor below remains available. */ } }} rows={5} className="mt-2 w-full rounded-lg border border-white/15 bg-black p-3 font-mono text-xs text-white outline-none focus:border-[#00FFAB]" /> : <input type={kind} value={data[key] ?? ''} onChange={(event) => update(key, kind === 'number' ? Number(event.target.value) : event.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-[#00FFAB]" />}
      </>}
    </label>)}
  </div>;
};

export default CmsFields;
