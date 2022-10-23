import { client } from '$services/redis';
import type { CreateItemAttrs } from '$services/types';
import { genId } from '$services/utils';
import { itemKey } from '$services/keys';
import { serialize } from './serialize';
import { deserialize } from './deserialize';

export const getItem = async (id: string) => {
  const item = await client.hGetAll(itemKey(id));

  if (Object.keys(item).length === 0) {
    return null;
  }

  return deserialize(id, item);
};

export const getItems = async (ids: string[]) => {
  const promises = ids.map(id => client.hGetAll(itemKey(id)));

  const items = await Promise.all(promises);

  return items.map((item, idx) => {
    if (Object.keys(item).length === 0) {
      return null;
    }

    deserialize(ids[idx], item);
  });
};

export const createItem = async (attrs: CreateItemAttrs) => {
  const id = genId();
  const serialized = serialize(attrs);

  await client.hSet(itemKey(id), serialized);

  return id;
};
