import Product from '@/components/product/interface/products.interface';

export default interface Basket {
  add(product: Product): void;
  remove(product: Product): void;
  items(): Product[];
  count(): number;
  clear(): void;
  total(): number;
  has(product: Product): boolean;
}
