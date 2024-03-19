export const getQueryString = (query?: Record<string, unknown>): string => {
  if (!query) return '';

  const queryParts: string[] = [];

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      const part = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
      queryParts.push(part);
    }
  }

  return '?' + queryParts.join('&');
};
