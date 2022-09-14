import Product from '@/components/product/interface/products.interface';

export default interface Basket {
  add(product: Product): void;
  remove(product: Product): void;
  items(): Promise<Product[]>;
  count(): Promise<Number>;
  clear(): void;
  total(): Promise<Number>;
  has(product: Product): Promise<Boolean>;
}
