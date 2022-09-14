import Basket from './contracts/basket.interface';
import BasketMemoryProvider from './providers/BasketMemoryProvider';
import BasketRedisProvider from './providers/BasketRedisProvider';

class BasketProviderFactory {
  private providers: Map<string, Basket> = new Map<string, Basket>();
  constructor() {
    this.providers.set('memory', new BasketMemoryProvider());
    this.providers.set('redis', new BasketRedisProvider());
  }

  public getProvider(name: string): Basket {
    if (!this.has(name)) throw new Error(`Provider ${name} does not exist!`);

    return this.providers.get(name) as Basket;
  }

  public registerProvider(name: string, provider: Basket) {
    if (!this.has(name)) this.providers.set(name, provider);
  }

  public has(name: string): boolean {
    return this.providers.has(name);
  }
}

export default BasketProviderFactory;
