import App from './app';
import AuthRoute from './components/auth/auth.route';
import CategoryRoute from './components/category/category.route';
import ProductsRoute from './components/product/products.route';
import UsersRoute from './components/users/users.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([new UsersRoute(), new ProductsRoute(), new AuthRoute(), new CategoryRoute()]);

app.start();
