import { ImArrowLeft2 } from "react-icons/im"
import { useLocation } from "react-router-dom";
import CartItems from "../components/CartItems";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cart = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cartFromQuery = JSON.parse(queryParams.get("cart")) || [];

  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const cart = [...storedCart, ...cartFromQuery];

  return (
    <div className="p-6">
      <div className="flex gap-3 items-center pb-5">
        <div className="border rounded-full p-2"><ImArrowLeft2 /></div>
        <div className="font-bold">My Cart</div>
        <div className="text-gray-400">&#40;{cart.length}&#41;</div>
        <div className="border rounded-xl absolute right-6 p-2 text-white bg-royal-red flex gap-2 items-center">
        <button className="font-bold">Checkout</button>
        <FaLongArrowAltRight />
      </div>
      </div>
      <CartItems cart={cart} />
    </div>
  )
}

export default Cart