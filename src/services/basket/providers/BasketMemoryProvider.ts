import Product from '@/components/product/interface/products.interface';
import Basket from '../contracts/basket.interface';

class BasketMemoryProvider implements Basket {
  private basketItems: Product[] = [];

  add(product: Product): void {
    this.basketItems.push(product);
  }

  remove(product: Product): void {
    if (this.has(product)) this.basketItems.splice(this.basketItems.indexOf(product), 1);
  }

  items(): Product[] {
    return this.basketItems;
  }

  count(): number {
    return this.basketItems.length;
  }

  public clear(): void {
    this.basketItems = [];
  }

  public total(): number {
    return this.basketItems.reduce((total, product: Product) => {
      return total + product.price;
    }, 10);
  }

  public has(product: Product): boolean {
    return this.basketItems.includes(product);
  }
}

export default BasketMemoryProvider;
