export const pageCacheKey = (id: string) => {
  return `pageCache#${id}`;
};

export const userKey = (id: string) => {
  return `users#${id}`;
};

export const sessionKey = (id: string) => {
  return `sessions#${id}`;
};

export const itemKey = (id: string) => {
  return `items#${id}`;
};
