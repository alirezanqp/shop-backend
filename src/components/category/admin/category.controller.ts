import { Request, Response } from 'express';
import Category from '../interface/category.interface';
import categoryModel from '../model/Category';

class AdminCategoriesController {
  public addCategory = async (req: Request, res: Response) => {
    const newCategory: Category = await categoryModel.create({ ...req.body });
    return res.status(201).send(newCategory);
  };

  public getAllCategories = async (req: Request, res: Response) => {
    const allCategories = await categoryModel.find({}, { title: 1, slug: 1 });
    return res.status(200).send(allCategories);
  };
}

export default AdminCategoriesController;
