import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';
import AbstractCouponHandler from '../abstracat.coupon.handler';

class UserHandelr extends AbstractCouponHandler {
  public process(user: User, coupon: Coupon): Coupon | null {
    const { userConstraint } = coupon.constraints;
    if (user.id !== userConstraint.id) {
      throw new Error('کدتخفیف برای شما معتبر نمی باشد');
    }
    return super.process(user, coupon);
  }
}

export default UserHandelr;
