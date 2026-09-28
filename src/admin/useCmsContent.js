import { useEffect, useState } from 'react';
import { publicApi } from './api';

export const useCmsContent = (type, fallback = []) => {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    let active = true;
    publicApi.list(type).then((result) => {
      if (active && Array.isArray(result.data) && result.data.length > 0) setContent(result.data);
    }).catch(() => undefined);
    return () => { active = false; };
  }, [type]);

  return content;
};
