import Product from '@/components/product/interface/products.interface';
import { redisConnection } from '@/databases/redis';
import Basket from '../contracts/basket.interface';

class BasketRedisProvider implements Basket {
  public add(product: Product): void {
    const key = 'session:basket:uid';
    redisConnection
      .get(key)
      .then(result => {
        if (result) {
          const items = JSON.parse(result as string);
          items.push(product);

          redisConnection
            .set(key, JSON.stringify(items))
            .then(() => {
              console.log('set!');
            })
            .catch(err => {
              console.log('fail!', err);
            });
        }
      })
      .catch(err => {
        console.log('redis cannot fetch basket items: ', err);
      });
  }

  public remove(product: Product): void {
    const key = 'session:basket:uid';
    redisConnection
      .get(key)
      .then(result => {
        if (result) {
          const items = JSON.parse(result as string);
          items.splice(items.indexOf(product), 1);

          redisConnection
            .set(key, JSON.stringify(items))
            .then(() => {
              console.log('Removed!');
            })
            .catch(err => {
              console.log('fail!', err);
            });
        }
      })
      .catch(err => {
        console.log('redis cannot remove basket items: ', err);
      });
  }
  items(): void {
    // const key = 'session:basket:uid';
    /*
    redisConnection
      .(key)
      .then(result => {
        if (result) {
          const items = JSON.parse(result);
          const products = items.forEach((item: Product, _: number) => {
            return item;
          });
          return products;
        }
      })
      .catch(err => {
        console.log('redis cannot remove basket items: ', err);
      });*/
  }
  count(): number {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
  total(): number {
    throw new Error('Method not implemented.');
  }
  has(product: Product): boolean {
    throw new Error('Method not implemented.');
  }
}

export default BasketRedisProvider;
