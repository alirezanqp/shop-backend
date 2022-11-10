import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';

interface CouponHandler {
  setNext(handler: CouponHandler): CouponHandler;
  process(user: User, coupon: Coupon): Coupon | null;
}

export default CouponHandler;
