import { hash, compare } from 'bcrypt';
import { HttpException } from '@/exceptions/HttpExceoption';
import { isEmpty } from '@/utils/util';
import User from '../users/interface/users.interface';
import userModel from '../users/model/User';
import CreateSignUpDto from './dto/signup.dto';
import CreateLoginDto from './dto/login.dto';
import { TokenData } from './interface/auth.interface';
import { SECRET_KEY } from '@/config';
import { sign } from 'jsonwebtoken';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateSignUpDto): Promise<{ cookie: string; newUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, 'User data is empty');

    const findUser = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, 'email already exists');

    const hashedPassword = await hash(userData.password, 10);
    const newUser = await this.users.create({ ...userData, password: hashedPassword });

    const tokenData = this.createToken(newUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, newUser };
  }

  public async login(userData: CreateLoginDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, 'User data is empty');

    const findUser = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(404, 'User not found');

    const isPasswordValid = await compare(userData.password, findUser.password);
    if (!isPasswordValid) throw new HttpException(401, 'Invalid password');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: CreateSignUpDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `This email not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken = { _id: user._id };
    const secretKey: any = SECRET_KEY;
    const expiresIn: number = 60 * 60 * 24 * 7;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
