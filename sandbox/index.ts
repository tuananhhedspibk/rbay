import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
  try {
    const promises: Promise<number>[] = [];

    await client.hSet('test1', {
      color: 'red',
      year: 1950,
      owner: null || '',
      service: undefined || '',
    });

    await client.hSet('test2', {
      color: 'blue',
      year: 1960,
      owner: null || '',
      service: undefined || '',
    });

    await client.hSet('test3', {
      color: 'green',
      year: 1970,
      owner: null || '',
      service: undefined || '',
    });

    const results = await Promise.all([
      client.hGetAll('test1'),
      client.hGetAll('test2'),
      client.hGetAll('test3'),
    ]);

    console.log(results);
  } catch (e) {
    console.error(e);
  }
};
run();
