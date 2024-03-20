export const getQueryString = (query?: Record<string, unknown>): string => {
  if (!query) return '';

  const queryParts: string[] = [];

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      const part = `${encodeURIComponent(key)}=${encodeURIComponent(value as string | number | boolean)}`;
      queryParts.push(part);
    }
  }

  return '?' + queryParts.join('&');
};
