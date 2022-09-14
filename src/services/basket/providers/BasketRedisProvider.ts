import Product from '@/components/product/interface/products.interface';
import { redisConnection } from '@/databases/redis';
import Basket from '../contracts/basket.interface';
import BasketConfigurable from '../contracts/BasketConfigurable';

class BasketRedisProvider implements Basket, BasketConfigurable {
  private key = '';

  public config(config: string): void {
    this.key = config;
  }

  public add(product: Product): void {
    redisConnection
      .get(this.key)
      .then(result => {
        if (result) {
          const items = JSON.parse(result as string);
          items.push(product);

          redisConnection
            .set(this.key, JSON.stringify(items))
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
    redisConnection
      .get(this.key)
      .then(result => {
        if (result) {
          const items = JSON.parse(result as string);
          items.splice(items.indexOf(product), 1);

          redisConnection
            .set(this.key, JSON.stringify(items))
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

  public async items(): Promise<Product[]> {
    const items = await this.getItems();
    return items;
  }

  public async count(): Promise<number> {
    const items = await this.getItems();
    return items.length;
  }

  public clear(): void {
    redisConnection.del(this.key);
  }

  public async total(): Promise<Number> {
    const items = await this.getItems();
    return items.reduce((total: number, product: Product) => {
      return total + product.price;
    }, 0);
  }

  public async has(product: Product): Promise<Boolean> {
    const items = await this.getItems();
    return items.includes(product);
  }

  private async getItems(): Promise<Product[]> {
    const items = await redisConnection
      .get(this.key)
      .then(result => result)
      .catch(() => false);
    if (items) {
      const decodedItems = JSON.parse(items as string);
      return decodedItems;
    }
    return [];
  }
}

export default BasketRedisProvider;
