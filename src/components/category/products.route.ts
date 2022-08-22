import { Routes } from '@/routes/routes.interface';
import { Router } from 'express';
import ProductsController from './products.controller';

class ProductsRoute implements Routes {
  public path = '/products/';
  public router: Router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`);
  }
}

export default ProductsRoute;
