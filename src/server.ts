import App from './app';
import ProductsRoute from './components/product/products.route';
import UsersRoute from './components/users/users.route';
import validateEnv from '@/utils/validateEnv';

validateEnv();

const app = new App([new UsersRoute(), new ProductsRoute()]);

app.start();
