export const pageCacheKey = (id: string) => {
  return `pageCache#${id}`;
};

export const userKey = (id: string) => {
  return `users#${id}`;
};

export const sessionKey = (id: string) => {
  return `sessions#${id}`;
};
