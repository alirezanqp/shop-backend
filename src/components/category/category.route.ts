import { Routes } from '@/routes/routes.interface';
import { Router } from 'express';
import AdminCategoriesController from './admin/category.controller';
import CategoryController from './category.controller';

class CategoryRoute implements Routes {
  public path = 'category';
  public router: Router = Router();
  public categoryController = new CategoryController();
  public adminCategoryController = new AdminCategoriesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.categoryController.getCategory);

    // Category Admin Router
    this.router.post(`${this.path}/admin/`, this.adminCategoryController.addCategory);
    this.router.get(`${this.path}/admin/`, this.adminCategoryController.getAllCategories);
  }
}

export default CategoryRoute;
