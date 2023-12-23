import { ImArrowLeft2 } from "react-icons/im"
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cartFromQuery = JSON.parse(queryParams.get("cart")) || [];

  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const cart = [...storedCart, ...cartFromQuery];

  return (
    <div className="p-6">
      <div className="flex gap-3 items-center pb-5">
        <button onClick={() => navigate(-1)} className="border rounded-full p-2"><ImArrowLeft2 /></button>
        <div className="font-bold">My Cart</div>
        <div className="text-gray-400">&#40;{cart.length}&#41;</div>
        <div className="border rounded-xl absolute right-6 p-2 text-white bg-royal-red flex gap-2 items-center">
          <Link to='/checkout' className="flex items-center gap-3 hover:scale-105 hover:transform transition:transform duration-300">
            <button className="font-bold">Checkout</button>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <CartItems cart={cart} />
    </div>
  )
}

export default Cart