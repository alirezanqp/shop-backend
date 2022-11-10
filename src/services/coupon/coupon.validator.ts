import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';
import ExpireHandelr from './handlers/expire.handler';
import LimitHandelr from './handlers/limit.handler';
import UserHandelr from './handlers/user.handler';

class CouponValidator {
  public handle(user: User, coupon: Coupon) {
    const userHandler = new UserHandelr();
    const limitHandelr = new LimitHandelr();
    const expireHandler = new ExpireHandelr();

    userHandler.setNext(limitHandelr).setNext(expireHandler);
    return userHandler.process(user, coupon);
  }
}

export default CouponValidator;
