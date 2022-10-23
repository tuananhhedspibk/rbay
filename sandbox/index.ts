import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
  try {
    await client.hSet('hihi', {
      color: 'red',
      year: 1950,
      owner: null || '',
      service: undefined || '',
    });
  
    const car = await client.hGetAll('hihi#123');

    if (Object.keys(car).length === 0) {
      console.log('Car not found, response with 404');
      return;
    }
  
    console.log(car);
  } catch (e) {
    console.error(e);
  }
};
run();
