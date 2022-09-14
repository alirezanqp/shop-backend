import Product from '@/components/product/interface/products.interface';
import Basket from '../contracts/basket.interface';

class BasketMemoryProvider implements Basket {
  private basketItems: Product[] = [];

  add(product: Product): void {
    this.basketItems.push(product);
  }

  async remove(product: Product): Promise<void> {
    if (await this.has(product)) this.basketItems.splice(this.basketItems.indexOf(product), 1);
  }

  items(): Promise<Product[]> {
    return Promise.resolve(this.basketItems);
  }

  count(): Promise<Number> {
    return Promise.resolve(this.basketItems.length);
  }

  public clear(): void {
    this.basketItems = [];
  }

  public total(): Promise<Number> {
    const totalBasket = this.basketItems.reduce((total, product: Product) => {
      return total + product.price;
    }, 10);
    return Promise.resolve(totalBasket);
  }

  public has(product: Product): Promise<Boolean> {
    return Promise.resolve(this.basketItems.includes(product));
  }
}

export default BasketMemoryProvider;
